import { useCallback, useState } from "react";
import { DataProps } from "../pages/Photo/types";

export const useFetch = () => {
  const [data, setData] = useState<DataProps>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string, options: any) => {
    let response;
    let json;
    try {
      setError(null);
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
};
