import { lazy, Suspense, useEffect } from "react";
import { Head } from "../../Helper/Head";
import { useFetch } from "../../../Hooks/useFetch";
import { STATS_GET } from "../../../api";
import { Error } from "../../Helper/Error";
import { Loading } from "../../Helper/Loading";

const UserStatsGraphs = lazy(() => import("../UserStatsGraphs"));

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

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
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};
