import React, { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState("");
  const images = [
    "https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc",
    "https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9",
    "https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w",
    "https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc",
  ];

  const handleClick = (image) => {
    setSelected(image);
  };

  return (
    <div>
      <div className="w-full text-center font-bold text-xl underline">
        Click on a image
      </div>
      <div className="w-full h-full flex flex-wrap justify-center items-center">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClick(image)}
            className="w-56 h-56 mt-8 mr-4 ml-4 overflow-hidden rounded-lg shadow-md  transition-transform duration-400 ease-in-out transform hover:scale-110"
          >
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`cat ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {selected && (
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="text-xl font-bold">Selected Image</div>
          <div className="w-80 h-80 overflow-hidden flex justify-center items-center rounded-lg shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={selected}
              alt="Selected cat"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
