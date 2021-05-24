import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PokeCard, BasicLayout } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPokemon } from '../../api/fetch';
import { faHeart as faHeartOutlined } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

export const CardPage = ({
  pokemon,
  favorites,
  setFavorite,
  deleteFavorite,
}) => {
  const [pokemonData, setPokemonData] = useState();
  const [isLike, setIsLike] = useState(false);
  const [foundPokemon, setFoundPokemon] = useState('Loading...');

  function handleSetLike(pokemonID) {
    setIsLike(!isLike);
    if (isLike) {
      setIsLike(!isLike);
      deleteFavorite(pokemonID);
    } else {
      setFavorite(pokemonData);
      localStorage.setItem('pokemon', JSON.stringify([pokemonData]));
    }
  }

  useEffect(() => {
    (async () => {
      const currentPokemon = JSON.parse(localStorage.getItem('currentPokemon'));
      const response = await getPokemon(currentPokemon);
      if (!response) {
        setFoundPokemon('Pokemon Not Found');
      } else {
        setPokemonData(response);
      }
    })();
  }, [pokemon]);

  useEffect(() => {
    (async () => {
      if (favorites) {
        const token = await JSON.parse(localStorage.getItem('pokemon'));
        if (pokemonData) {
          token.some((favoritePokemon) => favoritePokemon.id === pokemonData.id)
            ? setIsLike(true)
            : setIsLike(false);
        }
      }
    })();
  }, [pokemonData, favorites]);

  return (
    <BasicLayout>
      {pokemonData ? (
        <WrapperCard>
          <TopCard PokemonColorType={pokemonData.types[0].type.name}>
            <HeartContainer onClick={() => handleSetLike(pokemonData.id)}>
              {isLike ? (
                <FontAwesomeIcon
                  icon={faHeartSolid}
                  style={{
                    position: 'absolute',
                    fontSize: '1.5em',
                    color: 'white',
                    right: '5%',
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartOutlined}
                  style={{
                    position: 'absolute',
                    fontSize: '1.5em',
                    color: 'white',
                    right: '5%',
                    zIndex: '1',
                  }}
                />
              )}
            </HeartContainer>
          </TopCard>
          <BottomCard>
            <PokeCard
              pokemon={pokemon}
              pokemonData={pokemonData}
              setPokemonData={setPokemonData}
            />
          </BottomCard>
        </WrapperCard>
      ) : (
        <h1>{foundPokemon}</h1>
      )}
    </BasicLayout>
  );
};

const WrapperCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  height: 450px;
  width: 350px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const TopCard = styled.div`
  position: absolute;
  background-color: ${({ PokemonColorType }) =>
    (PokemonColorType === 'bug' && '#A8B820') ||
    (PokemonColorType === 'dark' && '#7C4A16') ||
    (PokemonColorType === 'dragon' && '#603986') ||
    (PokemonColorType === 'electric' && '#FFD700') ||
    (PokemonColorType === 'fairy' && '#F8B2E7') ||
    (PokemonColorType === 'fighting' && '#8E3931') ||
    (PokemonColorType === 'fire' && '#F05030') ||
    (PokemonColorType === 'flying' && '#B280D2') ||
    (PokemonColorType === 'ghost' && '#43275D') ||
    (PokemonColorType === 'grass' && '#137C15') ||
    (PokemonColorType === 'ground' && '#E0C068') ||
    (PokemonColorType === 'ice' && '#728EF0') ||
    (PokemonColorType === 'normal' && '#A8A878') ||
    (PokemonColorType === 'poison' && '#A040A0') ||
    (PokemonColorType === 'psychic' && '#D05D7A') ||
    (PokemonColorType === 'rock' && '#745600') ||
    (PokemonColorType === 'shadow' && '#F45987') ||
    (PokemonColorType === 'steel' && '#B8B8D0') ||
    (PokemonColorType === 'water' && '#A9DEf2') ||
    '#9BE5DC'};
  top: 0;
  width: 100%;
  height: 50%;
  border-radius: 20px 20px 0 0;
`;

const BottomCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  height: 75%;
  width: 100%;
  border-radius: 0 0 20px 20px;
  border-top: 4px solid black;
`;

const HeartContainer = styled.div`
  position: relative;
  margin-top: 5%;
`;
