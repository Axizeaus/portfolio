import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "@/lib/projectUtils";

export default async function Page() {
  // const newProject = createProject({
  //   title: "new Project",
  //   description: "new project description",
  //   imageUrl: "https://example.com/new-project.jpg",
  // });
  // console.log(newProject);

  // const getProjectID1 = await getProjectById(1);
  // console.log(getProjectID1);

  // const updateOne = await updateProject(1, {
  //   title: "updated one",
  //   description: "updated one as well",
  //   imageUrl: "",
  // });
  // console.log(updateOne);

  // await deleteProject(1);
  // const projects = await getAllProjects();
  // console.log(projects);
  return (
    <h2>This is project, check console to see if the project is created</h2>
  );
}
