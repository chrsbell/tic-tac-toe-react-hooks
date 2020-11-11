import React, { useReducer, createContext } from 'react';

const initialGameState = {
  score: { playerOne: 0, playerTwo: 0 }, // score of both players
  turn: 1, // either player 1 or player 2's turn
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'score':
      return {
        ...state,
        score: action.score,
      };
    case 'turn':
      return {
        ...state,
        turn: action.turn,
      };
  }
};

export const GameContext = createContext();
export { initialGameState, reducer };
