import { useState } from "react";

const App = () => {
  const [rating, setRating] = useState(2);
  const [hoverRating, setHoveredRating] = useState(0);
  const stars = 5;

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <header>Star Rating</header>
      <div className="cursor-pointer" onMouseLeave={handleMouseLeave}>
        {[...Array(stars)].map((_, index) => (
          <span
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            key={index}
            className={`text-2xl 
          ${
            index < (hoverRating || rating)
              ? "text-yellow-500"
              : "text-gray-500"
          }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
