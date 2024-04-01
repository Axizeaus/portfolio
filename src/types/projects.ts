import { ProgrammingLanguage } from "./programmingLanguage";
import { Framework } from "./framework";

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  languages: ProgrammingLanguage[];
  frameworks: Framework[];
};
