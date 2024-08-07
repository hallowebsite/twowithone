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
    "nav.home.explanation": "(shows a random language)",
    "nav.claim": "Made with love in Aachen, Germany",
    "nav.about": "About",
    "nav.motives": "Motives",
    "nav.map": "Explore on a map",
    "nav.list": "List of languages",
    "nav.contact": "Contat us",
    "nav.dataProtection": "Data protection and cookies",
    "nav.languages": "Languages",
    "nav.preferences": "Preferences",
    "search.title": "Search",
    "search.placeholder": "for example: Spanish",
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
    "card.motives": "see all motives",
    "card.permalink": "Permalink to this saying:",
    "card.contact":
      "Noticed an error? Want to add version in your languge? Use our",
    "card.contactForm": "contact form.",
    "image.seeFullSize": "See the image in full size",
    "image.infoLabel": "Information about the image",
    "image.title": "Title",
    "image.author": "Author",
    "image.date": "Date",
    "image.copyright": "Copyright",
    "image.description": "Description",
    "image.source": "Source",
    "image.geographicalOrigin": "Geographical origin",
    "form.title": "Contact us",
    "form.explanation":
      "You did not find a saying in your language? You noticed an error or want to suggest a change?",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.email.explanation":
      "We will not share it with anyone nor send you any emails, fill it in only if you expect an answer from us",
    "form.message": "Your message *",
    "form.message.explanation":
      "If you want to suggest a saying, please provide links to examples of usage or explanations, thank you :)",
    "form.antispam": "Prove you are not a bot *",
    "form.antispamInstruction":
      "Fill in a missing word, no interpunction. In English we say: Two birds with one...",
    "form.send": "Send",
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
    "nav.home.explanation": "(zeigt zufällige Sprache an)",
    "nav.claim": "In Aachen mit Liebe gemacht",
    "nav.about": "Projekt",
    "nav.motives": "Motive",
    "nav.map": "Erkunde auf einer Karte",
    "nav.list": "Liste der Sprachen",
    "nav.contact": "Kontaktiere uns",
    "nav.dataProtection": "Datenschutz und Cookies",
    "nav.languages": "Sprachen",
    "nav.preferences": "Einstellungen",
    "search.title": "Suche",
    "search.placeholder": "zum Beispiel: Spanisch",
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
    "card.motives": "alle Motive anzeigen",
    "card.permalink": "Link zu diesem Ausdruck:",
    "card.contact":
      "Haben Sie einen Fehler bemerkt? Möchten Sie die Version in Ihrer Sprache hinzufügen? Gehen Sie zum ",
    "card.contactForm": "Kontaktformular.",
    "image.seeFullSize": "Bild in voller Größe anzeigen",
    "image.infoLabel": "Informationen zum Bild",
    "image.title": "Titel",
    "image.author": "Autor",
    "image.date": "Datum",
    "image.copyright": "Urheberrecht",
    "image.description": "Beschreibung",
    "image.source": "Quelle",
    "image.geographicalOrigin": "Geografische Herkunft",
    "form.title": "Kontaktiere uns",
    "form.explanation":
      "Hast du keinen Ausdruck in deiner Sprache gefunden? Du hast einen Fehler bemerkt oder möchtest eine Änderung vorschlagen?",
    "form.name": "Dein Name",
    "form.email": "Deine E-Mail-Adresse",
    "form.email.explanation":
      "Wir werden sie mit niemandem teilen und dir auch keine E-Mails senden, fülle sie nur aus, wenn du eine Antwort von uns erwartest",
    "form.message": "Deine Nachricht *",
    "form.message.explanation":
      "Wenn du einen Ausdruck vorschlagen möchtest, gib bitte Links zu Beispielen oder Erklärungen an, danke :)",
    "form.antispam": "Zeige, dass du kein Bot bist *",
    "form.antispamInstruction":
      "Fülle ein fehlendes Wort aus, keine Unterbrechungen. Auf Englisch sagen wir: Two birds with one...",
    "form.send": "Senden",
    "motives.title": "Sprichwörter mit dem Motiv [[placeholder]]",
  },
} as const;
