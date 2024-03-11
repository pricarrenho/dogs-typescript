import styles from "./styles.module.css";
import { Image } from "../../Helper/Image";

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleCLick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleCLick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  );
};
