import React from "react";
import { useContext } from "react";
import { useForm } from "../../../Hooks/useForm";
import { UserContext } from "../../../context/UserContext";
import { Head } from "../../../Components/Head/Head";
import { Input } from "../../../Components/Input";
import { Button } from "../../../Components/Button";
import { Error } from "../../../Components/Error";
import { Link } from "react-router-dom";
import stylesBTN from "../../../Components/Button/styles.module.css";
import styles from "./styles.module.css";

export const LoginForm = () => {
  const username = useForm(false);
  const password = useForm(false);

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" description="Faça seu login aqui" />

      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>

      <Link className={styles.lostPassword} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastra-se no site</p>
        <Link className={stylesBTN.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};
