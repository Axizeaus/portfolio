import db from "@/db/db";

import { ProjectType } from "@/types";

export async function createProject(
  projectData: Omit<ProjectType, "id">
): Promise<ProjectType | null> {
  try {
    const newProject = await db.project.create({
      data: {
        title: projectData.title,
        description: projectData.description,
        imageUrl: projectData.imageUrl,
        programmingLanguages: {
          connect: projectData.programmingLanguages?.map((id) => ({ id })),
        },
        frameworks: {
          connect: projectData.frameworks?.map(({ id }) => ({ id })),
        },
      },
    });
    return newProject;
  } catch (err) {
    console.error("error creating project:", err);
    return null;
  }
}

export async function getAllProjects(): Promise<ProjectType[]> {
  try {
    const projects = await db.project.findMany();
    return projects;
  } catch (error) {
    console.error("error getting all projects:", error);
    return [];
  }
}

export async function getProjectById(
  projectId: number
): Promise<ProjectType | null> {
  try {
    const project = await db.project.findUnique({
      where: { id: projectId },
    });
    return project;
  } catch (error) {
    console.error(`Error getting project with ID ${projectId}:`, error);
    return null;
  }
}

export async function updateProject(
  projectId: number,
  projectData: Partial<ProjectType>
): Promise<ProjectType | null> {
  try {
    const updatedProject = await db.project.update({
      where: { id: projectId },
      data: {
        title: projectData.title,
        description: projectData.description,
        imageUrl: projectData.imageUrl,
        programmingLanguages: {
          connect: projectData.programmingLanguages?.map((id) => ({ id })),
        },
        frameworks: {
          connect: projectData.frameworks?.map(({ id }) => ({ id })),
        },
      },
    });
    return updatedProject;
  } catch (error) {
    console.error(`Error updating project with ID ${projectId}:`, error);
    return null;
  }
}

export async function deleteProject(
  projectId: number
): Promise<ProjectType | null> {
  try {
    const deletedProject = await db.project.delete({
      where: { id: projectId },
    });
    return deletedProject;
  } catch (error) {
    console.error(`Error deleting project with ID ${projectId}:`, error);
    return null;
  }
}
