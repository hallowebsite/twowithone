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
  [Locales.en]: {
    "meta.description":
      "Browse the world with the variants of two stones with one bird saying",
    "header.title": "To kill two birds with one stone",
    "header.subline": "in [[placeholder]] languages",
    "nav.openSidebr": "Open sidebar",
    "nav.closeSidebar": "Close sidebar",
    "nav.home": "Home",
    "nav.claim": "Made with love in Aachen, Germany",
    "nav.about": "About",
    "nav.motives": "Motives",
    "nav.map": "Explore on a map",
    "nav.list": "List of languages",
    "nav.dataProtection": "Data protection and cookies",
    "nav.languages": "Languages",
    "nav.preferences": "Preferences",
    "themeSwap.label": "Dark/Light mode",
    "themeSwap.explanation":
      "If you change this option, we will store information about your choice on your device",
    "random.button": "Next",
    "card.inXWeSay": "in [[placeholder]] we say:",
    "card.literally": "which means literally:",
    "card.publishedOn": "Published on: [[placeholder]]",
    "card.imageAlt": "Information about the image:",
    "card.motives": "see all motives",
    "card.permalink": "Permalink to this saying:",
    "image.seeFullSize": "See the image in full size",
    "image.infoLabel": "Information about the image",
    "image.title": "Title",
    "image.author": "Author",
    "image.date": "Date",
    "image.copyright": "Copyright",
    "image.description": "Description",
    "image.source": "Source",
    "image.geographicalOrigin": "Geographical origin",
    "motives.title": "Sayings with a motive of [[placeholder]]",
  },
  [Locales.de]: {
    "meta.description":
      "Durchsuche die Welt mit den Varianten des Sprichworts 'Zwei Fliegen mit einer Klappe schlagen'",
    "header.title": "Zwei Fliegen mit einer Klappe schlagen",
    "header.subline": "in [[placeholder]] Sprachen",
    "nav.openSidebr": "Seitenleiste öffnen",
    "nav.closeSidebar": "Seitenleiste schließen",
    "nav.home": "Hauptseite",
    "nav.claim": "In Aachen mit Liebe gemacht",
    "nav.about": "Projekt",
    "nav.motives": "Motive",
    "nav.map": "Erkunde auf einer Karte",
    "nav.list": "Liste der Sprachen",
    "nav.dataProtection": "Datenschutz und Cookies",
    "nav.languages": "Sprachen",
    "nav.preferences": "Einstellungen",
    "themeSwap.label": "Dunkel-/Hellmodus",
    "themeSwap.explanation":
      "Wenn du diese Option änderst, speichern wir Informationen über deine Wahl auf deinem Gerät",
    "random.button": "Nächster",
    "card.inXWeSay": "auf [[placeholder]] sagt man:",
    "card.literally": "was wörtlich bedeutet:",
    "card.publishedOn": "Auf [[placeholder]] veröffentlicht",
    "card.imageAlt": "Informationen zum Bild:",
    "card.motives": "alle Motive anzeigen",
    "card.permalink": "Link zu diesem Ausdruck:",
    "image.seeFullSize": "Bild in voller Größe anzeigen",
    "image.infoLabel": "Informationen zum Bild",
    "image.title": "Titel",
    "image.author": "Autor",
    "image.date": "Datum",
    "image.copyright": "Urheberrecht",
    "image.description": "Beschreibung",
    "image.source": "Quelle",
    "image.geographicalOrigin": "Geografische Herkunft",
    "motives.title": "Sprichwörter mit dem Motiv [[placeholder]]",
  },
} as const;
