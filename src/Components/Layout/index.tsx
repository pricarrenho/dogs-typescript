import React from "react";
import { Header } from "../Header";

import { Footer } from "../Footer";
import styles from "./styles.module.css";
import { Routes } from "../../routes";

export function Layout() {
  return (
    <>
      <Header />

      <main className={styles.AppBody}>
        <Routes />
      </main>

      <Footer />
    </>
  );
}
