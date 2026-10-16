---
projectKey: "salt-and-scroll"
title: "Salt & Scroll"
role: "Tuotesuunnittelu ja kehitys tekoälyagenteilla"
stack: ["SvelteKit", "TypeScript", "Playwright", "Cloudflare Workers"]
duration: "2026-nykyhetki"
outcome: "Rakensin resepti- ja ruuanlaittosovelluksen tekoälyagenteilla. Vastasin itse tuotteen suunnasta ja työn laadun varmistamisesta."
atAGlance:
  problem: "Halusin käyttää reseptimuistiinpanojani sujuvammin keittiössä ja jakaa valitsemani reseptit julkaisematta muita yksityisiä muistiinpanojani."
  contribution: "Suunnittelin tuotteen prototyyppien avulla ja annoin toteutuksen tekoälyagenteille. Laadun varmistin testeillä ja erillisillä katselmoinneilla."
  result: "Julkaistu reseptikirjasto ja ruuanlaittosovellus, jonka toimivuus on tarkistettu selaimessa ja ulkoasu verrattu hyväksyttyyn suunnitelmaan."
demoUrl: "https://salt-and-scroll.uphouse-tuukka.workers.dev/"
order: 2
---

## Lähtötilanne

Säilytän reseptejä Obsidianissa, mutta muistiinpanojen selaaminen ei ole kätevin tapa seurata reseptiä ruokaa laittaessa.
Halusin puhelimella käytettävän sovelluksen, jossa ainekset ja ohjeet ovat helposti saatavilla, sekä julkisen reseptikirjaston itse valitsemilleni resepteille.

## Roolini

Rakensin Salt & Scrollin lukematta sen sovelluskoodia itse.
Vastasin siitä, mitä rakennetaan, tein tuotetta koskevat päätökset ja arvioin lopputuloksen.
Tekoälyagentit toteuttivat sovelluksen toimivien prototyyppien ja selkeiden vaatimusten pohjalta.
Suunnittelin myös, miten niiden työn laatu tarkistetaan.

Kokeilin ruuanlaittonäkymän eri prototyyppejä oikeilla resepteillä ja valitsin niistä sopivimman.
Valitusta prototyypistä tuli malli, johon toteutusta verrattiin.

## Miten varmistin työn laadun

Kehitystyöhön kuuluivat automaattiset testit, selaimessa tehdyt tarkistukset ja erilliset katselmoinnit vaatimuksia vasten.
Ulkoasua verrattiin hyväksyttyyn prototyyppiin, ei siihen, mitä agentti sattui tuottamaan.

Yhdessä katselmoinnissa löytyi valikko, joka peitti ruuanlaittonäkymän painikkeita kapealla näytöllä, kun tekstiä oli suurennettu.
Korjaus tarkistettiin erikseen, ja ongelman varalle lisättiin selaintesti, jotta se ei pääsisi palaamaan.
Tällaisia konkreettisia tarkistuksia haluan muutosten hyväksymisen tueksi.

Myös reseptien julkaisu piti rajata tarkasti.
Vain erikseen valitsemani reseptit saivat päätyä julkisiksi.
Julkaisuprosessi tarkisti syntyneet tiedostot sen sijaan, että kaikkia muistiinpanoja olisi käsitelty julkisena sisältönä.

## Lopputulos

Salt & Scroll on julkaistu reseptikirjasto ja ruuanlaittosovellus.
Se on staattinen verkkosovellus, jossa ruuanlaiton aikaiset merkinnät tallentuvat omaan selaimeen.
Tekoälyä käytettiin kehitystyössä, ei sovelluksen ominaisuutena.

Projektissa kokeilin käytännössä, miten voin varmistaa ohjelmiston laadun lukematta itse jokaista koodiriviä.
Tuotetta koskevat päätökset pysyivät minulla.
Toteutuksen laatua arvioitiin testien, erillisten katselmointien ja toimivan käyttöliittymän perusteella.

## Mitä opin

Kun agenteille antaa enemmän vastuuta, oma työ painottuu eri asioihin.
Keskityn enemmän ratkaistavaan ongelmaan, tuotetta koskeviin päätöksiin ja siihen, miten lopputulos tarkistetaan.
Ennen kuin agenteille voi antaa suurempia kokonaisuuksia, kehitystavan on autettava löytämään myös niiden tekemät virheet.
