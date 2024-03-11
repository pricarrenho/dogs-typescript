import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "../LoginForm";
import { LoginCreate } from "../LoginCreate";
import { LoginPasswordLost } from "../LoginPasswordLost";
import { LoginPasswordReset } from "../LoginPasswordReset";
import { UserContext } from "../../../UserContext";
import styles from "./styles.module.css";
import { Loading } from "../../Helper/Loading";
import { NotFound } from "../../NotFound";

export const Login = () => {
  const { login, loading } = useContext(UserContext);

  if (loading) return <Loading />;
  if (login) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
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
