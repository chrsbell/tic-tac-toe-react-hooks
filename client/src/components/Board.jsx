import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell.jsx';
import { Constants, GameContext } from './GameContext.jsx';
import _ from 'underscore';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
`;

const Board = () => {
  const { dispatch, gameState } = useContext(GameContext);

  const rowWin = (row) => {
    let symbol = gameState.board[row][0];
    return symbol && symbol === gameState.board[row][1] && symbol === gameState.board[row][2];
  };

  const anyRowWon = () => {
    for (let i = 0; i < 3; i++) {
      if (rowWin(i)) {
        return true;
      }
    }
    return false;
  };

  const columnWin = (column) => {
    let symbol = gameState.board[0][column];
    return symbol && symbol === gameState.board[1][column] && symbol === gameState.board[2][column];
  };

  const anyColumnWon = () => {
    for (let i = 0; i < 3; i++) {
      if (columnWin(i)) {
        return true;
      }
    }
    return false;
  };

  const anyDiagonalWon = () => {
    // main diagonal
    let symbol = gameState.board[0][0];
    if (symbol && symbol === gameState.board[1][1] && symbol === gameState.board[2][2]) {
      return true;
    }
    // minor diagonal
    symbol = gameState.board[2][0];
    return symbol && symbol === gameState.board[1][1] && symbol === gameState.board[0][2];
  };

  // check if a player won
  const playerWon = () => {
    return anyRowWon() || anyColumnWon() || anyDiagonalWon();
  };

  useEffect(() => {
    if (playerWon()) {
      // a player won
      dispatch({ type: 'win', win: true });
    } else {
      let boardIsEmpty = _.isEqual(gameState.board, Constants.emptyBoard);
      if (gameState.reset && boardIsEmpty) {
        dispatch({ type: 'reset', reset: false });
        dispatch({ type: 'win', win: false });
      } else if (!boardIsEmpty) {
        // change the player's turn if this isn't the initial side effect
        dispatch({ type: 'turn', turn: gameState.turn === 1 ? 2 : 1 });
      }
    }
    // check if finished resetting the board, then update the store
  }, [gameState.board]);

  return (
    <Container>
      {[...Array(3).keys()].map((i) => {
        return (
          <div key={i * 4}>
            <Cell row={i} column={0} key={i * 4 + 1} />
            <Cell row={i} column={1} key={i * 4 + 2} />
            <Cell row={i} column={2} key={i * 4 + 3} />
          </div>
        );
      })}
    </Container>
  );
};

export default Board;
