import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import { Error } from "../../../Components/Error";
import { Loading } from "../../../Components/Loading/Loading";
import { PhotoContent } from "../PhotoContent";
import { PHOTO_GET } from "../../../services/api";
import { DataProps } from "../../../types/globalTypes";

export const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch<DataProps>();

  useEffect(() => {
    const { url, options } = PHOTO_GET(Number(id));
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};
