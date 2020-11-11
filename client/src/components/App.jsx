import React, { useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import { GameContext, initialGameState, reducer } from './GameContext.jsx';

const App = () => {
  const [gameState, dispatch] = createContext();
  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
