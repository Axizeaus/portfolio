export type ProjectType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  frameworks?: Framework[];
  programmingLanguages?: Programminglanguages[];
};

export type Framework = {
  id: number;
  name: string;
  projects?: ProjectType[];
};

export type ProgrammingLanguage = {
  id: number;
  name: string;
  projects?: ProjectType[];
};
