import { z } from "zod";

export type JsonRepsonseInit = number | ResponseInit;
export function jsonResponse<Data extends unknown>(
  data: Data,
  init: JsonRepsonseInit = {}
) {
  let responseInit = typeof init === "number" ? { status: init } : init;

  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(data), {
    ...responseInit,
    headers,
  });
}

export async function apiSuccessResponse<T>(
  responseSchema: z.Schema<T>,
  responseData: T,
  init?: JsonRepsonseInit
) {
  return jsonResponse(responseData, init);
}

export type ApiIssue = { message: string; pathname: string };

export async function apiIssuesResponse(
  zIssues: (z.ZodIssue | { message: string; path: string[] })[],
  init?: JsonRepsonseInit
) {
  const issues: ApiIssue[] = zIssues.map((d) => ({
    message: d.message,
    pathname: d.path.join("."),
  }));
  return jsonResponse({ issues: issues }, init);
}
