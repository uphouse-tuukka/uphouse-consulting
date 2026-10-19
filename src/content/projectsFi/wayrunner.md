---
projectKey: "wayrunner"
title: "Wayrunner"
role: "Järjestelmäsuunnittelu ja kehitys"
stack: ["Python", "Tekoälyagentit", "GitHub", "Automaattiset tarkistukset"]
duration: "2026-nykyhetki"
outcome: "Rakensin agenttien työtä ohjaavan järjestelmän, jota voin käyttää oman tekoälyassistenttini kautta myös silloin, kun en ole koneella."
atAGlance:
  problem: "Agentit hoitivat koodauksen, mutta työn koordinointi ja tulosten tarkistaminen jäivät minulle."
  contribution: "Suunnittelin ja rakensin järjestelmän, joka ohjaa agenttien työtä ja huolehtii tulosten erillisestä tarkistamisesta."
  result: "Voin seurata agenttien työtä ja antaa lisäohjeita oman tekoälyassistenttini kautta myös silloin, kun en ole koneella."
order: 3
---

## Lähtötilanne

Koodauksen pystyin jo antamaan agenteille, mutta työn koordinointi ja tulosten tarkistaminen jäivät minulle.
Halusin järjestelmän, joka huolehtii myös työn etenemisestä ja auttaa jatkamaan keskeytyneitä tehtäviä.

Rakensin Wayrunnerin ohjaamaan agenttien työtä tehtävänannosta tarkistettuun pull requestiin.

## Valmis ei vielä tarkoita toimivaa

Agentin ilmoitus työn valmistumisesta ei vielä riitä.
Ennen hyväksymistä toteutus katselmoidaan ja tarkistetaan, että se vastaa tehtävänantoa.

Järjestelmän on osattava myös pysähtyä.
Jos tulosta ei voida hyväksyä, korjauskierroksia tehdään vain rajattu määrä.
Puuttuvat tarkistukset, avoimet päätökset ja toimintahäiriöt käsitellään erikseen.

## Työn ohjaaminen ja seuranta

Alfred on henkilökohtainen tekoälyassistenttini, jonka kautta annan Wayrunnerille tehtäviä ja vastaan sen kysymyksiin.

Wayrunner tallentaa työn etenemisen ja tulokset.
Jos työ keskeytyy, tallessa on tieto siitä, mitä on jo tehty ja mitä seuraavaksi tarvitaan.

## Lopputulos

Wayrunner hoitaa agenttien työn koordinointia, joten minun ei tarvitse ohjata jokaista vaihetta erikseen.
Voin seurata työtä ja antaa lisäohjeita Alfredin kautta myös silloin, kun en ole koneella.
Kehitän järjestelmää edelleen omaan käyttööni.

## Mitä opin

Agenttien hyöty ei synny vain siitä, kuinka nopeasti ne kirjoittavat koodia.
Minulle olennaista on, kuinka paljon työtä ne pystyvät viemään eteenpäin ilman jatkuvaa ohjaamista.
