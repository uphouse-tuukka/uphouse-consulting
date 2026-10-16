---
projectKey: "salt-and-scroll"
title: "Salt & Scroll"
role: "Tuotesuunnittelu ja tekoälyvetoinen kehitys"
stack: ["SvelteKit", "TypeScript", "Playwright", "Cloudflare Workers"]
duration: "2026-nykyhetki"
outcome: "Rakensin julkisen ruuanlaittosovelluksen tekoälyagenteilla. Tuotepäätökset ja tulosten todentaminen olivat osa työnkulkua."
atAGlance:
  problem: "Reseptimuistiinpanoni tarvitsivat ruuanlaittoa palvelevan käyttöliittymän ja tavan jakaa valitut reseptit julkaisematta yksityisiä muistiinpanoja."
  contribution: "Ohjasin tuotetta prototyyppien ja tekoälyagenttien avulla. Työnkulkuun kuuluivat selkeät suunnittelupäätökset, testit ja erilliset katselmoinnit."
  result: "Julkaistu reseptikirjasto ja ruuanlaittosovellus, jonka toteutusta on tarkistettu selaimessa ja verrattu hyväksyttyyn suunnitelmaan."
demoUrl: "https://salt-and-scroll.uphouse-tuukka.workers.dev/"
order: 2
---

## Lähtötilanne

Säilytän reseptejä Obsidianissa, mutta hyvä muistiinpano ja hyvä ruuanlaittokäyttöliittymä ovat eri asioita. Halusin puhelimella toimivan sovelluksen, jossa ainekset ja ohjeet pysyvät käden ulottuvilla. Lisäksi halusin jakaa itse valitsemani reseptit julkisessa kirjastossa.

## Roolini

Rakensin Salt & Scrollin lukematta sen sovelluskoodia. Vastasin tuotteen suunnasta, päätöksistä ja lopputuloksen arvioinnista. Agentit hoitivat toteutuksen työnkulussa, jonka rakensin toimivien prototyyppien, selkeiden vaatimusten ja todentamisen ympärille.

Vertailin ruuanlaittonäkymän toimivia vaihtoehtoja oikeilla resepteillä ja valitsin suunnan. Hyväksytystä prototyypistä tuli vertailukohta, jota toteutuksen piti vastata.

## Miten tein työstä todennettavaa

Työnkulkuun kuuluivat automaattiset testit, selaintarkistukset ja erilliset katselmoinnit vaatimuksia vasten. Visuaalisissa tarkistuksissa sovellusta verrattiin hyväksyttyyn esimerkkiin sen sijaan, että toteutuksen oma ulkoasu olisi kelvannut vertailukohdaksi.

Yhdessä katselmoinnissa löytyi valikko, joka peitti ruuanlaiton ohjaimia kapealla näytöllä suurennetulla tekstillä. Korjaukselle tehtiin selainregressiotesti ja erillinen uudelleentarkistus. Tällaista näyttöä haluan ennen muutoksen hyväksymistä.

Myös julkaisemisella oli selkeä raja. Vain erikseen valitut reseptit saivat siirtyä yksityisistä muistiinpanoista julkisiksi. Julkaisuprosessi tarkisti tuotetut tiedostot.

## Lopputulos

Salt & Scroll on julkaistu reseptikirjasto ja ruuanlaittosovellus. Se on staattinen verkkosovellus, jonka ruuanlaittotila tallentuu selaimeen. Tekoälytyö liittyy sen kehitystapaan.

Projekti antoi käytännön tavan kehittää ohjelmistoa ilman, että oma rivikohtainen koodinlukuni olisi hyväksymismenetelmä. Tuotepäätökset pysyivät minulla. Testit, erilliset katselmoinnit ja toimivan käyttöliittymän tarkistukset tuottivat näyttöä toteutuksen laadusta.

## Mitä opin

Kun agenteille antaa enemmän vastuuta, myös kehittäjän työ muuttuu. Käytän enemmän huomiota ongelmaan, päätöksiin ja siihen, miten tulos tarkistetaan. Työnkulun pitää tehdä virheet näkyviksi ennen kuin sille voi antaa suurempia kokonaisuuksia.
