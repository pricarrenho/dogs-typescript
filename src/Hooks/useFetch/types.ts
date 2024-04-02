export type UseFetch<T> = {
  data?: T;
  loading: boolean;
  error?: string;
  request: (
    url: string,
    options: RequestOptions
  ) => Promise<{ response?: Response; json?: T }>;
};

export type RequestOptions = {
  cache?: string;
  method?: string;
};
