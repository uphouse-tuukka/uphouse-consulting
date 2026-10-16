export const locales = ["en", "fi"] as const;
export type Locale = (typeof locales)[number];

export const siteCopy = {
  en: {
    meta: {
      defaultDescription: "Software engineering and AI development workflows. Tuukka Ylöstalo, Helsinki, UpHouse Consulting.",
      homeTitle: "Tuukka Ylöstalo | Software engineering & AI workflows",
      homeDescription:
        "I build software and the AI workflows that help teams deliver it. Full-stack development, AI products, and agent-driven delivery. Based in Helsinki.",
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
      companyLine: "Software engineering & AI development workflows",
      tagline: "I build software and the AI workflows that help teams deliver it.",
      contactCta: "Contact me",
      aboutHeading: "About",
      aboutParagraphs: [
        "I'm Tuukka, a software engineer and consultant based in Helsinki. Through UpHouse Consulting, I help teams build full-stack products and put AI to work across development. I'm interested in the whole process, including how work is defined, implemented, reviewed, and verified.",
        "My background is in software people rely on, including public transport services, large public websites, migrations, and accessibility. Today I also build agent-driven development systems and AI-powered products.",
        "I like working close to the product and the people building it. Clear communication and trust matter as much to me as the technical decisions. Outside work, I split my time between nerdy interests, cooking, and lifting heavy things.",
      ],
      workHeading: "How I work",
      workItems: [
        {
          title: "Define what done means",
          body: "Start with the user's problem and a result we can check. Give people and agents a clear target before implementation begins.",
        },
        {
          title: "Design the workflow around AI",
          body: "I look beyond a single coding task. The useful opportunity may be connecting the backlog, implementation, review, and delivery into one workflow.",
        },
        {
          title: "Ship work people can trust",
          body: "I take responsibility for what I ship, including work built with AI. The software needs to work for its users and remain maintainable after launch.",
        },
      ],
      goodFitHeading: "Where I'm useful",
      goodFitIntro:
        "I work on the product itself and on how the team delivers it. That can mean joining an existing team or taking ownership of an early product.",
      goodFitItems: [
        {
          title: "Full-stack product engineering",
          body: "Hands-on development for products that need to keep working. React, Next.js, TypeScript, integrations, migrations, and the production issues that come with them.",
        },
        {
          title: "AI development workflows",
          body: "I help teams design end-to-end workflows around agentic development. That includes how work moves through the process, where people make decisions, and how results are checked.",
        },
        {
          title: "AI-powered products",
          body: "Turn a useful AI idea into an application people can try. Connect model output to the product's data and user experience, and check whether it solves the intended problem.",
        },
        {
          title: "Early products with technical ownership",
          body: "Work through the scope, test ideas with working prototypes, and build the first useful release. I stay involved in the product decisions as well as the implementation.",
        },
      ],
      goodFitAside:
        "Tell me what you need to build or where your development process gets stuck. We can work out a useful starting point.",
      projectsHeading: "Selected work",
    },
  },
  fi: {
    meta: {
      defaultDescription: "Ohjelmistokehitystä ja tekoälyä kehitystyön tueksi. Tuukka Ylöstalo, UpHouse Consulting, Helsinki.",
      homeTitle: "Tuukka Ylöstalo | Ohjelmistokehitys ja tekoäly",
      homeDescription:
        "Rakennan ohjelmistoja ja tuon tekoälyn osaksi tiimien kehitystyötä. Fullstack-kehitystä, tekoälysovelluksia ja kehitystyön automatisointia Helsingistä käsin.",
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
      companyLine: "Ohjelmistokehitys ja tekoäly",
      tagline: "Rakennan ohjelmistoja ja tuon tekoälyn osaksi tiimien kehitystyötä.",
      contactCta: "Ota yhteyttä",
      aboutHeading: "Minusta",
      aboutParagraphs: [
        "Olen Tuukka, ohjelmistokehittäjä ja konsultti Helsingistä. Autan UpHouse Consultingin kautta tiimejä rakentamaan ohjelmistoja ja ottamaan tekoälyn käyttöön kehitystyössä. Minua kiinnostaa koko matka työn määrittelystä toteutukseen, katselmointiin ja laadun varmistamiseen.",
        "Olen kehittänyt joukkoliikennepalveluita ja laajoja julkisia verkkosivustoja, joiden on toimittava ihmisten arjessa. Kokemusta on kertynyt myös migraatioista ja saavutettavuudesta. Nykyään rakennan lisäksi tekoälysovelluksia ja järjestelmiä, joissa tekoälyagentit tekevät kehitystyötä.",
        "Viihdyn työssä, jossa pääsen vaikuttamaan tuotteeseen ja tekemään tiivistä yhteistyötä muiden kanssa. Selkeä viestintä ja luottamus ovat minulle yhtä tärkeitä kuin hyvät tekniset ratkaisut. Vapaa-ajalla nörtteilen, laitan ruokaa ja nostelen painoja.",
      ],
      workHeading: "Miten teen töitä",
      workItems: [
        {
          title: "Selkeä tavoite ennen toteutusta",
          body: "Ennen toteutusta selvitän, mikä käyttäjän ongelma on ja mistä tiedämme sen ratkenneen. Näin sekä ihmiset että tekoälyagentit tietävät, mitä työltä odotetaan.",
        },
        {
          title: "Tekoäly osaksi koko kehitystyötä",
          body: "Katson yksittäistä koodaustehtävää pidemmälle. Etsin tapoja yhdistää tehtävien suunnittelu, toteutus, katselmointi ja julkaisu sujuvaksi kokonaisuudeksi tekoälyn avulla.",
        },
        {
          title: "Vastaan työni jäljestä",
          body: "Tekoälyn käyttö ei siirrä vastuuta pois minulta. Ohjelmiston pitää toimia käyttäjän arjessa ja olla ylläpidettävissä myös julkaisun jälkeen.",
        },
      ],
      goodFitHeading: "Missä voin auttaa",
      goodFitIntro:
        "Autan sekä ohjelmiston rakentamisessa että siinä, miten kehitystyö sujuu. Voin liittyä mukaan tiimiin tai ottaa teknisen vastuun uudesta tuotteesta.",
      goodFitItems: [
        {
          title: "Fullstack-kehitys",
          body: "Toteutan uusia ominaisuuksia, rakennan integraatioita ja ratkon tuotannon ongelmia. Työkaluihini kuuluvat React, Next.js ja TypeScript, ja kokemusta minulla on myös migraatioista.",
        },
        {
          title: "Kehitystyön automatisointi tekoälyllä",
          body: "Suunnittelen tiimien kanssa, mitä tekoälyagenteille voi antaa tehtäväksi ja miten työ etenee alusta loppuun. Määrittelemme myös, missä tarvitaan ihmisen päätöksiä ja miten työn laatu varmistetaan.",
        },
        {
          title: "Tekoälysovellukset",
          body: "Rakennan tekoälyideoista sovelluksia, joita pääsee kokeilemaan käytännössä. Yhdistän tekoälyn tuotteen tietoihin ja käyttöliittymään. Kokeilemme, vastaako lopputulos käyttäjän tarpeeseen.",
        },
        {
          title: "Uuden tuotteen tekninen vastuu",
          body: "Autan rajaamaan ideasta toteutettavan kokonaisuuden, kokeilen vaihtoehtoja prototyypeillä ja rakennan ensimmäisen käyttökelpoisen version. Olen mukana sekä tuotteen suunnittelussa että toteutuksessa.",
        },
      ],
      goodFitAside:
        "Kerro, mitä haluatte rakentaa tai missä kehitystyö tökkii. Mietitään yhdessä, mistä kannattaa aloittaa.",
      projectsHeading: "Valikoituja töitä",
    },
  },
} as const;
