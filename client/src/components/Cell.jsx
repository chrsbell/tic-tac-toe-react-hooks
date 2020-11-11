import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GameContext } from './GameContext.jsx';

const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  border: 2px solid #969696;
  background: #d9dbda;
  margin: 10px;
`;

const Cell = () => {
  const { dispatch, gameState } = useContext(GameContext);

  const onClick = () => {
    dispatch({ type: 'score', score: { playerOne: 1, playerTwo: 2 } });
  };

  return <Container onClick={onClick}>{` `}</Container>;
};

export default Cell;
