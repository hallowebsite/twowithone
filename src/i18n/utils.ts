import { ui, defaultLang, Locales } from "./ui";

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui): any {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getMatchingLocale(availableLocales?: string[]): Locales {
  if (availableLocales === undefined) return Locales.en;
  if (availableLocales === null) return Locales.en;
  if (
    availableLocales.length === 0 ||
    (availableLocales.includes(Locales.en) &&
      !availableLocales.includes(Locales.de))
  ) {
    return Locales.en;
  } else {
    return Locales.de;
  }
}
