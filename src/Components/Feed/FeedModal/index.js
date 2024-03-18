import { useEffect } from "react";
import styles from "./styles.module.css";
import { useFetch } from "../../../Hooks/useFetch";

import { Error } from "../../Helper/Error";
import { Loading } from "../../Helper/Loading";
import { PhotoContent } from "../../../pages/Photo/PhotoContent";
import { PHOTO_GET } from "../../../services/api";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  console.log(data);

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
