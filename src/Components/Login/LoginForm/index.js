import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../Hooks/useForm";
import { Button } from "../../Forms/Button";
import { Input } from "../../Forms/Input";
import { UserContext } from "../../../UserContext";
import { Error } from "../../Helper/Error";
import styles from "./styles.module.css";
import stylesBTN from "../../Forms/Button/styles.module.css";
import { Head } from "../../Helper/Head";

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />

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
