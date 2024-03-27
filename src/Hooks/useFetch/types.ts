export type UseFetch<T> = {
  data?: T;
  loading: boolean;
  error?: string;
  request: (
    url: string,
    options: any
  ) => Promise<{ response?: Response; json?: T }>;
};
