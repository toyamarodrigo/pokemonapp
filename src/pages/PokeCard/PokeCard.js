import { useState, useEffect } from 'react';

export const PokeCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState();
  console.log(pokemon);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
    console.log(pokemonData);
  }, []);

  return (
    <>
      {pokemonData && (
        <img src={pokemonData.sprites.front_default} alt="pokemon image" />
      )}
    </>
  );
};
