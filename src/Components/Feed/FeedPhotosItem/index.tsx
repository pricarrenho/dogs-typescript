import React from "react";
import { Image } from "../../Image/Image";
import { FeedPhotosItemProps } from "../types";
import styles from "./styles.module.css";

export const FeedPhotosItem = ({
  photo,
  setModalPhoto,
}: FeedPhotosItemProps) => {
  function handleCLick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleCLick}>
      <Image src={photo.src} alt={photo.title} single={false} />
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  );
};
