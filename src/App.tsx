import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState<string>("bulbasaur");

  const pokemons = [
  { name: "bulbasaur", imgSrc: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg" },
  { name: "mew", imgSrc: "https://img.pokemondb.net/artwork/large/mew.jpg" },
  { name: "pikachu", imgSrc: "https://img.pokemondb.net/artwork/large/pikachu.jpg" },
  { name: "charmander", imgSrc: "https://img.pokemondb.net/artwork/large/charmander.jpg" }
];

  const currentPokemon = pokemons.find(p => p.name === pokemonName);

  return (
    <div>
      <h1>Mon Pokédex</h1>

      {currentPokemon && <PokemonCard pokemon={currentPokemon} />}

      <div style={{ marginTop: "20px" }}>
       
        <button onClick={() => setPokemonName("bulbasaur")}>Bulbizarre</button>
        <button onClick={() => setPokemonName("mew")}>Mew</button>
        <button onClick={() => setPokemonName("pikachu")}>Pikachu</button>
        <button onClick={() => setPokemonName("charmander")}>Salamèche</button>
      </div>
    </div>
  );
}

export default App;
