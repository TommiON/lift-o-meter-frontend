## Lift-o-meter: käyttöohje

Lift-o-meter on sovellus Stronglifts 5x5 -voimaharjoitteluohjelman seurantaan ja automaattiseen kirjanpitoon. Käyttäjätunnusta luotaessa sovellus pyytää käyttäjää arvioimaan (tai kokeilemaan) lähtövoimatasonsa viidessä klassisessa voimailuliikkeessä. Tämän jälkeen voi aloittaa harjoittelun niin sanotusti aivot narikassa, sovellus hoitaa treeniohjelman laskennan ja seurannan automaattisesti.

(Sivuhuomio: tosielämässä Lift-o-Meteriä todennäköisesti käytettäisiin älypuhelimella ja paras toteutustapa olisi natiivi mobiilisovellus. Tämänhetkinen toteutus toimii jotenkuten responsiivisesti mutta ei ihanteellisesti mobiiliruudulla. Tämä on yksi kehityskohteista, jos joskus innostun ja ehdin kehittää tästä oikean, yleiskäyttöisen treeninseurantatyökalun.)

### Lyhyesti Stronglifts 5x5:sta

Stronglifts 5x5 on erityisesti aloittelijoille suunnattu voimaharjoitteluohjelma, joka perustuu viiteen klassiseen voimaharjoitteluliikkeeseen: kyykky, penkkipunnerrus, kulmasoutu, pystypunnerrus, maastaveto. Järjestelmä on yksinkertainen:

- [ ] Kaksi erilaista harjoituskertaa vuorottelevat. Jokainen harjoituskerta alkaa kyykyllä, kaksi seuraavaa liikettä vuorottelevat harjoituskerran mukaan.
- [ ] Liikkeessä tehdään viisi sarjaa., poikkeuksena maastaveto, jota ylirasituksen välttämiseksi tehdään vain yksi sarja.
- [ ] Jos kaikki viisi sarjaa onnistuvat, seuraavaan harjoitukseen lisätään 2,5 kiloa, poikkeuksena jälleen maastaveto, jossa lisäys 5 kiloa.
- [ ] Jos yksikin jonkin liikkeen sarjoista epäonnistuu, kyseisen liikkeen seuraavaan harjoituskertaan ei lisätä painoja.
- [ ] Jos myös uusintayritykset samoilla painoilla epäonnistuvat kaksi kertaa peräkkäin, seuraavaan harjoituskertaan vähennetään painoa 20 prosenttia. (Voimaharjoittelussa yleisesti käytetty kikka, jolla "huijataan" keho jumituskohdan yli. Perustuu siihen, että harjoitusvaste ei riipu niinkään absoluuttisesta kuormasta vaan suhteellisesta muutoksesta.)

[Lisää Stronglifts-ohjelmasta](https://stronglifts.com)

### Käyttäjätunnus ja kirjautuminen

Sovelluksen etusivu tarjoaa sisäänkirjautumistoiminnon sekä linkin uuden käyttäjätunnuksen luomiseen. Sovelluksessa on myös valmiiksi luotu tunnus, jossa simuloituna jonkin verran harjoitushistoriaa. Köyttäjätunnus **testuser**, salasana **testpw**.

![Kirjautumissivu](/lift_loginruutu.png)

### Navigointi



### Päänäkymä

Sovelluksen päänäkymä näyttää harjoitukset: ylimpänä seuraavana vuorossa oleva, jonka voi aloittaa painikkeesta, ja tämän alla aikajärjestyksessä aiemmat.

### Kehitysgraafi

Kehitys-näkymästä löytyy graafi, joka näyttää edistyksen eri liikkeissä.
