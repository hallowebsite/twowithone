/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ui, defaultLang, type Locales } from "./ui";

export function getLangFromUrl(url: URL): Locales {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang as Locales;
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
