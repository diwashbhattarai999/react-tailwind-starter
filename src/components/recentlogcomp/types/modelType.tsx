export type modelType = {
  icon: string;
  title: string;
  score: number;
  rate: string | number;
};
export type innermainLogtype = {
  timestamp: Array<string>;
  level: Array<string>;
  user: Array<string>;
  action: Array<string>;
  page: Array<string>;
  device: Array<string>;
  latency: Array<string>;
  actions: Array<string>;
};
