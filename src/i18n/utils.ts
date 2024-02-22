/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ui, defaultLang, Locales } from "./ui";

export function getLangFromUrl(url: URL): Locales {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: Locales): any {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    interpolation?: string,
  ) {
    const string =
      ui[lang][key] || ui[defaultLang][key] || "missing translation";
    return string.replace(/\[\[placeholder\]\]/, interpolation ?? "");
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
