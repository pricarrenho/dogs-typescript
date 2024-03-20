import React from "react";
import { Feed } from "../../Components/Feed/Feed";
import { Head } from "../../Components/Head/Head";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos"
      />

      <Feed />
    </section>
  );
};
