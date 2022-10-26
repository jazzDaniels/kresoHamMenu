import React from "react";

import { Box } from "../components/Box.js";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box
            key={idx}
            value={value}
            onClick={() => value === null && onClick(idx)}
          />
        );
      })}
    </div>
  );
};
