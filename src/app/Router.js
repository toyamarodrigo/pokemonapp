import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CardPage, HomePage, FavoritePage } from '../pages';

export const Router = () => {
  const [pokemon, setPokemon] = useState('');
  const [favorites, setFavorites] = useState(() => {
    try {
      const item = localStorage.getItem('pokemon');
      return item ? JSON.parse(item) : '';
    } catch (error) {
      console.log(error);
    }
  });

  function handleSetfavorite(pokemon) {
    setFavorites((favorites) => [...favorites, { ...pokemon }]);
  }

  function handleDeleteFavorite(pokemonID) {
    setFavorites(favorites.filter((el) => el.id !== pokemonID));
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
            favorites={favorites}
            deleteFavorite={handleDeleteFavorite}
          />
        </Route>
        <Route path="/card">
          <CardPage
            pokemon={pokemon}
            setFavorite={handleSetfavorite}
            deleteFavorite={handleDeleteFavorite}
          />
        </Route>
        <Route path="/">
          <HomePage pokemon={pokemon} setPokemon={handleSetPokemon} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
