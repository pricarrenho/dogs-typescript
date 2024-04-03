import React from "react";
import { lazy, Suspense, useEffect } from "react";
import { Head } from "../../../Components/Head/Head";
import { useFetch } from "../../../Hooks/useFetch";
import { Error } from "../../../Components/Error";
import { Loading } from "../../../Components/Loading/Loading";
import { STATS_GET } from "../../../services/api";
import { StatsGraphs } from "../UserStatsGraphs/types";

const UserStatsGraphs = lazy(() => import("../UserStatsGraphs"));

export const UserStats = () => {
  const { data, error, loading, request } = useFetch<StatsGraphs[]>();

  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");

      const { url, options } = STATS_GET(token);

      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head
          title="Estatísticas"
          description="Veja as estatísticas da sua conta aqui"
        />

        {data && <UserStatsGraphs data={data} />}
      </Suspense>
    );
  else return null;
};
