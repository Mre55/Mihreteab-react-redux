import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import data from "./data.json";
import categoryData from "./categories.json";
import laptop from "../assets/LaptopImg.jpeg";

const HomePage = () => {

  let categories = [...categoryData];

  let [category, setCategory] = useState('Laptops')
  console.log('category is ', category);

  let laptopsData = data.filter(item => item.categoryId === 0);
  let mobilesData = data.filter(item => item.categoryId === 1);

  let handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className="flex flex-col items-center h-screen mt-20">
      <div className="flex w-full gap-x-20 justify-center">
        <h4>Product Category</h4>
        {category}
        <select onChange={handleCategoryChange}> 
          {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
        </select>
      </div>

      <div className="flex gap-x-12 justify-center w-full">
        { category === "Laptops" ? 
          laptopsData.slice(0, 3).map((item) => (
            <NavLink
              to="/detailview"
              className="flex flex-col items-center border mt-12 rounded w-full w-2/12 p-8 h-full hover:shadow-2xl"
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
        :
          mobilesData.slice(0, 3).map((item) => (
            <NavLink
              to="/detailview"
              className="flex flex-col items-center border mt-12 rounded w-full w-2/12 p-8 h-full hover:shadow-2xl"
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
        }
      </div>
    </div>
  );
};

export default HomePage;
