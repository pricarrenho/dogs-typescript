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
  data?: Data;
};

export type Data = {
  id: number;
  username: string;
  nome: string;
  email: string;
};
