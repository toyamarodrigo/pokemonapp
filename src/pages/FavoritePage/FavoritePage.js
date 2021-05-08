import React, { useState } from 'react';
import styled from 'styled-components';
import { BasicLayout, PokeCardItem } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartOutlined } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

export const FavoritePage = ({ pokemon, setPokemon, favorites }) => {
  const [isLike, setIsLike] = useState(true);

  function handleSetLike(id) {
    setIsLike(!isLike);
  }

  return (
    <BasicLayout>
      {favorites ? (
        favorites.map((e, id) => (
          <WrapperCard key={id}>
            <TopCard>
              <HeartContainer onClick={handleSetLike}>
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
              <PokeCardItem pokemonData={e} />
            </BottomCard>
          </WrapperCard>
        ))
      ) : (
        <h1>No Favorites Pokemons</h1>
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
  background-color: #cc0000;
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
