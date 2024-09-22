# Opgavebeskrivelse

I denne opgave skal vi arbejde med at lægge de sidste 3 ugers ting sammen. Det gælder `async await`, `fetch` og `cookies`.

## Opgave 1

Inde i `client/scripts/menu.js`, er der gjort brug af et statisk product array. Opret en route i `server/routes/product.js`, der henter dataet fra `server/db/products.js` i stedet. I `menu.js` skal du hente dataet via den nye route, du lige har lavet.

En bruger, der ikke er logget ind, skal ikke kunne tilgå den nye route.

