const express = require("express");
const pug = require("pug");

const db = require("./db");
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/pokemon", async (req, res) => {
  const pokemon = await db.getAllPokemon();

  res.render("pokemon", {
    pokemon: pokemon.map((p) => {
      return {
        ...p,
        id: db.getPokemonIdFromURL(p.url),
      };
    }),
  });
});

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await db.getPokemon(req.params.id);

  res.render("pokemon_detail", { pokemon });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
