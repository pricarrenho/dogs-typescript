import { useState } from "react";
import styles from "./Image.module.css";

export const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}

      <img
        onLoad={handleLoad}
        className={`${styles.img} ${props.single ? styles.single : ""}`}
        alt={alt}
        {...props}
      />
    </div>
  );
};
