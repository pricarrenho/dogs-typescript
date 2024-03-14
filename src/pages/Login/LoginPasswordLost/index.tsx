import React from "react";
import { Input } from "../../../Components/Forms/Input";
import { Button } from "../../../Components/Forms/Button";
import { useForm } from "../../../Hooks/useForm";
import { Error } from "../../../Components/Helper/Error";
import { Head } from "../../../Components/Helper/Head";
import { useFetch } from "../../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../../services/api";

export const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

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
      <Head title="Perdeu a senha" />

      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={HandleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};
