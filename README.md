# Casa Guardians – új weboldal

A Dorothea Concierge mintájára átdolgozott, angol nyelvű, statikus weboldal. Nem kell hozzá build, npm vagy szerveroldali kód.

## Feltöltés GitHubra

1. Csomagold ki a ZIP-et a számítógépeden.
2. Nyisd meg a Casa Guardians meglévő GitHub-repositoryját.
3. Az `Add file → Upload files` menüpontban töltsd fel a kicsomagolt mappa TARTALMÁT a jelenlegi index.html mellé/helyére. Ne magát a ZIP-et és ne az azt körülvevő mappát töltsd fel.
4. Az index.html felülírja a régit. Az oldal most tartalomazonosítóval ellátott casa-*.css és casa-*.js fájlokat használ, így a böngésző régi gyorsítótára nem keveri össze a régi és új megjelenést. Ezeket az új fájlokat is töltsd fel! A style.css és script.js szerkeszthető forráspéldányként a csomagban marad, de a HTML az új nevű fájlokat tölti. A privacy.html, thank-you.html és hero-villa.png új fájl. Az összes eredeti kép és a CNAME is a csomagban van.
5. Kattints a `Commit changes` gombra. A meglévő GitHub Pages / Cloudflare közzétételi beállításaidat nem kell átírni.
6. Várd meg a közzétételt, majd frissíts Ctrl+F5-tel. Az éles oldalon is ellenőrizd a képeket, a mobilmenüt, a Privacy Policy linket és az űrlapot.

## Ajánlatkérő űrlap – egyszeri aktiválás

A címzett jelenleg **casaguardians@gmail.com**, az eredeti Casa-oldal és a feltöltött irat alapján.

A megoldás FormSubmit, ugyanaz a szolgáltatás, mint a Dorothea kódjában. Név, e-mail, település, szolgáltatás és leírás szükséges; telefonszám és időzítés opcionális. A fotókat WhatsAppon lehet elküldeni.

**Feltöltés után küldj saját tesztajánlatkérést. A FormSubmit első használatkor aktiváló e-mailt küldhet: a Gmailben nyomd meg a megerősítő linket, majd küldj egy MÁSODIK tesztet, és ellenőrizd, hogy az valóban megérkezett. A spam mappát is nézd meg.** Aktiválás és a tényleges kézbesítés ellenőrzése nélkül ne tekintsd beüzemeltnek az űrlapot. Innen nem küldtünk tesztlevelet és nem aktiváltuk helyetted.

Ha info@casaguardians.com-ra szeretnéd:
- az index.html form action értékében cseréld a címet;
- az index.html, privacy.html és thank-you.html látható címeit és mailto linkjeit is cseréld;
- az új címet külön aktiváld a FormSubmitnál. A JavaScript automatikusan a form action címét használja.

A küldés alatt a gomb letiltott, sikertelen küldésnél az adatok megmaradnak. Az oldal csak pozitív szolgáltatói válasz után jelez beküldést; ez nem kézbesítési igazolás. JavaScript nélkül a form közvetlenül a szolgáltatóhoz küld és a thank-you.html-re tér vissza. A reCAPTCHA helyett rejtett spamcsapda működik, a Dorothea beállításához igazodva; ez korlátozott spamvédelem.

## Adatvédelmi tájékoztató

Az adatkezelőként Ádám Girst szerepel. Cím: Calle Júcar 4, 3º B, 29630 Benalmádena, Málaga, Spain. Forrás: az ANEXO FIRMA DIGITAL dokumentum ügyfélblokkja. Ez az irat kapcsolattartási címet tartalmaz; közzététel előtt ellenőrizd, hogy ez a vállalkozás jelenlegi hivatalos címe is. Az eredeti PDF-ek, aláírások és személyes adóiratok nem kerültek a weboldalcsomagba.

