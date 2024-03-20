import React from "react";
import { useParams } from "react-router-dom";
import { Head } from "../../../Components/Head/Head";
import { Feed } from "../../../Components/Feed/Feed";

export const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      {user && (
        <>
          <Head title={user} description="Veja seu perfil aqui" />
          <h1 className="title">{user}</h1>
          <Feed user={user} />
        </>
      )}
    </section>
  );
};
