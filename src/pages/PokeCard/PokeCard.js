import { useState, useEffect } from 'react';
import { getPokemon } from '../../api/fetch';

export const PokeCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    (async () => {
      const response = await getPokemon(pokemon);
      return setPokemonData(response);
    })();
  }, []);

  return (
    <>
      {pokemonData && (
        <img src={pokemonData.sprites.front_default} alt="pokemon image" />
      )}
    </>
  );
};
