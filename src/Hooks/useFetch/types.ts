export type UseFetch<T> = {
  data?: T;
  loading: boolean;
  error?: string;
  request: (
    url: string,
    options: Options
  ) => Promise<{ response?: Response; json?: T }>;
};

export interface Options extends RequestInit {
  method: string;
  cache?: RequestCache;
}
