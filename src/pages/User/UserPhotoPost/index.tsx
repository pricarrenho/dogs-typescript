import React, { useEffect, useState } from "react";
import { Input } from "../../../Components/Input";
import { Button } from "../../../Components/Button";
import { useForm } from "../../../Hooks/useForm";
import { useFetch } from "../../../Hooks/useFetch";
import { Error } from "../../../Components/Error";
import { useNavigate } from "react-router-dom";
import { Head } from "../../../Components/Head/Head";
import { PHOTO_POST } from "../../../services/api";
import styles from "./styles.module.css";

type ImageData = {
  preview: string;
  raw: File;
};

export const UserPhotoPost = () => {
  const nome = useForm(false);
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState<ImageData | null>(null);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();

    if (img) {
      formData.append("img", img.raw);
      formData.append("nome", nome.value);
      formData.append("peso", peso.value);
      formData.append("idade", idade.value);
    }

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      });
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" description="Poste sua foto aqui" />

      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img?.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url("${img.preview}")` }}
          ></div>
        )}
      </div>
    </section>
  );
};
