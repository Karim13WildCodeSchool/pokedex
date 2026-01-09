function PokemonCard({ pokemon }) {
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

      <figcaption style={{ marginTop: "0.5rem" }}>
        {pokemon.name}
      </figcaption>
    </figure>
  );
}

export default PokemonCard;