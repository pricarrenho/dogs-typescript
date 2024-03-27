import React from "react";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";
import { FaHeart } from "react-icons/fa";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>
        Desenvolvido com <FaHeart /> por {""}
        <span>
          <Link to={"https://pricarrenho.com.br"} target="_blank">
            <b>Priscilla Carrenho</b>
          </Link>
        </span>
      </p>
    </footer>
  );
};
