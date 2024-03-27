import { useCallback, useState } from "react";
import { UseFetch } from "./types";

export function useFetch<T>(): UseFetch<T> {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string, options: any) => {
    let response;
    let json;
    try {
      setError(undefined);
      setLoading(true);

      response = await fetch(url, options);
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
