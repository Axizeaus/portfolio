import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "@/lib/projectUtils";

import {
  createProgrammingLanguage,
  getAllProgrammingLanguages,
  getProgrammingLanguageById,
  updateProgrammingLanguage,
  deleteProgrammingLanguage,
} from "@/lib/frameworkUtils";

export default async function Page() {
  return (
    <h2>This is project, check console to see if the project is created</h2>
  );
}
