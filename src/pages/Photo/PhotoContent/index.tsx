import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { Image } from "../../../Components/Helper/Image";
import { PhotoComments } from "../PhotoComments";
import { PhotoDelete } from "../PhotoDelete";
import { PhotoContentProps } from "../types";
import styles from "./styles.module.css";

export const PhotoContent = ({ data, single }: PhotoContentProps) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div>
        <Image single={single} src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualization}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {Number(photo.idade) <= 1
                ? photo.idade + " ano"
                : photo.idade + " anos"}
            </li>
          </ul>
        </div>
        <PhotoComments single={single} id={photo.id} commentArray={comments} />
      </div>
    </div>
  );
};
