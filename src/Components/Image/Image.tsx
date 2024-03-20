import React, { useState } from "react";
import { ImageProps } from "./types";
import styles from "./Image.module.css";

export const Image = ({ alt, src, single }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    const target = event.target as HTMLImageElement;
    setSkeleton(false);
    if (target) {
      target.style.opacity = "1";
    }
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}

      <img
        onLoad={handleLoad}
        className={`${styles.img} ${single ? styles.single : ""}`}
        alt={alt}
        src={src}
      />
    </div>
  );
};
