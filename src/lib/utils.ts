import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MarkupData {
  content?: string;
  data: Record<string, any>;
}

const getFolderMarkups = (
  directory: string
): (matter.GrayMatterFile<string> & { filename: string })[] | null => {
  /* Converts all files in a directory to gray-matter objects */
  try {
    const directoryPath = path.join(process.cwd(), directory);
    const files = fs.readdirSync(directoryPath);

    return files.map((filename) => {
      const filePath = path.join(directoryPath, filename);
      const data = { ...matter.read(filePath), filename };
      return data;
    });
  } catch (error) {
    return null;
  }
};

export const getMarkup = (
  directory: string,
  filename: string
): matter.GrayMatterFile<string> | null => {
  /* Converts specific file to a gray-matter object */
  try {
    const file = matter.read(path.join(process.cwd(), directory, filename));
    return file;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getArrayMarkups = (directory: string) => {
  /* Converts all files in a directory to gray-matter objects and returns the data property */
  const array = getFolderMarkups(directory);
  if (!array) return [];

  return array.map((content: Record<string, any>) => {
    const { data, filename } = content;
    data.filename = filename.replace('.md', '');
    return data;
  });
};

export const getRelatedContent = (filename: string, directory: string, limit: number = 3) => {
  /* Fetches related content based on the current filename and directory */
  return getArrayMarkups(directory)
    .filter((data: Record<string, any>) => data && data.filename !== filename)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};
