import { useCallback, useState } from "react";
import { RequestOptions, UseFetch } from "./types";

export function useFetch<T>(): UseFetch<T> {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string, options: RequestOptions) => {
    let response;
    let json;
    try {
      setError(undefined);
      setLoading(true);

      const fetchOptions: RequestInit = {
        cache: options.cache as RequestCache,
        method: options.method,
      };

      response = await fetch(url, fetchOptions);
      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (error) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
}
