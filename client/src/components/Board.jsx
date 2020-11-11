import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell.jsx';

const Board = () => {
  return [...Array(3).keys()].map((index) => {
    return (
      <div key={index * 4}>
        <Cell key={index * 4 + 1} />
        <Cell key={index * 4 + 2} />
        <Cell key={index * 4 + 3} />
      </div>
    );
  });
};

export default Board;
