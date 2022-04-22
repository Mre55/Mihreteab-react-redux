import React from 'react'

import DetailPage from './DetailPage'

const HomePage = () => {

  return (
    <div className='flex flex-col items-center h-screen mt-20'>
      
      <div className='flex w-full gap-x-20 justify-center'>
        <h4>Product Category</h4>
        <div className='border-2 w-32 flex justify-center'>Laptops</div>
      </div>

     <div className='flex gap-x-12 justify-center w-full'>
      <div className='flex flex-col items-center mt-12 rounded w-full bg-gray-100 w-2/12 p-8 h-full'>
        <div className='w-full border-2 border-gray-300 h-36 flex justify-center items-center'>
          Img
        </div>
        <div className='w-full mt-4 flex flex-col items-center'>
          <ul>
            <li>Name: </li>
            <li>Model: </li>
            <li>Price: </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center mt-12 rounded w-full bg-gray-100 w-2/12 p-8 h-full'>
        <div className='w-full border-2 border-gray-300 h-36 flex justify-center items-center'>
          Img
        </div>
        <div className='w-full mt-4 flex flex-col items-center'>
          <ul>
            <li>Name: </li>
            <li>Model: </li>
            <li>Price: </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center mt-12 rounded w-full bg-gray-100 w-2/12 p-8 h-full'>
        <div className='w-full border-2 border-gray-300 h-36 flex justify-center items-center'>
          Img
        </div>
        <div className='w-full mt-4 flex flex-col justify-center items-center'>
          <ul>
            <li>Name: </li>
            <li>Model: </li>
            <li>Price: </li>
          </ul>
        </div>
      </div>
     </div> 

      {/* <DetailPage /> */}
    </div>
  )
}

export default HomePage