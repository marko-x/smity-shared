export default function routeToUrl(
  route: string,
  params?: Record<string, string>
) {
  return route.replace(/\$(\w+)/g, (_, key: string) => {
    if (!params || params[key] === undefined)
      throw Error(`Missing "$${key}" param`);
    return params[key]!;
  });
}
