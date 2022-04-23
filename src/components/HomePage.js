import React from "react";

import { NavLink } from "react-router-dom";
import data from "./data.json";
import laptop from "../assets/LaptopImg.jpeg";

const HomePage = () => {
  
  const handleClick = (e) => {
    // e.preventDefault();
    console.log("e is ", e);
    // <DetailPage id={e} />;
  };

  return (
    <div className="flex flex-col items-center h-screen mt-20">
      <div className="flex w-full gap-x-20 justify-center">
        <h4>Product Category</h4>
        <div className="border-2 w-32 flex justify-center">Laptops</div>
      </div>

      <div className="flex gap-x-12 justify-center w-full">
        {data.slice(0, 3).map((item) => (
          <NavLink
            to="/detailview"
            className="flex flex-col items-center border-2 border-[#d7d7d7] mt-12 rounded w-full w-2/12 p-8 h-full hover:bg-[#d7d7d7]"
            id={item.id}
            key={item.id}
            onClick={handleClick(item.id)}
          >
            <div className="w-full h-36 flex justify-center items-center">
              <img src={laptop} alt="product" />
            </div>
            <div className="w-full mt-4 flex flex-col">
              <ul>
                <li>Name: {item.name}</li>
                <li>Model: {item.model}</li>
                <li>Price: {item.price}</li>
              </ul>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
