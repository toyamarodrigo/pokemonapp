import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import POKEMON_BACKGROUND from '../../images/pokemon-background.png';
import POKEMON_LOGO from '../../images/pokemon-logo.png';

export const HomePage = ({ setPokemon }) => {
  // const [storePokemon, setStorePokemon] = useState(() => {
  //   JSON.parse(window.localStorage.getItem('pokemon'));
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('pokemon', JSON.stringify(state));
  // }, [state]);

  const history = useHistory();

  const handleSearchClick = () => {
    history.replace('/card');
  };

  const handleInputChange = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <Home width="20px">
      <Wrapper>
        <PokemonLogo src={POKEMON_LOGO} alt="pokemon-logo" />
        <input
          type="search"
          style={{ marginBottom: '20px' }}
          onChange={handleInputChange}
        />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Search</button>
          <button>Random</button>
        </ButtonsWrapper>
      </Wrapper>
    </Home>
  );
};

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url(${POKEMON_BACKGROUND});
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const PokemonLogo = styled.img`
  width: 350px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  button {
    color: white;
    padding: 10px;
    font-weight: 600;
    background-color: red;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all ease-out 0.3s;

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }

    &:first-of-type {
      width: 70%;
    }

    &:last-of-type {
      width: 30%;
    }
  }
`;
