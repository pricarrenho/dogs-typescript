import React, { useState } from "react";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import { useFetch } from "../../../Hooks/useFetch";
import { Error } from "../../../Components/Error";
import { COMMENT_POST } from "../../../services/api";
import { PhotoCommentsFormProps } from "../types";
import styles from "./styles.module.css";

export const PhotoCommentsForm = ({
  id,
  setComments,
  single,
}: PhotoCommentsFormProps) => {
  const [comment, setComment] = useState("");

  const { request, error } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response?.ok) {
      setComment("");
      setComments((comments: any) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};
