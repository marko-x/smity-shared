import { useState } from "react";

export function useSmityFetch() {
  const [data, setData] = useState();

  return [data, setData] as const;
}
