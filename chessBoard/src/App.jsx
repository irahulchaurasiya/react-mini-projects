// import React, { useState } from "react";

// const gridSize = 8;

// function App() {
//   const [selectedTile, setSelectedTile] = useState(null);

//   function colorDiagonally(e) {
//     const target = e.target;
//     setSelectedTile({
//       row: Number(target.dataset.row),
//       col: Number(target.dataset.col),
//     });
//   }

//   function renderGrid() {
//     const grid = [];
//     for (let row = 0; row < gridSize; row++) {
//       const columns = [];
//       for (let col = 0; col < gridSize; col++) {
//         let className = "h-10 w-10"; // Tailwind classes for height and width

//         // Conditional styling based on selected tile
//         if (selectedTile) {
//           if (col % 2 === row % 2) {
//             className += " bg-white"; // White box
//           } else {
//             className += " bg-black"; // Black box
//           }

//           if (
//             row - col === selectedTile.row - selectedTile.col ||
//             row + col === selectedTile.row + selectedTile.col
//           ) {
//             className += " bg-red-500";
//           }

//           if (row === selectedTile.row && col === selectedTile.col) {
//             className += " bg-red-500";
//           }
//         }

//         columns.push(
//           <button
//             key={`${row}-${col}`}
//             className={className}
//             data-row={row}
//             data-col={col}
//             onClick={colorDiagonally}
//           />
//         );
//       }
//       grid.push(
//         <div key={row} className="flex">
//           {columns}
//         </div>
//       ); // Flexbox for rows
//     }
//     return grid;
//   }

//   return (
//     <>
//       <p>Click on any cell to color diagonally</p>
//       <div>{renderGrid()}</div>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";

const gridSize = 8;

function App() {
  const [selectedTile, setSelectedTile] = useState(null);
  const [classNames, setClassNames] = useState(
    Array(gridSize)
      .fill()
      .map(() => Array(gridSize).fill("h-10 w-10 bg-black"))
  );

  function colorDiagonally(e) {
    const target = e.target;
    console.log(target.dataset.row);
    console.log(target.dataset.col);

    const row = Number(target.dataset.row);
    const col = Number(target.dataset.col);

    setSelectedTile({ row, col });

    const newClassNames = Array(gridSize)
      .fill()
      .map(() => Array(gridSize).fill("h-10 w-10 bg-black"));

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (r === row && c === col) {
          newClassNames[r][c] = "h-10 w-10 bg-red-500";
        } else if (r - c === row - col || r + c === row + col) {
          newClassNames[r][c] = "h-10 w-10 bg-red-500"; 
        } else {
          newClassNames[r][c] =
            c % 2 === r % 2 ? "h-10 w-10 bg-white" : "h-10 w-10 bg-black";
        }
      }
    }

    setClassNames(newClassNames);
  }

  function renderGrid() {
    const grid = [];
    for (let row = 0; row < gridSize; row++) {
      const columns = [];
      for (let col = 0; col < gridSize; col++) {
        columns.push(
          <button
            key={`${row}-${col}`}
            className={classNames[row][col]}
            data-row={row}
            data-col={col}
            onClick={colorDiagonally}
          />
        );
      }
      grid.push(
        <div key={row} className="flex">
          {columns}
        </div>
      );
    }
    return grid;
  }

  return (
    <>
      <p>Click on any cell to color diagonally</p>
      <div>{renderGrid()}</div>
    </>
  );
}

export default App;