A tájékoztató a tényleges kódhoz igazodik, de az üzemeltetési gyakorlatot a kódból nem lehet teljesen igazolni. Közzététel előtt az alábbiakat kell ellenőrizni a vállalkozásnál/könyvelőnél/adatvédelmi szakembernél:
- a hivatalos cím és az adatkezelő azonosítása;
- a tényleges tárhelyszolgáltató (a csomag GitHub Pages-kompatibilis, a GitHub-repository önmagában nem igazolja a tárhelyet);
- a választott FormSubmit/Gmail konstrukció adatfeldolgozási feltételei, adatkezelési helyei és az EGT-n kívüli adattovábbítás konkrét jogi garanciái; ezeket a feltöltött források nem igazolják, ezért a szöveg nem állít nem ellenőrzött garanciákat;
- a tényleges megőrzési és törlési gyakorlat. A leírt célhoz kötött megőrzést a levelezésben is követni kell.

Az oldal nem állít teljes körű jogi megfelelőségi tanúsítást. A négyzet a tájékoztató elolvasására szolgál; nem marketinghozzájárulás. A fő jogalap az érdeklődő kérésére tett szerződéskötést megelőző lépés.

Az eredeti Cloudflare Web Analytics kód megmaradt. A betűk Google Fontsról töltődnek; hálózat nélkül rendszerbetűk jelennek meg. Nincs új reklámkövetés, cookie-banner vagy böngészőben tárolt űrlapadat.

## Mi változott?

- A Dorothea tényleges hero-fotója került a teljes szélességű nyitórészbe.
- Hasonló elegáns serif betűk, bézs háttér, sötét szakaszok és szögletes gombok.
- A Casa összes eredeti képének fájltartalma változatlan. Az eredeti hero-velvet.webp a referenciák között maradt.
- Megmaradtak a szolgáltatások, öt referencia, a két csapattag és az elérhetőségek.
- Új ajánlatkérő űrlap, adatvédelmi oldal és JavaScript nélküli küldéshez köszönőoldal.
- Mobilmenü, billentyűzetes fókuszjelzés, kötelező mezők ellenőrzése és csökkentett mozgás támogatása.

## Tájékoztatási és technikai források

- https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos/derecho-de-informacion
- https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/6-el-deber-de-informacion/FAQ-0217-que-informacion-debe-facilitarse-cuando-los-datos-se-obtengan-directamente-del-afectado
- https://formsubmit.co/documentation
- https://formsubmit.co/privacy.pdf
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://developers.cloudflare.com/web-analytics/

## Elvégzett ellenőrzés

- Mind a 11 eredeti képfájl bájtról bájtra változatlan, az új hero a Dorothea-kép pontos másolata.
- Mindhárom HTML-oldal helyi fájlhivatkozásai és belső linkjei ellenőrizve.
- Böngészős ellenőrzés 320, 390, 768 és 1440 px szélességen: nincs oldalirányú kilógás.
- Mobilmenü megnyitása és Escape-pel bezárása; kötelező mezők; szimulált hibás beküldéskor adatmegőrzés; szimulált sikeres beküldéskor állapotjelzés és ürítés: megfelelő.
- Asztali nyitókép, referenciák és kapcsolat, valamint mobil nyitókép, űrlap és adatvédelmi oldal vizuálisan ellenőrizve. Az ellenőrzési környezetben a külső webfontok helyett a beállított tartalék betűk is megjelentek.
- Élő FormSubmit-kézbesítés és a szolgáltatói aktiválás nem történt; ez feltöltés után ellenőrizendő.


## Gyorsítótár-javítás

A legújabb csomag összes fájlját töltsd fel együtt, az index.html, privacy.html és thank-you.html fájlokat is felülírva. Az új casa-*.css és casa-*.js fájlokat is töltsd fel. Ha a korábbi HTML maradna a böngészőben, nyomj Ctrl+F5-öt.


## Új kiemelés
A nyitókép alatt és az űrlap mellett is szerepel: helyszíni felmérés után 24 órán belüli írásos árajánlat; a megállapodott munkatartalomra a befejezésig változatlan ár; egyszerre egy projekt. A külön kért többletmunka árát előre kell egyeztetni. Az új CSS-fájl neve megváltozott, ezért a teljes csomagot töltsd fel.
