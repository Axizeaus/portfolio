import { Project } from "./projects";

export type Framework = {
  id: number;
  name: string;
  projects: Project[];
};
