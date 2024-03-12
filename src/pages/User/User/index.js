import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserHeader } from "../UserHeader";
import { Feed } from "../../../Components/Feed/Feed";
import { UserPhotoPost } from "../UserPhotoPost";
import { UserStats } from "../UserStats";
import { UserContext } from "../../../context/UserContext";
import { NotFound } from "../../NotFound";
import { Head } from "../../../Components/Helper/Head";

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
