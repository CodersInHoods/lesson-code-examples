const express = require("express");
const pug = require("pug");

const db = require("./db");
const app = express();
const port = 3000;

const Homepage = pug.compileFile("views/index.pug");
const PokemonPage = pug.compileFile("views/pokemon.pug");
const PokemonDetailPage = pug.compileFile("views/pokemon_detail.pug");

app.get("/", (req, res) => {
  res.send(Homepage());
});

app.get("/pokemon", async (req, res) => {
  const pokemon = await db.getAllPokemon();

  res.send(
    PokemonPage({
      pokemon: pokemon.map((p) => {
        return {
          ...p,
          id: db.getPokemonIdFromURL(p.url),
        };
      }),
    })
  );
});

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await db.getPokemon(req.params.id);

  res.send(PokemonDetailPage({ pokemon }));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
