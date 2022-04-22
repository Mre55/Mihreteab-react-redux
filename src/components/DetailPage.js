import React from "react";

const DetailPage = () => {
  return (
    <div className='flex justify-center w-full h-screen'>
      <div className="flex rounded bg-gray-100 w-7/12 mt-20 p-12 h-4/6 gap-x-24 hover:bg-gray-300">
        <div className="w-3/6 border-2 border-gray-200 h-4/6 hover:bg-gray-600 flex justify-center items-center">
          Img
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
