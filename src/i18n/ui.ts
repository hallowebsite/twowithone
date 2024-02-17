export const languages: Record<Locales, string> = {
  en: "English",
  de: "Deutsch",
};

export enum Locales {
  en = "en",
  de = "de",
}

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
  },
  de: {
    "nav.home": "Hauptseite",
    "nav.about": "Über uns",
  },
} as const;
