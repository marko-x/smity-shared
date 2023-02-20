import { z } from "zod";
import QueryString from "qs";

import { ConnectionDatas, connections } from "./connections";
import { ApiIssue, JsonRepsonseInit, jsonResponse } from "./response";
import { getBody, getQueryParams } from "./utils/parser";
import routeToUrl from "./utils/routeToUrl";
import { validateOrThrow } from "./utils/validation";

export function selectConnection(key: keyof typeof connections) {
  return connections[key];
}

export async function serverConnectionRequestValidation<
  Key extends keyof typeof connections,
  RequestData extends ConnectionDatas[Key]["RequestTransformed"]
>(
  key: Key,
  request: Request,
  params: unknown
): Promise<{ validated: RequestData } | z.ZodError> {
  const selectedConnection = selectConnection(key);

  const queryParams = getQueryParams(request.url);
  const body = await getBody(request);

  const validation = selectedConnection.requestSchema.safeParse({
    params: params,
    query: queryParams,
    body: body,
  });
  if (!validation.success) {
    return validation.error;
  }

  return { validated: validation.data as RequestData };
}

export function connectionSuccessResponse<
  Key extends keyof typeof connections,
  ResponseData extends z.input<typeof connections[Key]["responseSchema"]>
>(key: Key, responseData: ResponseData, init: JsonRepsonseInit = {}) {
  const selectedConnection = selectConnection(key);
  const validated = selectedConnection.responseSchema.safeParse(responseData);
  if (!validated.success) {
    throw Error("Response data not valid.");
  }
  return jsonResponse(responseData, init);
}

export async function connectionFetch<
  Key extends keyof typeof connections,
  RequestData extends z.infer<typeof connections[Key]["requestSchema"]>,
  ResponseData extends z.infer<typeof connections[Key]["responseSchema"]>
>(
  key: Key,
  baseUrl: string,
  requestConfiguration: RequestData,
  callbacks: {
    onSuccess: (data: ResponseData) => void;
    onFailed: (message: string) => void;
    onIssues: (issues: ApiIssue[]) => void;
  }
): Promise<void> {
  try {
    const selectedConnection = selectConnection(key);
    // console.log("connectionFetch key:", key);

    const requestData = validateOrThrow(
      selectedConnection.requestSchema,
      requestConfiguration
    );

    const subUrl =
      "params" in requestData
        ? routeToUrl(selectedConnection.route, requestData.params)
        : selectedConnection.route;

    const queryString =
      "query" in requestData
        ? QueryString.stringify(requestData.query, { addQueryPrefix: true })
        : "";

    const url = `${baseUrl}${subUrl}${queryString}`;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 10000);

    // console.log("connectionFetch.fetch", url);
    // console.log("connectionFetch.fetch requestData:", requestData);
    const fetched = await fetch(url, {
      method: selectedConnection.method,
      body:
        "body" in requestData ? JSON.stringify(requestData.body) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      signal: controller.signal,
    });
    clearTimeout(id);

    // console.log("connectionFetch.ok?", fetched.ok);
    if (!fetched.ok) {
      /* Use the Response.ok property to determine whether the status code was in the range from 200 to 299. */
      switch (fetched.status) {
        case 404:
          throw new Error("NotFound");
        case 401:
          throw new Error("NotAllowed");
        default:
          throw new Error("UnhandledStatus");
      }
    }
    const fetchedData = await fetched.json();
    // if (fetchedData && typeof fetchedData === "object") {
    if (fetchedData.issues) {
      // console.log("connectionFetch issues:", fetchedData.issues);
      callbacks.onIssues(fetchedData.issues);
      return;
    }
    const validData = validateOrThrow(
      selectedConnection.responseSchema,
      fetchedData
    );
    callbacks.onSuccess(validData as ResponseData);
    return;
  } catch (e) {
    // console.log("connectionFetch catched error:", e);
    if (e instanceof SyntaxError) {
      callbacks.onFailed(`Es ist ein Syntax-Error aufgetreten.`);
      return;
    }
    if (e instanceof Error) {
      switch (e.message) {
        case "Aborted":
          callbacks.onFailed("Die Anfrage dauert zu lange. Bist du offline?");
          return;

        case "Network request failed":
          callbacks.onFailed("Der Server antwortet nicht.");
          return;

        case "NotFound":
          callbacks.onFailed("Die angeforderten Daten wurden nicht gefunden.");
          return;

        case "NotAllowed":
          callbacks.onFailed(
            "Du hast aktuell keinen Zugriff. Bist du angemeldet?"
          );
          return;

        case "UnhandledStatus":
          callbacks.onFailed(
            "Es liegt leider ein Fehler vor. Bitte kontaktiere uns, wenn der Fehler nicht verschwindet."
          );
          return;

        case "ValidationFailed":
          callbacks.onFailed("Die Daten konnten nicht verarbeitet werden.");
          return;

        default:
          callbacks.onFailed("Es ein unerwarteter Fehler aufgetreten.");
          return;
      }
    }

    callbacks.onFailed("Es ist ein Fehler aufgetreten. (Client?)");

    return;
  }
}
