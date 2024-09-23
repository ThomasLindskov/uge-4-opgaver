# Opgavebeskrivelse: Async, Fetch, og Cookies

I denne opgave skal vi arbejde med at integrere `async await`, `fetch` og `cookies` i vores eksisterende kodebase.

Til alle opgaverne er det vigtigt i gør brug af korrekte status koder, dvs. hvis autentificeringen fejler, vil det være oplagt at gøre brug af en 401 fejlkode. Status koder og deres betydning kan ses her [Status koder](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Opgave 1: Implementer Asynkron Produkthentning

1. I `server/routes/product.js`, opret en ny route `/getProducts` der returnerer produkterne fra `server/db/products.js`.
2. Implementer autentificering på denne route, så kun indloggede brugere kan tilgå den.
3. I `client/scripts/menu.js`, erstat det statiske `productList` array med en asynkron funktion der henter produkterne fra den nye `/getProducts` route ved hjælp af `fetch` og `async/await`.
4. Opdater `displayProducts()` funktionen til at vente på den asynkrone produkthentning før visning.

## Opgave 2: Implementer Favorit-funktionalitet

1. I `server/routes/product.js`, udvikel `/toggleFavorite` der tager imod et produktnavn og et brugernavn. Denne route skal også have autentificering. 
2. Implementer logikken i `toggleFavorite` der gemmer/fjerner produktet som favorit for den givne bruger (du kan gemme dette i et objekt eller array på serversiden for nu).
3. I `client/scripts/menu.js`, opdater `toggleLike` funktionen til at sende en request til `/toggleFavorite` når et produkt likes/unlikes.

## Opgave 3: Persistente Favoritter med Cookies

1. I `server/routes/product.js`, udvikel `/getFavorites/:userId` til at returnere brugerens favorit-produkter. Brug cookies til at gemme favoriterne.  Denne route skal også have autentificering. 
2. I `client/scripts/menu.js`, opret en funktion `loadFavorites()` der henter brugerens favoritter ved page load.
3. Opdater `displayProducts()` funktionen til at markere favorit-produkter baseret på de hentede data.

## Bonus opgave implementer loading icon indtil produkterne er loadet
Brug gerne Robort (ChatGPT) til at lave et icon. 