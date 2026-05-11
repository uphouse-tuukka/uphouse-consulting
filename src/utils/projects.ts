import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../data/site-copy";

type ProjectEntry = CollectionEntry<"projects"> | CollectionEntry<"projectsFi">;

type AdjacentProject = { title: string; slug: string } | null;

export type { ProjectEntry };

export function getProjectSlug(project: ProjectEntry): string {
  return project.id.replace(/\.md$/, "");
}

async function getProjectCollection(locale: Locale) {
  return locale === "fi" ? getCollection("projectsFi") : getCollection("projects");
}

export async function getProjectsForLocale(locale: Locale): Promise<ProjectEntry[]> {
  const projects = await getProjectCollection(locale);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectForLocale(locale: Locale, slug: string): Promise<ProjectEntry | undefined> {
  const projects = await getProjectsForLocale(locale);
  return projects.find((project) => getProjectSlug(project) === slug);
}

export async function getProjectByKey(locale: Locale, projectKey: string): Promise<ProjectEntry | undefined> {
  const projects = await getProjectsForLocale(locale);
  return projects.find((p) => p.data.projectKey === projectKey);
}

/** Returns the slug of the counterpart project in targetLocale, matched by projectKey. */
export async function getLinkedSlug(projectKey: string, targetLocale: Locale): Promise<string | undefined> {
  const linked = await getProjectByKey(targetLocale, projectKey);
  return linked ? getProjectSlug(linked) : undefined;
}

/** Returns prev/next neighbours using projectKey as the stable identity. */
export function getAdjacentProjects(
  projects: ProjectEntry[],
  currentProjectKey: string,
): { prev: AdjacentProject; next: AdjacentProject } {
  const idx = projects.findIndex((p) => p.data.projectKey === currentProjectKey);
  return {
    prev: idx > 0 ? { title: projects[idx - 1].data.title, slug: getProjectSlug(projects[idx - 1]) } : null,
    next: idx < projects.length - 1 ? { title: projects[idx + 1].data.title, slug: getProjectSlug(projects[idx + 1]) } : null,
  };
}
