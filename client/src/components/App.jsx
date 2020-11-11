import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import { GameContext, initialGameState, reducer } from './GameContext.jsx';

const App = () => {
  const [gameState, dispatch] = useReducer(reducer, initialGameState);
  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <GameContext.Provider value={{ gameState, dispatch }}>
        <Board />
      </GameContext.Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
