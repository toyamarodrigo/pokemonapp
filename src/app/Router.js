import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CardPage, HomePage, FavoritePage } from '../pages';

export const Router = () => {
  const [pokemon, setPokemon] = useState('');
  const [favorites, setFavorites] = useState([{}]);

  console.log('Router, favorites: ', favorites);

  function handleSetfavorite(pokemon) {
    setFavorites((favorites) => [...favorites, { ...pokemon }]);
  }

  function handleSetPokemon(pokemon) {
    setPokemon(pokemon);
  }

  function saveLocalPokemon() {
    localStorage.setItem('pokemon', JSON.stringify(favorites));
  }

  useEffect(() => {
    saveLocalPokemon();
  }, [favorites]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/favorites">
          <FavoritePage
            pokemon={pokemon}
            setPokemon={handleSetPokemon}
            favorites={favorites}
            setFavorite={handleSetfavorite}
          />
        </Route>
        <Route path="/card">
          <CardPage pokemon={pokemon} setFavorite={handleSetfavorite} />
        </Route>
        <Route path="/">
          <HomePage pokemon={pokemon} setPokemon={handleSetPokemon} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
