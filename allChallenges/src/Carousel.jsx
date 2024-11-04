import React, { useState } from "react";
import john1 from "./assets/john1.jpeg";
import john2 from "./assets/john2.jpeg";
import john3 from "./assets/john3.jpeg";
import john4 from "./assets/john4.jpeg";
import john5 from "./assets/john5.jpeg";
import john6 from "./assets/john6.jpeg";

const Carousel = () => {
  const slides = [
    {
      url: john1,
      title: "john1",
    },

    {
      url: john2,
      title: "john2",
    },
    {
      url: john3,
      title: "john3",
    },
    {
      url: john4,
      title: "john4",
    },
    {
      url: john5,
      title: "john5",
    },
    {
      url: john6,
      title: "john6",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlid = currentIndex === 0;
    const newIndex = isFirstSlid ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <div className="text-3xl font-bold text-center mb-4">Hello Carousel</div>
      <div style={{ width: "500px", height: "280px", margin: "0 auto" }}>
        <div style={{ height: "100%", position: "relative" }}>
          <div
            onClick={goToPrevious}
            className="absolute top-1/2 transform -translate-y-1/2 left-8 text-3xl text-white z-1 cursor-pointer"
          >{`<`}</div>
          <div
            onClick={goToNext}
            className="absolute top-1/2 transform -translate-y-1/2 right-8 text-3xl text-white z-1 cursor-pointer"
          >{`>`}</div>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${slides[currentIndex].url})`,
            }}
          ></div>

          <div className="flex , justify-center">
            {slides.map((slides, slideIndex) => (
              <div
                className="text-5xl mr-2 ml-2 cursor-pointer"
                onClick={() => goToSlide(slideIndex)}
                key={slideIndex}
              >
                •
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
