import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import data from "./data.json";
import categoryData from "./categories.json";
import laptop from "../assets/LaptopImg.jpeg";
import mobile from "../assets/MobileImg.png";

const HomePage = () => {

  let categories = [...categoryData];

  let [category, setCategory] = useState("Laptops");

  const laptopsData = data.filter((item) => item.categoryId === 0);
  const mobilesData = data.filter((item) => item.categoryId === 1);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="flex flex-col items-center h-screen max-w-[50%]">
      <div className="flex flex-col md:flex-row justify-evenly items-center shadow-md w-full py-8">
        <h4 className="font-bold text-xl">Product Category</h4>
        <div className="border-2 w-48 flex justify-center py-1">
          <select
            onChange={handleCategoryChange}
            className="active:bg-white focus:outline-none focus:ring focus:ring-white"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-x-12 justify-center w-full flex-wrap">
        {category === "Laptops"
          ? laptopsData.slice(0, 6).map((item) => (
              <NavLink
                to={`/detailview/${item.id}`}
                className="flex flex-col flex-wrap items-center border mt-12 rounded w-full w-2/12 p-8 hover:shadow-2xl min-w-[210px]"
                id={item.id}
                key={item.id}
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
            ))
          : mobilesData.slice(0, 4).map((item) => (
              <NavLink
                to={`/detailview/${item.id}`}
                className="flex flex-col flex-wrap items-center border mt-12 rounded w-full w-2/12 p-8 hover:shadow-2xl min-w-[210px]"
                id={item.id}
                key={item.id}
              >
                <div className="w-full h-36 flex justify-center items-center">
                  <img src={mobile} alt="product" />
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
