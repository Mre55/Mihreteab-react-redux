import React from "react";

import laptop from "../assets/LaptopImg.jpeg";

const DetailPage = (props) => {

  const { me } = props;

  console.log("props me is ", me);

  return (
    <div className='flex justify-center w-full h-screen'>
      <div className="flex rounded bg-gray-100 w-7/12 mt-20 p-12 h-4/6 gap-x-24 ">
        <div className="w-3/6 border-2 border-gray-200 h-4/6 flex justify-center items-center">
          <img src={laptop} alt="product" />
        </div>
        <div className="">
          <ul className="flex flex-col gap-y-8">
            <li>Product Name: </li>
            <li>Price: </li>
            <li>Description: </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
