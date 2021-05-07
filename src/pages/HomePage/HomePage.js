import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { BasicLayout } from '../../components';
import POKEMON_BACKGROUND from '../../images/pokemon-background.png';
import POKEMON_LOGO from '../../images/pokemon-logo.png';

export const HomePage = ({ pokemon, setPokemon }) => {
  // const [storePokemon, setStorePokemon] = useState(() => {
  //   JSON.parse(window.localStorage.getItem('pokemon'));
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('pokemon', JSON.stringify(state));
  // }, [state]);

  const history = useHistory();

  const handleSearchClick = () => {
    if (!pokemon || pokemon === '0') {
      handleRandomClick();
    }
    history.replace('/card');
  };

  const handleRandomClick = () => {
    const randomPokemon = Math.floor(Math.random() * 898) + 1;
    setPokemon(randomPokemon);
    history.replace('/card');
  };

  const handleInputChange = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <BasicLayout width="20px">
      <Wrapper>
        <PokemonLogo src={POKEMON_LOGO} alt="pokemon-logo" />
        <input
          type="search"
          style={{
            marginBottom: '20px',
            borderRadius: '5px',
            border: 'none',
            height: '30px',
            padding: '10px',
          }}
          onChange={handleInputChange}
        />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Search</button>
          <button onClick={handleRandomClick}>Random</button>
        </ButtonsWrapper>
      </Wrapper>
    </BasicLayout>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const PokemonLogo = styled.img`
  width: 350px;
  margin-bottom: 24px;
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
