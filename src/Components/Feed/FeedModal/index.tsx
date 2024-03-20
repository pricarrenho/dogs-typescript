import React, { useEffect } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { Error } from "../../Error";
import { Loading } from "../../Loading/Loading";
import { PhotoContent } from "../../../pages/Photo/PhotoContent";
import { PHOTO_GET } from "../../../services/api";
import styles from "./styles.module.css";
import { FeedModalProps } from "../types";

export const FeedModal = ({ photo, setModalPhoto }: FeedModalProps) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} single={false} />}
    </div>
  );
};
