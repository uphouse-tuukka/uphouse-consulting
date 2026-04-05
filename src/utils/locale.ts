import { siteCopy, type Locale } from "../data/site-copy";

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "fi";
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith("/fi") ? "fi" : "en";
}

export function getLocalizedHomePath(locale: Locale): string {
  return locale === "fi" ? "/fi/" : "/";
}

export function getLocalizedProjectPath(locale: Locale, slug: string): string {
  return locale === "fi" ? `/fi/projects/${slug}` : `/projects/${slug}`;
}

export function getSwitchLocale(locale: Locale): Locale {
  return locale === "fi" ? "en" : "fi";
}

export function getSwitchLabel(locale: Locale): string {
  return siteCopy[locale].chrome.switchLocaleLabel;
}
