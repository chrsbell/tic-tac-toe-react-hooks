import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GameContext } from './GameContext.jsx';

const Container = styled.div`
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  border: 2px solid #969696;
  background: #d9dbda;
`;

const Cell = () => {
  const { dispatch, gameState } = useContext(GameContext);
  const [innerText, setInnerText] = useState(' ');

  const onClick = () => {
    // change the player's turn
    setInnerText(gameState.turn === 1 ? 'X' : 'O');
    dispatch({ type: 'turn', turn: gameState.turn === 1 ? 2 : 1 });
  };

  return <Container onClick={onClick}>{innerText}</Container>;
};

export default Cell;
