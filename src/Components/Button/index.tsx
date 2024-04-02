import React from "react";
import { ButtonProps } from "./types";
import styles from "./styles.module.css";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
