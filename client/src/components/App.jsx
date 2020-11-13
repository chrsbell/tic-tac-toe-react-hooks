import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import { GameContext, initialGameState, reducer } from './GameContext.jsx';
import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${(props) => (props.minHeight ? props.minHeight : 0)}px;
`;

const App = () => {
  // reducer for game logic
  const [gameState, dispatch] = useReducer(reducer, initialGameState);

  return (
    <FlexColumn>
      <h1>Tic-Tac-Toe</h1>
      <GameContext.Provider value={{ gameState, dispatch }}>
        {/* Win Message */}
        {gameState.win ? (
          <>
            <FlexColumn minHeight={100}>
              <h2>{`Player ${gameState.turn} won!`}</h2>
              <button
                onClick={() => {
                  dispatch({ type: 'reset', reset: true });
                }}
              >
                Reset Game
              </button>
            </FlexColumn>
          </>
        ) : (
          <FlexColumn minHeight={100}></FlexColumn>
        )}
        <Board />
      </GameContext.Provider>
    </FlexColumn>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
