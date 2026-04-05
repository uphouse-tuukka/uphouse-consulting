---
projectKey: "public-transport-website"
title: "Joukkoliikenteen verkkosivusto"
role: "Fullstack-kehittäjä"
stack: ["TypeScript", "Next.js", "React", "NestJS", "C#", ".NET", "ElasticSearch", "Azure"]
duration: "2023–2026"
outcome: "Päivitin Next.js 12:n versioon 14 ja rakensin hakupalvelun sekä komponenttikirjaston."
order: 2
---

## Ongelma

Työskentelin laajan julkisen verkkosivuston parissa, joka teki jo valmiiksi oikeaa työtä suurelle käyttäjäjoukolle, mutta tarvitsi samaan aikaan uusia ominaisuuksia, rakenteellisia parannuksia ja parempia sisäisiä työkaluja. Kyse ei ollut greenfield-projektista eikä yhden asian uudelleenrakennuksesta, vaan pitkäikäisestä alustasta, jonka piti jatkaa liikkumistaan samalla kun sen alla olevia osia muutettiin.

## Roolini

Roolini liikkui projektin tarpeiden mukaan eri työnkuvien välillä. Osa jaksoista oli enemmän tuotekehitystä, kuten ominaisuuksien ja lomakkeiden rakentamista. Toiset olivat enemmän arkkitehtuuria, kuten migraatioita, yhteisiä UI-ratkaisuja ja hakua. Pidin siitä, koska pystyin auttamaan siellä, missä projekti kulloinkin eniten takkusi.

## Mitä työ sisälsi

Yksi merkittävä osa työtä oli frontendin siirtäminen Next.js 12:sta versioon 14, mukaan lukien siirtymä pages-routerista app-routeriin. Samalla olin mukana rakentamassa sisäistä komponenttikirjastoa, jotta tiimillä olisi tasaisempi pohja tehdä työtä ilman, että samoja UI-ongelmia ratkaistaan yhä uudelleen eri kohdissa.

Toinen iso kokonaisuus oli haku. Olin mukana kahden hengen työssä, jossa haku irrotettiin monoliittisesta .NET-backendistä, jossa se oli sotkeutunut CMS:ään ja muihin rajapintoihin, ja rakennettiin omaksi NestJS-palvelukseen ElasticSearchin päälle.

## Mikä teki työstä hankalaa

Haastavaa työstä teki sen laajuus. Tämä ei ollut projekti, jossa olisi voinut pysyä siististi yhden erikoisalueen sisällä. Stack oli laaja, teknistä velkaa oli oikeasti, ja arki saattoi vaihtua nopeasti React Hook Form -virroista CMS-ongelmiin, sisällöntuottajien tukemiseen ja edelleen tuotannon häiriöihin, joiden juurisyy löytyikin infrastruktuurista eikä sovelluskoodista.

Paransimme koko ajan käytössä olevaa palvelua samalla kun rakensimme uusia ominaisuuksia, joita ihmiset tarvitsivat heti. Edistystä piti pystyä tekemään ilman sitä harhaa, että koko järjestelmä voitaisiin pysäyttää siihen asti, että arkkitehtuuri on täydellinen.

## Mitä muuttui

Työn lopputuloksena koodipohjalla oli useissa tärkeissä kohdissa selkeämpi suunta eteenpäin. Frontend-stack oli päivitetty, haulle oli rakennettu oma tarkempi muotonsa, ja komponenttikirjasto loi paremman pohjan yhteiselle tekemiselle. Yhtä tärkeää oli se, että sivusto jatkoi tehtävänsä hoitamista koko muutoksen ajan.

## Mitä opin

Tämä projekti muistutti, että hyödyllinen laaja osaaminen on oikeasti arvokasta. Osa parhaasta työstä syntyy siitä, että pystyy liikkumaan tuotekehityksen, alustaparannusten ja yhteisten työkalujen välillä ilman että pitää mitään niistä vähempiarvoisena.
