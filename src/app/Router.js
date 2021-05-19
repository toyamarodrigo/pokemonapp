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
    localStorage.setItem('currentPokemonID', JSON.stringify(pokemon));
    setPokemon(pokemon);
  }

  function saveLocalPokemon(pokemonFavs) {
    localStorage.setItem('pokemon', JSON.stringify(pokemonFavs));
  }

  useEffect(() => {
    saveLocalPokemon(favorites);
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
            favorites={favorites}
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
