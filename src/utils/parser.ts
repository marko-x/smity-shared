import { z } from "zod";
import QueryString from "qs";

export function getQueryParams(url: string) {
  try {
    const { search } = new URL(url);
    return QueryString.parse(search, { ignoreQueryPrefix: true });
  } catch (e) {
    return {};
  }
}

export async function getBody(request: Request) {
  return await request
    .json()
    .then((d) => {
      return d;
    })
    .catch((e) => {
      return {};
    });
}

export async function apiSafeParse<
  TValues extends { params?: unknown; query?: unknown; body?: unknown }
>(zSchema: z.Schema<TValues>, request: Request, params: unknown) {
  const queryParams = getQueryParams(request.url);
  const body = await getBody(request);

  return zSchema.safeParse({ params: params, query: queryParams, body: body });
}
