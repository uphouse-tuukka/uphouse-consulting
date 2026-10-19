---
projectKey: "salt-and-scroll"
title: "Salt & Scroll"
role: "Tuotesuunnittelu ja kehitys tekoälyagenteilla"
stack: ["SvelteKit", "TypeScript", "Playwright", "Cloudflare Workers"]
duration: "2026-nykyhetki"
outcome: "Suunnittelin reseptisovelluksen ja ohjasin agenttien toteutustyötä. Laatua arvioitiin testeillä ja erillisillä katselmoinneilla."
atAGlance:
  problem: "Halusin reseptit helpommin käytettäviksi puhelimella ja kätevän tavan jakaa niitä ystävilleni."
  contribution: "Vastasin sovelluksen suunnittelusta, vaatimuksista ja agenttien työn ohjaamisesta. Toteutusta arvioitiin prototyyppeihin vertaamalla, selaimessa testaamalla ja erillisillä katselmoinneilla."
  result: "Julkaistu reseptikirjasto ja ruuanlaittosovellus. Automaattinen julkaisu tuo sivustolle vain erikseen valitut reseptit."
demoUrl: "https://salt-and-scroll.uphouse-tuukka.workers.dev/"
order: 2
---

## Lähtötilanne

Säilytän reseptejä Obsidianissa, mutta pelkät muistiinpanot eivät toimineet kovin hyvin keittiössä.
Halusin reseptit puhelimeen niin, että niitä on helppo seurata ruokaa laittaessa.
Samalla halusin kätevän tavan jakaa reseptejä ystävilleni.

## Roolini

Rakensin Salt & Scrollin lukematta sen sovelluskoodia itse.
Agentit toteuttivat sovelluksen.
Minä vastasin suunnittelusta ja lopputuloksen arvioinnista.

Kokeilin ruuanlaittonäkymän eri prototyyppejä oikeilla resepteillä ja valitsin niistä sopivimman.
Toteutuksen piti vastata valitsemaani suuntausta.

## Miten varmistin työn laadun

Sovelluksen toimintaa testattiin selaimessa ja toteutusta verrattiin sovittuihin vaatimuksiin.

Kun tekstiä suurensi pienellä näytöllä, valikko peitti osan ruuanlaittonäkymän painikkeista.
Korjaus tarkistettiin erikseen, ja sama tilanne otettiin mukaan automaattisiin selaintesteihin.

Automatisoin reseptien julkaisun niin, että vain erikseen valitut reseptit päätyivät julkisiksi.
Automaattiset tarkistukset varmistivat, ettei mukaan tullut muita muistiinpanoja.

## Lopputulos

Salt & Scroll on julkaistu reseptikirjasto ja ruuanlaittosovellus.
Projektissa kokeilin, miten voin vastata ohjelmiston laadusta lukematta itse koodia.
Päätin, mitä sovelluksen pitää tehdä, ja arvioin lopputulosta toimivan käyttöliittymän, testien ja erillisten katselmointien avulla.
Tekoäly oli kehitystyön työkalu, ei osa sovelluksen toimintaa.

## Mitä opin

Oma työni painottui suunnitteluun ja lopputuloksen arviointiin.
Mitä enemmän vastuuta annoin agenteille, sitä tarkemmin minun piti miettiä, mitä niiltä odotan.
