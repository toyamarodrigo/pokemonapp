import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CardPage, HomePage } from '../pages';

export const Router = () => {
  const [pokemon, setPokemon] = useState('');
  // const [favorites, setFavorites] = useState([{}]);

  // function handleSetfavorite(pokemon) {
  //   setFavorites((previousState) => [...favorites, { name: pokemon.name }]);
  // }

  function handleSetPokemon(pokemon) {
    setPokemon(pokemon);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <CardPage pokemon={pokemon} />
        </Route>
        <Route path="/">
          <HomePage pokemon={pokemon} setPokemon={handleSetPokemon} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
