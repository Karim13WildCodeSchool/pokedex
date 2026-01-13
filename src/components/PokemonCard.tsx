import React from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>

      {pokemon.imgSrc && (
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
          className="pokemon-image"
        />
      )}
    </div>
  );
};

export default PokemonCard;