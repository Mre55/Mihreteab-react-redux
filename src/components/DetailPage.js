import React, { useEffect } from "react";

import { useParams, NavLink } from "react-router-dom";

import laptopImg from "../assets/LaptopImg.jpeg";
import mobile from "../assets/MobileImg.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducer/productReducer";

import closeIcon from "../assets/close-icon.jpeg";

const DetailPage = () => {

  const dispatch = useDispatch();

  const { currentData } = useParams();
  const product = useSelector((state) => state.product);

  const currentDataObj = product.find(
    (item) => item.id === parseInt(currentData)
  );
  const categoryId = useSelector((state) => state.categoryId);

  useEffect(() => {
   
    if (!product.length) {
      fetchProducts(dispatch, categoryId);
    }
  }, []);

  if (!currentDataObj) return null;

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex flex-col rounded border w-7/12 mt-20 p-12 h-fit hover:shadow-2xl ">
        <NavLink to={`/`} className='flex justify-end'>
          <div className="w-8">
            <img src={closeIcon} alt="product" />
          </div>
        </NavLink>

        <div className="flex flex-col gap-x-8 md:flex-row">

          <div className="flex justify-center items-center">
            {currentDataObj.categoryId === 0 ? (
              <img src={laptopImg} alt="product" />
            ) : (
              <img src={mobile} alt="product" />
            )}
          </div>
          <div className="mt-20">
            <ul className="flex flex-col gap-y-8">
              <li>Product Name: {currentDataObj.name} </li>
              <li>Price: {currentDataObj.price} </li>
              <li>Description: {currentDataObj.description} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
