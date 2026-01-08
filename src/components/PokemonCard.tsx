const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[0]; // Change à [1] pour tester Mew

  return (
    <figure style={{ textAlign: "center", color: "white" }}>
      {pokemon.imgSrc ? (
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
          style={{ width: "150px", height: "150px" }}
        />
      ) : (
        <p>???</p>
      )}
      <figcaption style={{ marginTop: "0.5rem" }}>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;