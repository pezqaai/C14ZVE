#Munkaidő nyilvántartás

#####Peitli Zoltán - C14ZVE

Beadandó (Alkalmazások fejlesztése)

## 1) Követelmények összegyűjtése, követelmény-analízis

#####   1.1) Funkcionális követelmények
   
   A felhasználó számára az alkalmazás biztosítsa munkaóráinak lejelentésének lehetőségét, a már eddig lejelentett órák áttekinthetőségét, mindezt egyedi felhasználóval.
   
   A felhasználónak legyen lehetősége regisztrálni az alkalmazásba, de egy felhasználóhoz maximum egy account tartozhat. Amennyiben a felhasználó elfelejtette a jelszavát az alkalmazás felteszi neki az általa megadott (regisztrációkor) biztonsági kérdést. Helyes válasz esetén kiírja az aktuális jelszót és belépteti. A felhasználó profiljának bizonyos attribútumai legyenek szerkeszthetők.
   
   A regisztrált felhasználó számára elérhetőek az eddig lejelentett napjai, valamint lehetősége van új munkaórák felvételéhez. Ennek a folyamata, hogy a kiválasztott napon tud felvenni kezdeti és befejezési időpontok megadásával, az adott időszakban végzett tevékenység kommentelésével tételeket. Így listaszerűen megtekinthető minden elvégzett feladat, valamint összegzésre kerül az adott napon elvégzett munkaórák száma. A legkisebb megadható időegység fél óra.
   
   Fontos, hogy az adott napokat le kell zárni, hogy a késöbbiekben ne legyenek szerkeszthetőek. A nem lezárt napoknál a lejelentések elvesznek. Az alkalmazás nem engedheti meg, hogy egy felhasználó egy adott időintervallumra több tételt is felvegyen!
   
   Az admin felhasználóknak legyen lehetőségük a többi felhasználó adatainak szerkesztésére.

#####   1.2) Nem funkcionális követelmények


   * <b>Használhatóság:</b> A látogató számára a felület legyen egyértelmű és átlátható (egy átlagos ember a felhasználói dokumentum ismerete nélkül is könnyen tudja kezelni). Az admin felület a felhasználói dokumentáció ismeretében legyen egyértelműen használható.
   * <b>Teljesítmény:</b> A weboldal bármely funkcióját használva az oldal frissülése, illetve az új oldal megjelenése ne vegyen igénybe többet pár másodpernél egy átlagos internetkapcsolattal rendelkező felhasználónál. Az oldal legyen képes a cég összes alkalmazottjának egyidejű kiszolgálására (minimum 50 ember).
   * <b>Rendelkezésre állás:</b> Cél, hogy a weboldal elérhető legyen legalább egy év 99%-ában. Eszerint a felhasználóknak 100 kisérletből legalább 99 alkalommal el kell tudniuk érni az oldalt.
   * <b>Skálázhatóság:</b> A becsült felhasználó-létszám nem igényli skálázható rendszer tervezését (a későbbiekben a rendszer és a cég növekedésével ez változhat).
   * <b>Biztonság:</b> A felhasználók és az adminok jelszavai ne legyenek visszafejthetőek. A hibásan bevitt adatokat a rendszer lekezeli, elfelejtett jelszó esetén biztonsági kérdés helyes megválaszolásával is megoldható a beléptetés. Egy munkatárshoz csak egy account tartozhat. A látogatók által elérhető beviteli mezőkön a rendszer végezzen szűrést ártalmas kódokra.
   * <b>Karbantarthatóság:</b> Törekedni kell a weboldal könnyű bővíthetőségére és módosíthatóságára.
   * <b>Minőségi elvárások, felhasználói oldalról:</b> A webes alkalmazásunk legyen elérhető több platformról és különböző böngészőkből is. Működése legyen akadálymentes és az oldalak legyenek validak a megfelelő szabványok szerint.

#####   1.3) Szakterületi fogalomjegyzék

   * <b>Felhasználó:</b> A felhasználó (user) az a személy (végfelhasználó, end-user) vagy szoftver ágens, aki egy számítógépes vagy számítógép-hálózati szolgáltatás használója. A felhasználóhoz gyakran felhasználói fiók tartozik, amit felhasználói név (username, screen name, nick vagy handle) azonosít.
   * <b>Alkalmazás:</b> Az alkalmazás egy számítógépes program, ami egy fordítóprogram segítségével készül el egy forráskódból.
   * <b>Jelszó:</b> A jelszó, vagy más néven kulcsszó, kódszó, kód, vagy jelmondat, egy jelből vagy jelsorból álló kifejezés, melyet azonosításnál, illetve hitelesítéshez használunk.
   * <b>Regisztráció:</b> A felhasználó adatainak rögzítése az alkalmazás adatbázisába.

## 2) Szerepkörök, használati esetek, folyamatok meghatározása

#####   1.1) Szerepkörök
   * <b>Ismeretlen felhasználó</b>
<table>
   <tr>
      <td>Szerepkör neve:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Leírás:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Profil adatok:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Super-group:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Sub-group:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Kapcsolódó use-case:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Objektumok – olvasási joggal:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Objektumok – módosítási joggal:</td>
      <td>-</td>
   </tr>
</table>
   * <b>Azonosított felhasználó</b>
<table>
   <tr>
      <td>Szerepkör neve:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Leírás:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Profil adatok:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Super-group:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Sub-group:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Kapcsolódó use-case:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Objektumok – olvasási joggal:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Objektumok – módosítási joggal:</td>
      <td>-</td>
   </tr>
</table>
   * <b>Adminisztrátor</b>
<table>
   <tr>
      <td>Szerepkör neve:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Leírás:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Profil adatok:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Super-group:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Sub-group:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Kapcsolódó use-case:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Objektumok – olvasási joggal:</td>
      <td>-</td>
   </tr>
   <tr>
      <td>Objektumok – módosítási joggal:</td>
      <td>-</td>
   </tr>
</table>

#####   1.2) Használati esetek

#####   1.3) Folyamatok meghatározása

## 3) Oldalfunkciók
-
## 4) Oldalvázlatok készítése
-
## 5) Oldaltérkép, site struktúra
-
## 6) Adatbázis tervezése
-
## 7) Adatokkal kapcsolatos műveletek előkészítése
-
## 8) Designtervek készítése
-


Welcome to your Node.js project on Cloud9 IDE!

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.
