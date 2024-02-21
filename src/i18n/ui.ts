export const languages: Record<Locales, string> = {
  en: "English",
  de: "Deutsch",
};

export enum Locales {
  en = "en",
  de = "de",
}

type LanguageStrings = Record<string, string>;

export const defaultLang = "en";

export const ui: Record<Locales, LanguageStrings> = {
  en: {
    "meta.description":
      "Browse the world with the variants of two stones with one bird saying",
    "header.title": "To kill two birds with one stone",
    "header.subline": "in [[placeholder]] languages",
    "nav.openSidebr": "Open sidebar",
    "nav.closeSidebar": "Close sidebar",
    "nav.home": "Home",
    "nav.home.explanation": "(shows random language)",
    "nav.claim": "Made with love in Aachen, Germany",
    "nav.about": "About",
    "nav.map": "Explore on a map",
    "nav.list": "List of languages",
    "nav.add": "Add your language",
    "nav.dataProtection": "Data protection and cookies",
    "nav.languages": "Languages",
    "nav.preferences": "Preferences",
    "search.title": "Search",
    "search.placeholder": "for example: Spain",
    "search.go": "Go",
    "themeSwap.label": "Dark/Light mode",
    "themeSwap.explanation":
      "If you change this option, we will store information about your choice on your device",
    "random.button": "Go to a random language",
    "random.option":
      "Avoid duplicates (we will need to store information about languages you visited on your device)",
    "card.inXWeSay": "in [[placeholder]] we say:",
    "card.literally": "which means literally:",
    "card.publishedOn": "Published on: [[placeholder]]",
    "card.imageAlt": "Information about the image:",
    "card.permalink": "Permalink to this saying:",
  },
  de: {
    "meta.description":
      "Durchsuche die Welt mit den Varianten des Sprichworts 'Zwei Fliegen mit einer Klappe schlagen'",
    "header.title": "Zwei Fliegen mit einer Klappe schlagen",
    "header.subline": "in [[placeholder]] Sprachen",
    "nav.openSidebr": "Seitenleiste öffnen",
    "nav.closeSidebar": "Seitenleiste schließen",
    "nav.home": "Hauptseite",
    "nav.home.explanation": "(zeigt zufällige Sprache an)",
    "nav.claim": "In Aachen mit Liebe gemacht",
    "nav.about": "Projekt",
    "nav.map": "Erkunde auf einer Karte",
    "nav.list": "Liste der Sprachen",
    "nav.add": "Füge deine Sprache hinzu",
    "nav.dataProtection": "Datenschutz und Cookies",
    "nav.languages": "Sprachen",
    "nav.preferences": "Einstellungen",
    "search.title": "Suche",
    "search.placeholder": "zum Beispiel: Spanien",
    "search.go": "Los",
    "themeSwap.label": "Dunkel-/Hellmodus",
    "themeSwap.explanation":
      "Wenn du diese Option änderst, speichern wir Informationen über deine Wahl auf deinem Gerät",
    "random.button": "Zu einer zufälligen Sprache",
    "random.option":
      "Duplikate vermeiden (wir müssen Informationen über die von dir besuchten Sprachen auf deinem Gerät speichern)",
    "card.inXWeSay": "auf [[placeholder]] sagt man:",
    "card.literally": "was wörtlich bedeutet:",
    "card.publishedOn": "Auf [[placeholder]] veröffentlicht",
    "card.imageAlt": "Informationen zum Bild:",
    "card.permalink": "Link zu diesem Ausdruck:",
  },
} as const;
