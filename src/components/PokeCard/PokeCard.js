import { useEffect } from 'react';
import styled from 'styled-components';
import { getPokemon } from '../../api/fetch';

export const PokeCard = ({ pokemon, pokemonData, setPokemonData }) => {

  useEffect(() => {
    (async () => {
      const response = await getPokemon(pokemon);
      return setPokemonData(response);
    })();
  }, [pokemon]);

  return (
    <>
      {pokemonData ? (
        <PokemonBodyContainer>
          {/* Pokemon Image */}
          <PokemonImage
            src={pokemonData.sprites.front_default}
            alt="pokemon image"
          />

          {/* Pokemon Order & Name */}
          <PokemonNameContainer>
            <span>#{pokemonData.order}</span>
            <h3>{pokemonData.name}</h3>
          </PokemonNameContainer>

          {/* Pokemon HP, ATK, DF, SP & Type */}
          <PokemonInfo>
            <PokemonStatsContainer>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexDirection: 'column',
                  textAlign: 'justify',
                }}
              >
                <h3>{`HP: ${pokemonData.stats[0].base_stat}`}</h3>
                <h3>{`ATK: ${pokemonData.stats[1].base_stat}`}</h3>
                <h3>{`DF: ${pokemonData.stats[2].base_stat}`}</h3>
                <h3>{`SP: ${pokemonData.stats[3].base_stat}`}</h3>
              </div>
            </PokemonStatsContainer>
            <PokemonTypesContainer>
              {pokemonData.types.map((pokemon, i) => (
                <span key={i}>
                  <img
                    src={`https://veekun.com/dex/media/types/en/${pokemon.type.name}.png`}
                    alt="badge-pokemon-type"
                  />
                </span>
              ))}
            </PokemonTypesContainer>
          </PokemonInfo>

          {/* Pokemon Base EXP, Height & Weight */}
          <PokemonStatsContainer>
            <div>
              <PokemonSquareStat>
                <h3>{pokemonData.base_experience}</h3>
              </PokemonSquareStat>

              <PokemonSquareTitle>
                <h3>Base Exp.</h3>
              </PokemonSquareTitle>
            </div>

            <div>
              <PokemonSquareStat>
                <h3>{pokemonData.height / 10}mt</h3>
              </PokemonSquareStat>

              <PokemonSquareTitle>
                <h3>Height</h3>
              </PokemonSquareTitle>
            </div>

            <div>
              <PokemonSquareStat>
                <h3>{pokemonData.weight / 10}kg</h3>
              </PokemonSquareStat>

              <PokemonSquareTitle>
                <h3>Weight</h3>
              </PokemonSquareTitle>
            </div>
          </PokemonStatsContainer>
        </PokemonBodyContainer>
      ) : (
        <PokemonBodyContainer>
          <PokemonNameContainer>
            <span>?</span>
            <h3>?</h3>
          </PokemonNameContainer>

          {/* Pokemon HP, ATK, DF, SP & Type */}
          <PokemonInfo>
            <PokemonStatsContainer>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexDirection: 'column',
                  textAlign: 'justify',
                }}
              >
                <h3>{`HP: ???`}</h3>
                <h3>{`ATK: ???`}</h3>
                <h3>{`DF: ???`}</h3>
                <h3>{`SP: ???`}</h3>
              </div>
            </PokemonStatsContainer>
            <PokemonTypesContainer>
              <span>
                <img
                  src={`https://veekun.com/dex/media/types/en/unknown.png`}
                  alt="badge-pokemon-type"
                />
              </span>
            </PokemonTypesContainer>
          </PokemonInfo>

          {/* Pokemon Base EXP, Height & Weight */}
          <PokemonStatsContainer>
            <div>
              <PokemonSquareStat>
                <h3>???</h3>
              </PokemonSquareStat>

              <PokemonSquareTitle>
                <h3>Base Exp.</h3>
              </PokemonSquareTitle>
            </div>

            <div>
              <PokemonSquareStat>
                <h3>???</h3>
              </PokemonSquareStat>

              <PokemonSquareTitle>
                <h3>Height</h3>
              </PokemonSquareTitle>
            </div>

            <div>
              <PokemonSquareStat>
                <h3>???</h3>
              </PokemonSquareStat>

              <PokemonSquareTitle>
                <h3>Weight</h3>
              </PokemonSquareTitle>
            </div>
          </PokemonStatsContainer>
        </PokemonBodyContainer>
      )}
    </>
  );
};

const PokemonImage = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  background-color: white;
  border: 4px solid black;
  border-radius: 50%;
  top: -15%;
`;

const PokemonBodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  border-radius: 0 0 20px 20px;
  width: 100%;
`;

const PokemonNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  text-transform: capitalize;
`;

const PokemonInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const PokemonTypesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
  > span {
    img {
      height: 20px;
      width: auto;
    }
  }
`;

const PokemonStatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  > div {
    text-align: center;
    > h3 {
      font-size: 10px;
    }
  }
`;

const PokemonSquareStat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  width: 100px;
  h3 {
    font-size: 14px;
  }
`;

const PokemonSquareTitle = styled.div`
  margin-top: 10px;
  h3 {
    font-size: 10px;
  }
`;
