import { useState } from "react";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [status, setStatus] = useState("Playing");
  const [Xwins, setXWins] = useState(0);
  const [Owins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [isNext, setIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);

    if (winner) {
      if (winner === "X") {
        setXWins(Xwins + 1);
        setStatus("X wins");
      } else {
        setOWins(Owins + 1);
        setStatus("O wins");
      }
    } else if (newBoard.every((cell) => cell !== null)) {
      setDraws(draws + 1);
      setStatus("It's a Draw!");
    } else {
      setIsNext(!isNext);
      setStatus(`Next Player: ${isNext ? "O" : "X"}`);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
    setStatus("Playing");
  };

  return (
    <div>
      <header className="w-full text-center text-2xl font-bold shadow-md pt-4 pb-4">
        Tic Tac Toe
      </header>
      <section className="flex flex-col justify-center items-center mt-4">
        <p className="text-2xl font-bold">Status: {status}</p>
        <div className="flex mt-4">
          <div className="flex flex-col items-center mr-4 ml-4 text-xl font-bold">
            <p>X</p>
            <p>{Xwins} wins</p>
          </div>
          <div className="flex flex-col items-center mr-4 ml-4  text-xl font-bold">
            <p>O</p>
            <p>{Owins} wins</p>
          </div>
          <div className="flex flex-col items-center mr-4 ml-4  text-xl font-bold">
            <p>=</p>
            <p>{draws} draws</p>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-8">
          {board.map((value, index) => (
            <button
              key={index}
              className="w-24 h-24 text-3xl font-bold text-center border border-gray-300  hover:bg-gray-200"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="p-2 text-xl mt-4 font-bold text-center rounded-md shadow-md bg-gray-200 hover:bg-gray-400 transition">
          <button onClick={resetGame} type="reset">
            Rematch
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
