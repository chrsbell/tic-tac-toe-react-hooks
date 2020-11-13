import React, { useState, useEffect, useContext } from 'react';
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

const Cell = ({ row, column }) => {
  const { dispatch, gameState } = useContext(GameContext);
  const [innerText, setInnerText] = useState(' ');

  const setBoardCell = (symbol) => {
    // shallow copy the board to update the store
    let newBoard = [...gameState.board];
    newBoard[row][column] = symbol;
    dispatch({ type: 'board', board: newBoard });
  };

  // clear the cell on game reset
  useEffect(() => {
    if (gameState.reset) {
      setBoardCell(null);
      setInnerText(' ');
    }
  }, [gameState.reset]);

  // set the cell's symbol
  const onClick = () => {
    if (!gameState.win) {
      console.log(gameState.turn);
      let symbol = gameState.turn === 1 ? 'X' : 'O';
      setBoardCell(symbol);
      setInnerText(symbol);
    }
  };

  return <Container onClick={onClick}>{innerText}</Container>;
};

export default Cell;
