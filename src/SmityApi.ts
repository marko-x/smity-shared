import {
  useState,
  createContext,
  useContext,
  createElement,
  ReactNode,
  useEffect,
} from "react";
import { z } from "zod";
import { connectionFetch } from "./connection";
import { connections } from "./connections";
import { ApiIssue } from "./response";

export const SmityApiContext = createContext<{
  options: { baseUrl: string; apiRoute: string };
}>({ options: { baseUrl: "http://localhost:3000", apiRoute: "/api" } });

export function useSmityApiContext() {
  const s = useContext(SmityApiContext);
  if (s === undefined) {
    throw new Error("useSmityContext must be inside in a SmityApiProvider.");
  }
  return s;
}

export function SmityApiProvider(props: {
  baseUrl: string;
  apiRoute: string;
  children: ReactNode;
}) {
  return createElement(SmityApiContext.Provider, {
    value: { options: { baseUrl: props.baseUrl, apiRoute: props.apiRoute } },
    children: props.children,
  });
}

export function useSmityApi<
  Key extends keyof typeof connections,
  RequestData extends z.input<typeof connections[Key]["requestSchema"]>,
  ResponseData extends z.output<typeof connections[Key]["responseSchema"]>,
  StateData extends {
    status: "init" | "initialFetching" | "refetching" | "idle" | "idleError";
    responseData: ResponseData | null;
    responseIssues: ApiIssue[] | [];
    responseErrorMessage: string | null;
  }
>(key: Key, callbacks?: { onStateChanged?: (state: StateData) => void }) {
  const [state, setState] = useState<StateData>({
    status: "init",
    responseData: null,
    responseIssues: [],
    responseErrorMessage: null,
  } as StateData);

  const { options } = useSmityApiContext();

  useEffect(() => {
    callbacks && callbacks.onStateChanged && callbacks.onStateChanged(state);
  }, [state.status]);

  return {
    fetch: (requestConfiguration: RequestData) => {
      setState((s) => ({
        ...s,
        status: s.status === "init" ? "initialFetching" : "refetching",
        responseErrorMessage: null,
        responseIssues: [],
      }));

      connectionFetch(
        key,
        `${options.baseUrl}${options.apiRoute}`,
        requestConfiguration,
        {
          onSuccess(data) {
            // console.log("useSmityApi.onSuccess");
            setState((s) => ({
              ...s,
              status: "idle",
              responseData: data as ResponseData,
              responseErrorMessage: null,
              responseIssues: [],
            }));
          },
          onIssues(issues) {
            // console.log("useSmityApi.onIssues");
            setState((s) => ({
              ...s,
              status: "idle",
              responseIssues: issues,
              responseErrorMessage: null,
            }));
          },
          onFailed(message) {
            // console.log("useSmityApi.onFailed");
            setState((s) => ({
              ...s,
              status: "idleError",
              responseIssues: [],
              responseErrorMessage: message,
            }));
          },
        }
      );
    },
    state,
  };
}
