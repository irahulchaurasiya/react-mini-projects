import React, { useEffect, useState } from "react";

const TrafficLights = () => {
  const trafficStates = {
    red: {
      backgroundColor: "red",
      duration: 5000,
      next: "green",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 2000,
      next: "red",
    },
    green: {
      backgroundColor: "green",
      duration: 3000,
      next: "yellow",
    },
  };

  const [currentColor, setCurrentColor] = useState(
    Object.keys(trafficStates)[0]
  );
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    const { duration, next } = trafficStates[currentColor];
    setSecondsLeft(duration / 1000);
    setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    const countDownInterval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(countDownInterval);
        return 0;
      });
    }, 1000);

    return () => {
      clearInterval(countDownInterval);
    };
  }, [currentColor]);

  return (
    <div>
      <div className="w-32 h-80 bg-black rounded-3xl flex flex-col items-center">
        {Object.keys(trafficStates).map((color) => (
          <div
            key={color}
            style={{
              backgroundColor:
                color === currentColor
                  ? trafficStates[color].backgroundColor
                  : "gray",
            }}
            className={`h-16 w-16 rounded-full m-4`}
          ></div>
        ))}
      </div>
      <div className="p-6">{secondsLeft} Seconds</div>
    </div>
  );
};

export default TrafficLights;
