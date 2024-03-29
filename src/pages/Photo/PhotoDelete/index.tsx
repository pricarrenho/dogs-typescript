import React from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../../services/api";
import styles from "./styles.module.css";

export const PhotoDelete = ({ id }: { id: number }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_DELETE({ id, token });
      const { response } = await request(url, options);
      if (response?.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};
