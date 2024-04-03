import React from "react";
import { useContext } from "react";
import { useForm } from "../../../Hooks/useForm";
import { UserContext } from "../../../context/UserContext";
import { useFetch } from "../../../Hooks/useFetch";
import { USER_POST } from "../../../services/api";
import { Head } from "../../../Components/Head/Head";
import { Input } from "../../../Components/Input";
import { Button } from "../../../Components/Button";
import { Error } from "../../../Components/Error";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const LoginCreate = () => {
  const username = useForm(false);
  const email = useForm("email");
  const password = useForm(false);

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response?.ok) userLogin(username.value, password.value);
  }

  return (
    <section className={`${styles.container} animeLeft`}>
      <Head title="Crie sua Conta" description="Crie sua conta aqui" />

      <div>
        <Link className={styles.lostPasswordBTN} to="/login">
          Voltar
        </Link>
      </div>

      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};
