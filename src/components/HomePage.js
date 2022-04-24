import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import laptopImg from "../assets/LaptopImg.jpeg";
import mobile from "../assets/MobileImg.png";

import { fetchProducts, changeCategory } from "../reducer/productReducer";

const HomePage = () => {

  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  const categories = useSelector((state) => state.categories);

  const categoryId = useSelector((state) => state.categoryId);

  useEffect(() => {
    fetchProducts(dispatch, categoryId);
  }, []);


  const handleCategoryChange = (e) => {
    handleCategoryId(e.target.value);
  };

  const handleCategoryId = (e) => {
    let categoryId = e === "Laptops" ? 0 : 1;
    changeCategory(categoryId, dispatch);
    fetchProducts(dispatch, categoryId);
  };

  return (
    <div className="flex flex-col items-center h-screen max-w-[50%]">
      <div className="flex flex-col md:flex-row justify-evenly items-center shadow-md w-full py-8">
        <h4 className="font-bold text-xl">
          Product Category
        </h4>

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
        {product.map((item) => (
          <NavLink
            to={`/detailview/${item.id}`}
            className="flex flex-col flex-wrap items-center border mt-12 rounded w-full w-2/12 p-8 hover:shadow-2xl min-w-[210px]"
            id={item.id}
            key={item.id}
          >
            <div className="w-full h-36 flex justify-center items-center">
              {item.categoryId === 0 ? 
                <img src={laptopImg} alt="product" />
               : 
                <img src={mobile} alt="product" />
              }
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
