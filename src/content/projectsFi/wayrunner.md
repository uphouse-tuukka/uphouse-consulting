---
projectKey: "wayrunner"
title: "Wayrunner"
role: "Järjestelmäsuunnittelu ja kehitys"
stack: ["Python", "Tekoälyagentit", "GitHub", "Automaattiset tarkistukset"]
duration: "2026-nykyhetki"
outcome: "Rakensin järjestelmän, joka vie tekoälyagenttien työn määrittelystä toteutuksen, katselmoinnin ja hyväksymisen kautta pull requestiin."
atAGlance:
  problem: "Vaikka agentit hoitivat koodauksen, minun piti yhä koordinoida työtä, tarkistaa tulokset ja selvittää, miten keskeytynyttä työtä jatketaan."
  contribution: "Rakensin järjestelmän, joka koordinoi agenttien työtä. Toteutus, tulosten erillinen hyväksyminen ja ihmisen päätökset ovat omia vaiheitaan."
  result: "Omassa käytössä oleva järjestelmä, jolla on tehty rajattuja koeajoja ja testattu keskeytyksistä palautumista. Mukana on yhteys omaan tekoälyassistenttiini."
order: 3
---

## Lähtötilanne

Halusin antaa tekoälyagenteille kokonaisia tehtäviä yksittäisten koodauspyyntöjen sijaan.
Pelkkä koodin tuottaminen ei riittänyt: järjestelmän piti ymmärtää, mitä halusin, ohjata työ toteutuksen ja katselmoinnin läpi sekä tarkistaa, että lopputulos vastasi pyyntöä.

Wayrunner on ensimmäinen rakentamani järjestelmä, joka ohjaa tekoälyagenttien tekemää ohjelmistokehitystä.
Se vie työn määrittelystä toteutukseen, katselmointiin ja hyväksymistarkistuksiin asti.
Lopuksi muutokset toimitetaan pull requestina.

## Valmis ei vielä tarkoita toimivaa

Agentin ilmoitus työn valmistumisesta ei vielä kerro, onko tulos oikein.
Siksi Wayrunner käsittelee toteutusta ehdotuksena, joka pitää tarkistaa erikseen.
Katselmointi- ja hyväksymisvaiheissa varmistetaan, että juuri tarkistettavana oleva koodiversio vastaa pyyntöä, ennen kuin työ etenee.

Järjestelmän on osattava myös pysähtyä.
Korjausyrityksiä on rajallinen määrä.
Jos tarkistusten tuloksia puuttuu, tuotetta koskeva päätös on auki tai järjestelmän toiminnassa on häiriö, tilanteelle on oma käsittelytapansa.
Samaa tehtävää ei vain yritetä loputtomasti uudelleen.

## Päätökset ihmiselle, keskeytykset hallintaan

Yhdistin Wayrunnerin Alfrediin, henkilökohtaiseen tekoälyassistenttiini, jotta työtä koskevat kysymykset ja vastaukseni pysyvät tallessa oikean tehtävän yhteydessä.
Rakensin Alfredin jo ennen Grok Botia, joten pääsin toki myös toimimaan omana IT-tukenani.
Assistentti hoitaa keskustelun, mutta Wayrunner pitää kirjaa työn etenemisestä ja vastaa hyväksymistarkistuksista.

Keskeytyksen jälkeen pitää pystyä selvittämään, mihin työ jäi.
Tallennettujen tulosten ja palautumistietojen perusteella järjestelmä erottaa, voiko työtä jatkaa, pitääkö aloittaa uusi yritys vai tarvitaanko minulta päätös.

## Lopputulos

Dokumentoiduissa, rajatuissa koeajoissa on käyty läpi toteutus, erillinen katselmointi, hyväksyminen ja muutosten toimittaminen pull requestina.
Assistenttiyhteyttä on kokeiltu sekä keskusteluissa että uudelleenkäynnistysten yhteydessä.
Wayrunner on omaan käyttööni rakentamani järjestelmä, jonka kehitys jatkuu.

Projekti on selkeyttänyt sitä, mitä laajempien kokonaisuuksien antaminen tekoälyagenteille vaatii.
Ensin pitää määritellä, milloin työ on valmis ja miten tulokset tarkistetaan.
Tuotetta koskevat päätökset ja vastuu siitä, mitä agentit saavat tehdä, pysyvät minulla.
