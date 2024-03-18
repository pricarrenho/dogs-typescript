import React from "react";
import styles from "./styles.module.css";
import { ButtonProps } from "./types";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
