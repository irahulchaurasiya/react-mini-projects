import { useState } from "react";

const ColumnTable = () => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const gridItems = [];
  for (let item = 1; item <= rows * cols; item++) {
    gridItems.push(item);
  }

  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="controls" style={{ display: "flex", margin: "1rem" }}>
        <label>
          Rows: {rows}
          <input
            type="range"
            min="2"
            max="8"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
          />
        </label>
        <label>
          Columns: {cols}
          <input
            type="range"
            min="2"
            max="8"
            value={cols}
            onChange={(e) => setCols(parseInt(e.target.value))}
          />
        </label>
      </div>

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${rows}, 60px)`,
          gridTemplateColumns: `repeat(${cols}, 60px)`,
          margin: "1rem",
        }}
      >
        {gridItems.map((item, index) => (
          <div className="text-xl border-2 border-black" id={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnTable;
