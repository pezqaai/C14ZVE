#Munkaidő nyilvántartás

#####Peitli Zoltán - C14ZVE

Beadandó (Alkalmazások fejlesztése)

## 1) Követelmények összegyűjtése, követelmény-analízis

#####   1.1) Funkcionális követelmények
   
   A felhasználónak legyen lehetősége regisztrálni az alkalmazásba. Amennyiben ezt már korábban megtette az az alkalmazás felteszi neki az általa megadott biztonsági kérdést. Helyes válasz eseténkiírja az aktuális jelszót és belépteti. 
   
   A regisztrált felhasználó számára elérhetőek az eddig lejelentett napjai, valamint lehetősége van új munkaórák felvételéhez. Ennek a folyamata, hogy a kiválasztott napon tud felvenni kezdeti és befejezési időpontok megadásával, az adott időszakban végzett tevékenység kommentelésével tételeket. Így listaszerűen megtekinthető minden elvégzett feladat, valamint összegzésre kerül az adott napon elvégzett munkaórák száma. A legkisebb megadható időegység fél óra.
   
   Fontos, hogy az adott napokat le kell zárni, hogy a késöbbiekben ne legyenek szerkeszthetőek. A nem lezárt napoknál a lejelentések elvesznek. Az alkalmazás nem engedheti meg, hogy egy felhasználó egy adott időintervallumra több tételt is felvegyen!
   
   Az admin felhasználóknak legyen lehetőségük a többi felhasználó adatainak szerkesztésére.

#####   1.2) Nem funkcionális követelmények


   * <b>Használhatóság:</b> a felhasználó szempontjából vizsgált elvárások. A követelményeket használhatósági tesztekkel tudjuk ellenőrizni.
   * <b>Teljesítmény:</b> olyan a teljesítményre (pl.: elvárt válaszidők, párhuzamosan kiszolgált kérések száma) vonatkozó elvárások, melyeket teljesítménytesztekkel, terheléses tesztekkel ellenőrizni tudunk.
   * <b>Rendelkezésre állás:</b> több esetben százalékban megadott érték. A 99%-os rendelkezésre állás azt jelenti, hogy a felhasználók az esetek 99%-ban elérik a szolgáltatásokat. Többnyire része a a Szolgáltatási Szint Megállapodásnak (SLA: Service Level Agreement ). Jellemzően szolgáltatás-mérési mutató. Mérésének ellenőrzésére egyszerűen alkalmazhatóak a szerver logok.
   * <b>Skálázhatóság:</b> a rendszer növekedéséből fakadóan milyen bővítéseket kell tennünk, például milyen szervereket kell üzembe helyezni. Jellemzően az elvárt teljesítményből határozhatjuk meg.
   * <b>Biztonság:</b> adat-védelmi elvárások meghatározása. Webes alkalmazások biztonsági tesztelése nem egyszerű feladat, az alkalmazás normál működésén alapulva megpróbálunk ártalmas tevékenységet véghezvinni, azaz például személyes adatokat próbálunk megszerezni, módosítjuk az oldal tartalmát, esetleg összeomlasztjuk a rendszert.
   * <b>Karbantarthatóság:</b> olyan a megbízó által adott elvárások, melyek az alkalmazás üzemeltetésével, karbantartásával, bővítésével kapcsolatosak.

## 2) Szerepkörök, használati esetek, folyamatok meghatározása
-
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
