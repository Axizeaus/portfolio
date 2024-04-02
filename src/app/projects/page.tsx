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
  // console.log(await getAllProgrammingLanguages());
  // console.log(await getProgrammingLanguageById(1));
  // const updatedPL = await updateProgrammingLanguage(1, "Python3");
  await deleteProgrammingLanguage(1);
  console.log(await getAllProgrammingLanguages());

  return (
    <h2>This is project, check console to see if the project is created</h2>
  );
}
