import { Project } from "./projects";

export type ProgrammingLanguage = {
  id: number;
  name: string;
  projects: Project[];
};
