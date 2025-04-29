import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MarkupData {
  content?: string;
  data: Record<string, any>;
}

export const getFolderMarkups = (directory: string): matter.GrayMatterFile<string>[] | null => {
  /* Converts all files in a directory to gray-matter objects */
  try {
    const directoryPath = path.join(process.cwd(), directory);
    const files = fs.readdirSync(directoryPath);

    return files.map((filename) => {
      const filePath = path.join(directoryPath, filename);
      const data = matter.read(filePath);
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

export const getArrayMarkups = (array: any, directory: string) => {
  /* Converts an array of filenames to gray-matter objects */
  return array.map((filename: string) => {
    let data = getMarkup(directory, `${filename}.md`)?.data;
    if (!data) return null;
    data.filename = filename;
    return data;
  });
};

export const getRelatedContent = (currentSlug: string, type: string, limit: number = 3) => {
  /* Fetches related content based on the current slug and type (e.g., 'projects', 'services') */
  const markdown = getMarkup('/content', `${type}.md`);
  if (!markdown) return [];

  const content = markdown.data[`${type}Items`] || markdown.data[type] || [];

  // Get data for all content except the current one
  const allContent = content
    .map((filename: string) => {
      const contentData = getMarkup(`/content/${type}`, `${filename}.md`)?.data;
      return contentData ? { ...contentData, slug: filename } : null;
    })
    .filter((content: any) => content && content.slug !== currentSlug);

  // Return a limited number of related content
  return allContent.sort(() => 0.5 - Math.random()).slice(0, limit);
};
