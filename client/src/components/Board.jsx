import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell.jsx';
import { Constants, GameContext } from './GameContext.jsx';
import _ from 'underscore';

const Board = () => {
  const { dispatch, gameState } = useContext(GameContext);

  useEffect(() => {
    console.table(gameState.board);
    // check if finished resetting the board, then update the store
    if (gameState.reset && _.isEqual(gameState.board, Constants.emptyBoard)) {
      dispatch({ type: 'reset', reset: false });
      dispatch({ type: 'win', win: false });
    }
  }, [gameState.board]);

  return [...Array(3).keys()].map((i) => {
    return (
      <div key={i * 4}>
        <Cell row={i} column={0} key={i * 4 + 1} />
        <Cell row={i} column={1} key={i * 4 + 2} />
        <Cell row={i} column={2} key={i * 4 + 3} />
      </div>
    );
  });
};

export default Board;
