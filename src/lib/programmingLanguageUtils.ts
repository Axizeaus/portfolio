import db from "@/db/db";
import type { ProgrammingLanguage } from "@/types";

export async function createProgrammingLanguage(
  name: string
): Promise<ProgrammingLanguage | null> {
  try {
    const newLanguage = await db.programmingLanguage.create({
      data: {
        name,
      },
    });
    return newLanguage;
  } catch (error) {
    console.error("trouble creating programming language:", error);
    return null;
  }
}

export async function getAllProgrammingLanguages(): Promise<
  ProgrammingLanguage[] | null
> {
  try {
    const programmingLanguages = await db.programmingLanguage.findMany();
    return programmingLanguages;
  } catch (error) {
    console.error("trouble getting all programming languages:", error);
    return null;
  }
}

export async function getProgrammingLanguageById(
  id: number
): Promise<ProgrammingLanguage | null> {
  try {
    const programmingLanguage = await db.programmingLanguage.findUnique({
      where: { id },
    });
    return programmingLanguage;
  } catch (error) {
    console.error(`Error getting programming language with ID ${id}:`, error);
    return null;
  }
}

export async function updateProgrammingLanguage(
  id: number,
  newName: string
): Promise<ProgrammingLanguage | null> {
  try {
    const updatedLanguage = await db.programmingLanguage.update({
      where: { id },
      data: {
        name: newName,
      },
    });
    return updatedLanguage;
  } catch (error) {
    console.error(`Error updating programming language with ID ${id}:`, error);
    return null;
  }
}

export async function deleteProgrammingLanguage(
  id: number
): Promise<ProgrammingLanguage | null> {
  try {
    const deletedLanguage = await db.programmingLanguage.delete({
      where: { id },
    });
    return deletedLanguage;
  } catch (error) {
    console.error(`Error deleting programming language with ID ${id}:`, error);
    return null;
  }
}
