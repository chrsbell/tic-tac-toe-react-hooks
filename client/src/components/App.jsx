import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import { GameContext, initialGameState, reducer } from './GameContext.jsx';

const App = () => {
  // reducer for game logic
  const [gameState, dispatch] = useReducer(reducer, initialGameState);

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <GameContext.Provider value={{ gameState, dispatch }}>
        {/* Win Message */}
        {gameState.win ? (
          <>
            <h2>{`Player ${gameState.turn} won!`}</h2>
            <button
              onClick={() => {
                dispatch({ type: 'reset', reset: true });
              }}
            >
              Reset Game
            </button>
          </>
        ) : null}
        <Board />
      </GameContext.Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
