import { useContext } from "react";
import { useForm } from "../../../Hooks/useForm";
import { UserContext } from "../../../context/UserContext";
import { Head } from "../../../Components/Helper/Head";
import { Input } from "../../../Components/Forms/Input";
import { Button } from "../../../Components/Forms/Button";
import { Error } from "../../../Components/Helper/Error";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import stylesBTN from "../../../Components/Forms/Button/styles.module.css";

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
