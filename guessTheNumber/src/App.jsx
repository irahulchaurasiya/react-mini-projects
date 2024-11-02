import React, { useState } from "react";

const App = () => {
  const [value, setvalue] = useState();
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [result , setResult] = useState('');

  const generateRandomNum = () => Math.floor(Math.random() * 100) + 1;

  const handleReset = () => {
    setRandomNumber(generateRandomNum);
    setvalue('');
    setResult('');
  };

  const handleCheck = () => {

    const guess = parseInt(value,10);

    if(isNaN(guess) || guess > 100 || guess < 0){
      setResult('Please enter a valid number between 1 to 100');
      return;
    } 

    if(guess === randomNumber){
      setResult('Congratulations! You guessed it right.');
    }
    else if(guess < randomNumber){
      setResult('Too low! Try a higher number');
    }
    else{
      setResult('Too high! Try a lower number');
    }
  };
  return (
    <div>
      <header className="w-full text-center font-bold text-2xl shadow-md pt-4 pb-4">
        Guess the Number
      </header>
      <div className="flex flex-col justify-center items-center mt-4">
        <p className="text-xl">Guess a Number between 0 and 100</p>
        <input
          className="mt-2 border-2 border-gray-500 rounded-md shadow-md w-80 h-8"
          placeholder="guess a number"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <div>
          <button
            onClick={handleReset}
            className="w-24 p-1 border-2 border-gray-400 rounded-md shadow-md mr-2 mt-2"
            type="reset"
          >
            Reset
          </button>
          <button
            onClick={handleCheck}
            className="w-24 p-1 border-2 border-gray-400 rounded-md shadow-md ml-2"
          >
            Check
          </button>
        </div>
        {result && <p className="mt-4 text-lg font-bold">{result}</p>}
      </div>
    </div>
  );
};

export default App;
