import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Routes } from "../../routes";
import styles from "./styles.module.css";

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
