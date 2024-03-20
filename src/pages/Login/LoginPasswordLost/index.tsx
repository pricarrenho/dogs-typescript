import React from "react";
import { Input } from "../../../Components/Input";
import { Button } from "../../../Components/Button";
import { useForm } from "../../../Hooks/useForm";
import { Error } from "../../../Components/Error";
import { Head } from "../../../Components/Head/Head";
import { useFetch } from "../../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../../services/api";

export const LoginPasswordLost = () => {
  const login = useForm(false);
  const { loading, error, request } = useFetch();

  async function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head
        title="Perdeu a senha"
        description="Perdeu sua senha? Recupere-a aqui"
      />

      <h1 className="title">Perdeu a senha?</h1>

      <form onSubmit={HandleSubmit}>
        <Input label="Email / Usuário" type="text" name="login" {...login} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar Email</Button>
        )}
      </form>

      <Error error={error} />
    </section>
  );
};
