import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../Navbar';
import POKEMON_BACKGROUND from '../../images/pokemon-background.png';

export const BasicLayout = (props) => {
  return (
    <Layout>
      <Navbar />
      <CardLayout>{props.children}</CardLayout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  background-image: url(${POKEMON_BACKGROUND});
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 120px 0;
  height: auto;
  width: 100%;
`;
