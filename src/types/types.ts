export interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text: string;
  deleted?: boolean;
}

export interface IUser {
  created: number;
  id: string;
  karma: number;
  submitted: number[];
}
