const express = require("express");
const _ = require("lodash");
const db = require("./db");
const app = express();
const port = 3000;

const PokemonsPage = _.template(`
<h1>Hello World!</h1>
<% _.forEach(pokemons, function(pokemon) { %>
    <a href="/pokemon/<%- pokemon.id %>"><%- pokemon.name %></a>
  <% }); %>
`);

app.get("/", async (req, res) => {
  const pokemons = await db.getAllPokemon();

  res.send(
    PokemonsPage({
      pokemons: pokemons.map((pokemon) => {
        return {
          ...pokemon,
          id: db.getPokemonIdFromURL(pokemon.url),
        };
      }),
    })
  );
});

const PokemonPage = _.template(
  `<h1>this is a <%= pokemon.name %></h1>
  <% _.forEach(pokemon.abilities, function(ability) { %>
    <li><%- ability.ability.name %></li>
  <% }); %>`
);

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await db.getPokemon(req.params.id);

  const html = PokemonPage({ pokemon });

  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
