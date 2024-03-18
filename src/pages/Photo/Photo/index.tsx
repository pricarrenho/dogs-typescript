import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import { Error } from "../../../Components/Helper/Error";
import { Loading } from "../../../Components/Helper/Loading";
import { PhotoContent } from "../PhotoContent";
import { PHOTO_GET } from "../../../services/api";

export const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
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
