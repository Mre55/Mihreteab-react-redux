import React from "react";

import { useParams } from 'react-router-dom';

import laptop from "../assets/LaptopImg.jpeg";

import data from "./data.json";

const DetailPage = () => {

  const { currentData } = useParams();

  const currentDataObj = data.find(item => item.id === parseInt(currentData));

  return (
    <div className='flex justify-center w-full h-screen'>
      <div className="grid grid-col-2 grid-flow-col gap-8 rounded border w-7/12 mt-20 p-12 h-4/6 hover:shadow-2xl ">
        <div className="flex justify-center items-center">
          <img src={laptop} alt="product" />
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
  );
};

export default DetailPage;
