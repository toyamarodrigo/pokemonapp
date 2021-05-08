import React from 'react';
import styled from 'styled-components';
import POKEMON_BACKGROUND from '../../images/pokemon-background.png';

export const BasicLayout = (props) => {
  return <Layout>{props.children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  background-image: url(${POKEMON_BACKGROUND});
`;
