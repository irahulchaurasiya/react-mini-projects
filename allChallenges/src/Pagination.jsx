import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoinsData(response.data);
    }
    getData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const cureentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  const totalPost = coinsData.length;

  for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <h1 className="text-center mb-4">Crypto Gallery</h1>
      <div className="grid grid-cols-4 gap-6 m-8 mt-16">
        {cureentPosts.map((coin, index) => (
          <div key={index} className="mt-4 rounded-xl border-2 border-black">
            <div>
              <img src={coin.image} alt={coin.name} />
            </div>
            <div className="text-center font-bold">
              <h2>{coin.name}</h2>
              <h3>${coin.current_price.toLocaleString()}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        {pages.map((page, index) => (
          <button
            onClick={() => setCurrentPage(page)}
            className="rounded-md border-2 border-black p-2 ml-2 mr-2"
            key={index}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
