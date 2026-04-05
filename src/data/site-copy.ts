export const locales = ["en", "fi"] as const;
export type Locale = (typeof locales)[number];

export const siteCopy = {
  en: {
    meta: {
      defaultDescription: "Software Developer based in Helsinki",
      homeTitle: "Tuukka Ylöstalo — Software Developer",
      homeDescription:
        "Portfolio and case studies for Tuukka Ylöstalo, a Helsinki-based software developer behind UpHouse Consulting.",
    },
    chrome: {
      skipToContent: "Skip to content",
      switchLocaleLabel: "Suomeksi",
      switchLocaleAria: "Open the Finnish version",
      themeLightLabel: "Light",
      themeLightAria: "Light mode",
      themeDarkLabel: "Dark",
      themeDarkAria: "Dark mode",
      githubAria: "GitHub (opens in new tab)",
      linkedinAria: "LinkedIn (opens in new tab)",
      emailLabel: "Email",
      footerCta: "Let's work together",
      builtWith: "Built with Astro",
    },
    projectPage: {
      workTogether: "Want to work together?",
      contactCta: "Contact me",
      backHome: "Back to home",
      navLabel: "Project navigation",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      backHome: "Back to home",
    },
  },
  fi: {
    meta: {
      defaultDescription: "Ohjelmistokehittäjä Helsingistä",
      homeTitle: "Tuukka Ylöstalo — Ohjelmistokehittäjä",
      homeDescription:
        "Tuukka Ylöstalon portfolio ja projektit. Helsingissä toimiva ohjelmistokehittäjä UpHouse Consultingin takana.",
    },
    chrome: {
      skipToContent: "Siirry sisältöön",
      switchLocaleLabel: "In English",
      switchLocaleAria: "Avaa englanninkielinen versio",
      themeLightLabel: "Vaalea",
      themeLightAria: "Vaalea tila",
      themeDarkLabel: "Tumma",
      themeDarkAria: "Tumma tila",
      githubAria: "GitHub (avautuu uuteen välilehteen)",
      linkedinAria: "LinkedIn (avautuu uuteen välilehteen)",
      emailLabel: "Sähköposti",
      footerCta: "Tehdään yhdessä hyvää jälkeä",
      builtWith: "Rakennettu Astrolla",
    },
    projectPage: {
      workTogether: "Olisiko meillä syytä tehdä töitä yhdessä?",
      contactCta: "Ota yhteyttä",
      backHome: "Takaisin etusivulle",
      navLabel: "Projektin navigaatio",
    },
    notFound: {
      title: "Sivua ei löytynyt",
      body: "Etsimääsi sivua ei ole olemassa tai se on siirretty.",
      backHome: "Takaisin etusivulle",
    },
  },
} as const;
