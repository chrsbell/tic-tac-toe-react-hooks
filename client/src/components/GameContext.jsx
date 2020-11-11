import React, { createContext } from 'react';

const Constants = {
  emptyBoard: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

// deep copy the board
const clone = (items) => items.map((item) => (Array.isArray(item) ? clone(item) : item));

const initialGameState = {
  score: { playerOne: 0, playerTwo: 0 }, // score of both players
  turn: 1, // either player 1 or player 2's turn
  win: false,
  board: clone(Constants.emptyBoard),
  reset: false,
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
    case 'win':
      return {
        ...state,
        win: action.win,
      };
    case 'reset':
      return {
        ...state,
        reset: action.reset,
      };
    case 'board':
      return {
        ...state,
        board: action.board,
      };
  }
};

export const GameContext = createContext();
export { Constants, initialGameState, reducer };
