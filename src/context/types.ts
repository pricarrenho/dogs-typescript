import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  login: boolean;
  loading: boolean;
  error?: string;
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
  data?: DataProps;
};

export type DataProps = {
  id: number;
  username: string;
  nome: string;
  email: string;
};
