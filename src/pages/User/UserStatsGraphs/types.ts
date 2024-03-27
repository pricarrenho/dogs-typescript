export type StatsGraphs = {
  acessos: string;
  id: number;
  title: string;
};

export type UserStatsGraphsProps = {
  data: StatsGraphs[];
};

export type GraphType = {
  x: string;
  y: number;
};
