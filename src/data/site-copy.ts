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
      ctaSubject: "Work inquiry via uphouseconsulting.fi",
    },
    projectPage: {
      atAGlanceHeading: "At a glance",
      atAGlanceProblem: "Problem",
      atAGlanceContribution: "My contribution",
      atAGlanceResult: "Result",
      workTogether: "Want to work together?",
      contactCta: "Contact me",
      demoLinkLabel: "Open live demo",
      testimonialAttributionProductOwner: "Product owner",
      backHome: "Back to home",
      navLabel: "Project navigation",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      backHome: "Back to home",
    },
    home: {
      companyLine: "Software developer behind UpHouse Consulting",
      tagline: "Less complexity, more software.",
      contactCta: "Contact me",
      aboutHeading: "About",
      aboutParagraphs: [
        "I'm a fullstack developer based in Helsinki. I enjoy working closely with teams and helping good work happen, whether that means writing code, supporting decisions, or stepping into the parts of a project that need extra care.",
        "I think good consulting is about more than technical skill. Clear communication, trust, and how you work with people matter just as much. Outside work, I split my time between nerdy interests, cooking, and lifting heavy things.",
      ],
      workHeading: "How I work",
      workItems: [
        {
          title: "Start with the real problem",
          body: "I try to understand what actually needs to change before adding process, scope, or code.",
        },
        {
          title: "Cut complexity early",
          body: "I prefer systems that teams can understand and maintain.",
        },
        {
          title: "Ship work people can trust",
          body: "The goal is maintainable software that helps users, supports teams, and keeps delivering after launch.",
        },
      ],
      goodFitHeading: "Where I'm useful",
      goodFitIntro:
        "I'm a good fit when a team needs senior fullstack help, steady delivery, and someone who can think beyond the next ticket.",
      goodFitItems: [
        {
          title: "Senior fullstack capacity",
          body: "For teams that need an experienced developer to join product work and start contributing without a long ramp-up.",
        },
        {
          title: "Existing products that need momentum",
          body: "For products that need features, fixes, cleanup, and better foundations at the same time.",
        },
        {
          title: "New products and AI ideas",
          body: "For early products where the work is partly building a useful first version, partly shaping the technical direction, including AI integrations when they make sense.",
        },
        {
          title: "A developer who thinks beyond the ticket",
          body: "When the useful move is not just taking the next task, but questioning scope, naming risks, and keeping implementation tied to the product.",
        },
      ],
      goodFitAside:
        "Probably not the best fit for throwaway campaign sites, purely visual landing pages, or narrow ticket-only roles.",
      projectsHeading: "Projects",
    },
  },
  fi: {
    meta: {
      defaultDescription: "Ohjelmistokehittäjä Helsingistä",
      homeTitle: "Tuukka Ylöstalo — Ohjelmistokehittäjä",
      homeDescription:
        "Tuukka Ylöstalon portfolio ja valikoituja projekteja. Helsingissä toimiva ohjelmistokehittäjä UpHouse Consultingin takana.",
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
      footerCta: "Tehdään yhdessä toimivaa softaa",
      builtWith: "Rakennettu Astrolla",
      ctaSubject: "Työtiedustelu sivuston kautta",
    },
    projectPage: {
      atAGlanceHeading: "Lyhyesti",
      atAGlanceProblem: "Ongelma",
      atAGlanceContribution: "Oma roolini",
      atAGlanceResult: "Lopputulos",
      workTogether: "Voisinko auttaa teidän projektissanne?",
      contactCta: "Ota yhteyttä",
      demoLinkLabel: "Avaa demo",
      testimonialAttributionProductOwner: "Tuoteomistaja",
      backHome: "Takaisin etusivulle",
      navLabel: "Projektin navigaatio",
    },
    notFound: {
      title: "Sivua ei löytynyt",
      body: "Etsimääsi sivua ei ole olemassa tai se on siirretty.",
      backHome: "Takaisin etusivulle",
    },
    home: {
      companyLine: "Ohjelmistokehittäjä, UpHouse Consulting",
      tagline: "Vähemmän turhaa mutkikkuutta, enemmän toimivaa softaa.",
      contactCta: "Ota yhteyttä",
      aboutHeading: "Minusta",
      aboutParagraphs: [
        "Olen Helsingissä asuva fullstack-kehittäjä. Viihdyn projekteissa, joissa pääsen tekemään tiiviisti töitä muun tiimin kanssa ja auttamaan siellä, missä sitä eniten tarvitaan.",
        "Hyvä konsultointi ei koostu pelkästään teknisestä osaamisesta. Yhtä paljon merkitsevät selkeä viestintä, luottamus ja se, miten ihmisten kanssa tehdään töitä. Vapaa-ajalla aikani kuluu nörtteilyn, ruuanlaiton ja painojen nostelun parissa.",
      ],
      workHeading: "Miten teen töitä",
      workItems: [
        {
          title: "Lähden liikkeelle oikeasta ongelmasta",
          body: "Yritän ensin ymmärtää, mitä oikeasti pitää ratkaista, ennen kuin lisätään prosessia, laajuutta tai koodia.",
        },
        {
          title: "Karsin turhaa monimutkaisuutta ajoissa",
          body: "Pidän järjestelmistä, jotka tiimi ymmärtää ja joita on mahdollista ylläpitää ilman jatkuvaa säätöä.",
        },
        {
          title: "Teen työtä, johon voi luottaa",
          body: "Tavoitteena on ylläpidettävä ohjelmisto, joka palvelee käyttäjiä, helpottaa tiimin työtä ja kestää aikaa myös julkaisun jälkeen.",
        },
      ],
      goodFitHeading: "Millaisissa projekteissa olen parhaimmillani",
      goodFitIntro:
        "Olen hyvä valinta, kun tiimi tarvitsee senioritason fullstack-kehittäjän, tasaista etenemistä ja tekijän, joka ajattelee seuraavaa tikettiä pidemmälle.",
      goodFitItems: [
        {
          title: "Senioritason fullstack-kehittäjä",
          body: "Tiimeihin, joissa kokeneen kehittäjän pitää päästä kiinni tuotetyöhön nopeasti ja tehdä hyödyllistä työtä alusta asti.",
        },
        {
          title: "Olemassa olevien tuotteiden kehitys",
          body: "Kun samaan aikaan pitää rakentaa uutta, korjata vanhaa ja vahvistaa koodipohjaa ilman, että kehitys pysähtyy.",
        },
        {
          title: "Uudet tuotteet ja tekoälyideat",
          body: "Alkuvaiheen tuotteisiin, joissa ideasta pitää rakentaa toimiva ensiversio ja löytää järkevä tekninen suunta, myös silloin kun mukana on tekoälyä.",
        },
        {
          title: "Kehittäjä, joka ajattelee tikettiä pidemmälle",
          body: "Kun hyödyllisin panos ei ole vain seuraavan tehtävän tekeminen, vaan epäselvän rajauksen haastaminen, riskien sanoittaminen ja toteutuksen pitäminen kiinni tuotteen tarpeissa.",
        },
      ],
      goodFitAside:
        "En ehkä ole oikea valinta kertakäyttöisille kampanjasivuille, pelkille visuaalisille laskautumissivuille tai rooliin, jossa työ on tarkoituksella pilkottu hyvin kapeiksi tiketeiksi.",
      projectsHeading: "Projektit",
    },
  },
} as const;
