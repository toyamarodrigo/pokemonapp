import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <a
            href="https://github.com/toyamarodrigo/pokemonapp"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  padding: 30px 20px;
  z-index: 1;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    li {
      width: 100%;
      text-align: center;
      margin: 0 15px;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: #cc0000;
        }
      }
    }
  }
`;
