"use client"
export const createSlug = (text: string) => {
  // slug:
  //   encoding: "unicode"
  //   sanitize_replacement: "_"
  //   clean_accents: true

  let slug = text.toLowerCase();

  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  slug = slug.replace(/[^\w\s-]/g, "_");
  slug = slug.replace(/\s+/g, "_");
  slug = slug.replace(/_+/g, "_");
  slug = slug.replace(/^_|_$/g, "");

  return slug;
};
