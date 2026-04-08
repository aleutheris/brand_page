import { withBase } from "./withBase";

export const locales = ["en", "nl", "pt"] as const;
export type Locale = (typeof locales)[number];
export type PageKey = "home" | "projects" | "about" | "reviews" | "contact";

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; name: string; ogLocale: string }
> = {
  en: { label: "EN", name: "English", ogLocale: "en_US" },
  nl: { label: "NL", name: "Nederlands", ogLocale: "nl_NL" },
  pt: { label: "PT", name: "Português", ogLocale: "pt_PT" },
};

export const navCopy: Record<
  Locale,
  {
    home: string;
    projects: string;
    about: string;
    reviews: string;
    contact: string;
    language: string;
    siteTagline: string;
    footer: string;
  }
> = {
  en: {
    home: "Home",
    projects: "Projects",
    about: "About Me",
    reviews: "Reviews",
    contact: "Contact",
    language: "Language",
    siteTagline: "Automation Architect & AI Solutions",
    footer: "Automation Architect & AI Solutions",
  },
  nl: {
    home: "Home",
    projects: "Projecten",
    about: "Over mij",
    reviews: "Reviews",
    contact: "Contact",
    language: "Taal",
    siteTagline: "Automation Architect & AI-oplossingen",
    footer: "Automation Architect & AI-oplossingen",
  },
  pt: {
    home: "Início",
    projects: "Projetos",
    about: "Sobre mim",
    reviews: "Recomendações",
    contact: "Contacto",
    language: "Idioma",
    siteTagline: "Arquiteto de Automação & Soluções de IA",
    footer: "Arquiteto de Automação & Soluções de IA",
  },
};

const pageSegments: Record<PageKey, string> = {
  home: "",
  projects: "projects",
  about: "about",
  reviews: "reviews",
  contact: "contact",
};

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value) && locales.includes(value as Locale);
}

export function getLocaleStaticPaths() {
  return locales
    .filter((lang) => lang !== defaultLocale)
    .map((lang) => ({ params: { lang } }));
}

export function getLocaleOrThrow(value: string | undefined): Locale {
  if (!isLocale(value)) {
    throw new Error(`Unsupported locale: ${value ?? "unknown"}`);
  }

  return value;
}

export function normalizePath(path: string) {
  if (!path) return "/";

  const withTrailingSlash = path.endsWith("/") ? path : `${path}/`;
  return withTrailingSlash.replace(/\/+?/g, "/");
}

function stripBasePrefix(pathname: string, base: string) {
  const normalizedPath = normalizePath(pathname);
  const normalizedBase = normalizePath(base);

  if (normalizedBase === "/") {
    return normalizedPath;
  }

  if (!normalizedPath.startsWith(normalizedBase)) {
    return normalizedPath;
  }

  const trimmed = normalizedPath.slice(normalizedBase.length - 1);
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function getCurrentLocaleMode(pathname: string, base: string) {
  const relativePath = stripBasePrefix(pathname, base);
  const segments = relativePath.split("/").filter(Boolean);
  const prefixLocale = isLocale(segments[0]) ? segments[0] : null;

  return {
    prefixLocale,
    useExplicitEnglish: prefixLocale === "en",
  };
}

export function buildPageHref(
  base: string,
  pageKey: PageKey,
  locale: Locale,
  options: { forcePrefix?: boolean } = {},
) {
  const segments: string[] = [];
  const forcePrefix = options.forcePrefix ?? false;

  if (locale !== defaultLocale || forcePrefix) {
    segments.push(locale);
  }

  const pageSegment = pageSegments[pageKey];
  if (pageSegment) {
    segments.push(pageSegment);
  }

  return withBase(base, segments.length ? `${segments.join("/")}/` : "");
}
