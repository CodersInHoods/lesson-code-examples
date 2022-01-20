const express = require("express");
const db = require("./db");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let html = "<h1>Hello World!</h1>";

  const pokemons = await db.getAllPokemon();

  pokemons.forEach((pokemon) => {
    html += `<a href="${`/pokemon/${db.getPokemonIdFromURL(pokemon.url)}`}">${
      pokemon.name
    }</a>`;
  });

  res.send(html);
});

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await db.getPokemon(req.params.id);

  let html = `<h1>this is a ${pokemon.name}</h1>`;

  pokemon.abilities.forEach((ability) => {
    html += `<li>${ability.ability.name}</li>`;
  });

  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
