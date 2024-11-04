import React, { useState } from "react";

const gridSize = 8;

function App() {
  const [classNames, setClassNames] = useState(
    Array(gridSize)
      .fill()
      .map(() => Array(gridSize).fill("h-10 w-10 bg-black"))
  );

  function handleCellClick(row, col) {
    const newClassNames = Array(gridSize)
      .fill()
      .map(() => Array(gridSize).fill("h-10 w-10 bg-black"));

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (
          (r === row && c === col) ||
          r - c === row - col ||
          r + c === row + col
        ) {
          newClassNames[r][c] = "h-10 w-10 bg-red-500";
        } else {
          newClassNames[r][c] =
            c % 2 === r % 2 ? "h-10 w-10 bg-white" : "h-10 w-10 bg-black";
        }
      }
    }

    setClassNames(newClassNames);
  }

  return (
    <>
      <p>Click on any cell to color diagonally</p>
      <div>
        {Array(gridSize)
          .fill()
          .map((_, row) => (
            <div key={row} className="flex">
              {Array(gridSize)
                .fill()
                .map((_, col) => (
                  <button
                    key={`${row}-${col}`}
                    className={classNames[row][col]}
                    onClick={() => handleCellClick(row, col)}
                  />
                ))}
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
