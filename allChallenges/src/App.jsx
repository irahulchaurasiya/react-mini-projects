import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import TrafficLights from "./TrafficLights";
import GridLights from "./GridLights";
import Accordian from "./Accordian";
import ColumnTable from "./ColumnTable";
import InfiniteScroll from "./InfiniteScroll";
import StringTransformers from "./StringTransformers";
import Pagination from "./Pagination";
import Carousel from "./Carousel";

const App = () => {
  const Home = () => {
    return (
      <div className="text-center mt-4">
        <h1>Welcome to the mini challenges</h1>
        <div className="flex flex-col align-center">
          <Link to="/traffic">
            <button className="p-1 text-lg border-2 border-black mt-2">
              Traffic Lights
            </button>
          </Link>
          <Link to="/gridLights">
            <button className="p-1 text-lg border-2 border-black mt-2">
              Grid Lights
            </button>
          </Link>
          <Link to="/accordian">
            <button className="p-1 text-lg border-2 border-black mt-2">
              Accordian
            </button>
          </Link>
          <Link to="/columnTable">
            <button className="p-1 text-lg border-2 border-black mt-2">
              columnTable
            </button>
          </Link>
          <Link to="/infiniteScroll">
            <button className="p-1 text-lg border-2 border-black mt-2">
              Infinite Scroll
            </button>
          </Link>
          <Link to="/stringTransformers">
            <button className="p-1 text-lg border-2 border-black mt-2">
              String Transformers
            </button>
          </Link>
          <Link to="/pagination">
            <button className="p-1 text-lg border-2 border-black mt-2">
              Pagination
            </button>
          </Link>
          <Link to="/carousel">
            <button className="p-1 text-lg border-2 border-black mt-2">
              Carousel
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/traffic" element={<TrafficLights />} />
            <Route path="/gridLights" element={<GridLights />} />
            <Route path="/accordian" element={<Accordian />} />
            <Route path="/columnTable" element={<ColumnTable />} />
            <Route path="/infiniteScroll" element={<InfiniteScroll />} />
            <Route
              path="/stringTransformers"
              element={<StringTransformers />}
            />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/carousel" element={<Carousel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
