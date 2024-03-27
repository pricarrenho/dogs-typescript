import React, { useState } from "react";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import { useFetch } from "../../../Hooks/useFetch";
import { Error } from "../../../Components/Error";
import { COMMENT_POST } from "../../../services/api";
import { Comments } from "../../../types/types";
import { PhotoCommentsFormProps } from "./type";
import styles from "./styles.module.css";

export const PhotoCommentsForm = ({
  id,
  single,
  comments,
  setComments,
}: PhotoCommentsFormProps) => {
  const [comment, setComment] = useState("");

  const { request, error } = useFetch<Comments>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST({ id, comment, token });
    const { response, json } = await request(url, options);

    if (response?.ok && json) {
      const newCommentsList = comments ? [...comments, json] : [json];

      setComment("");

      setComments(newCommentsList);
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
