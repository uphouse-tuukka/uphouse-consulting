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
      defaultDescription: "Ohjelmistokehitystä ja tekoälyä hyödyntäviä työnkulkuja. Tuukka Ylöstalo, Helsinki, UpHouse Consulting.",
      homeTitle: "Tuukka Ylöstalo | Ohjelmistokehitys ja tekoäly",
      homeDescription:
        "Rakennan ohjelmistoja ja kehitän tapoja tehdä niitä tekoälyn avulla. Fullstack-kehitystä, tekoälytuotteita ja kehitystyön automatisointia. Helsinki, UpHouse Consulting.",
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
      tagline: "Rakennan ohjelmistoja ja kehitän tapoja tehdä niitä tekoälyn avulla.",
      contactCta: "Ota yhteyttä",
      aboutHeading: "Minusta",
      aboutParagraphs: [
        "Olen Tuukka, ohjelmistokehittäjä ja konsultti Helsingistä. Autan UpHouse Consultingin kautta tiimejä rakentamaan fullstack-tuotteita ja hyödyntämään tekoälyä kehitystyössä. Minua kiinnostaa koko prosessi, myös työn määrittely, toteutus, katselmointi ja tulosten todentaminen.",
        "Taustani on ohjelmistoissa, joihin ihmiset luottavat arjessaan. Olen työskennellyt joukkoliikennepalveluiden, laajojen julkisten verkkosivustojen, migraatioiden ja saavutettavuuden parissa. Nykyään rakennan myös tekoälytuotteita ja työnkulkuja, joissa agentit hoitavat kehitystyötä.",
        "Viihdyn lähellä tuotetta ja sitä rakentavia ihmisiä. Selkeä viestintä ja luottamus merkitsevät minulle yhtä paljon kuin tekniset päätökset. Vapaa-ajalla aikani kuluu nörtteilyn, ruuanlaiton ja painojen nostelun parissa.",
      ],
      workHeading: "Miten teen töitä",
      workItems: [
        {
          title: "Määrittelen, milloin työ on valmis",
          body: "Lähtökohtana on käyttäjän ongelma ja tulos, jonka voi tarkistaa. Ihmisillä ja agenteilla pitää olla selkeä tavoite ennen toteutusta.",
        },
        {
          title: "Suunnittelen työnkulun tekoälyn ympärille",
          body: "Katson yksittäistä koodaustehtävää pidemmälle. Hyödyllisin muutos voi olla tehtäväjonon, toteutuksen, katselmoinnin ja toimituksen yhdistäminen samaan työnkulkuun.",
        },
        {
          title: "Teen työtä, johon voi luottaa",
          body: "Vastaan toimittamastani työstä myös silloin, kun käytän tekoälyä. Ohjelmiston pitää palvella käyttäjiään ja pysyä ylläpidettävänä myös julkaisun jälkeen.",
        },
      ],
      goodFitHeading: "Millaisissa projekteissa olen parhaimmillani",
      goodFitIntro:
        "Työskentelen sekä tuotteen että kehitystavan parissa. Voin liittyä olemassa olevaan tiimiin tai ottaa teknisen vastuun alkuvaiheen tuotteesta.",
      goodFitItems: [
        {
          title: "Fullstack-tuotekehitys",
          body: "Käytännön kehitystyötä tuotteisiin, joiden pitää toimia myös julkaisun jälkeen. React, Next.js, TypeScript, integraatiot, migraatiot ja tuotannon ongelmien selvittäminen.",
        },
        {
          title: "Kehitystyön automatisointi tekoälyllä",
          body: "Autan tiimejä suunnittelemaan työnkulkuja, joissa tekoälyagentit ovat mukana alusta loppuun. Sovimme, miten työ etenee, missä tarvitaan ihmisen päätös ja miten lopputulos tarkistetaan.",
        },
        {
          title: "Tekoälytuotteet",
          body: "Hyödyllisestä tekoälyideasta sovellus, jota voi kokeilla. Mallin tuottama sisältö yhdistetään tuotteen dataan ja käyttökokemukseen, ja lopputulosta arvioidaan alkuperäistä tarvetta vasten.",
        },
        {
          title: "Alkuvaiheen tuotteen tekninen vastuu",
          body: "Rajataan tarve, kokeillaan ideoita toimivilla prototyypeillä ja rakennetaan ensimmäinen hyödyllinen versio. Olen mukana sekä tuotepäätöksissä että toteutuksessa.",
        },
      ],
      goodFitAside:
        "Kerro, mitä haluatte rakentaa tai missä kehitystyö tökkii. Etsitään yhdessä hyödyllinen lähtökohta.",
      projectsHeading: "Valikoituja töitä",
    },
  },
} as const;
