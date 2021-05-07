import styled from 'styled-components';
import { PokeCard, BasicLayout } from '../../components';

export const CardPage = ({ pokemon }) => {
  return (
    <BasicLayout>
      <WrapperCard>
        <TopCard />
        <BottomCard>
          <PokeCard pokemon={pokemon} />
        </BottomCard>
      </WrapperCard>
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
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const TopCard = styled.div`
  position: absolute;
  background-color: #ff0000;
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
