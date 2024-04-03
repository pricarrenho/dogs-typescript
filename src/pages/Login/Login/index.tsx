import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Loading } from "../../../Components/Loading/Loading";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "../LoginForm";
import { LoginCreate } from "../LoginCreate";
import { LoginPasswordLost } from "../LoginPasswordLost";
import { LoginPasswordReset } from "../LoginPasswordReset";
import { NotFound } from "../../NotFound";
import styles from "./styles.module.css";

export const Login = () => {
  const { login, loading } = useContext(UserContext);

  if (loading) return <Loading />;
  if (login) return <Navigate to="/conta" />;

  return (
    <section className={`${styles.login} mainContainer`}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};
