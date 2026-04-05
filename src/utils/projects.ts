import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../data/site-copy";

type ProjectEntry = CollectionEntry<"projects"> | CollectionEntry<"projectsFi">;

async function getProjectCollection(locale: Locale) {
  return locale === "fi" ? getCollection("projectsFi") : getCollection("projects");
}

export async function getProjectsForLocale(locale: Locale): Promise<ProjectEntry[]> {
  const projects = await getProjectCollection(locale);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectForLocale(locale: Locale, slug: string): Promise<ProjectEntry | undefined> {
  const projects = await getProjectsForLocale(locale);
  return projects.find((project) => project.slug === slug);
}
