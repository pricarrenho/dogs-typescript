import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../services/api";
import { Data, GlobalContextType, GlobalProviderProps } from "./types";

export const UserContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const UserStorage = ({ children }: GlobalProviderProps) => {
  const [data, setData] = useState<Data>();
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      setData(undefined);
      setError(undefined);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    const alternativeErrorText = "Usuário ou senha incorreta. Tente novamente.";

    try {
      setError(undefined);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);

      if (!tokenRes.ok)
        throw new Error(`Erro: ${tokenRes.statusText || alternativeErrorText}`);

      const { token } = await tokenRes.json();

      window.localStorage.setItem("token", token);

      await getUser(token);

      navigate("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(undefined);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error("Token inválido");

          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
