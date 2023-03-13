import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";


const RestaurantCard = (props) => {
  const[image,setImage]= useState({
    images:[],
  })
  return (
 <>
 <div className='w-full flex p-4 '>
 
 <Link to={`/restaurant/${props._id}/overview`}>
  <div className='bg-white w-full p-4 h-full rounded-2xl transition duration-500 ease-in-out sm:shadow-md md:shadow-none hover:drop-shadow-lg'>
    <div className='w-full h-full flex '>
     <div className='w-80 flex'>
        <div className='flex flex-col gap-2 items-start w-80'>
          {props.isPro &&(
            <span className='bg-zomato-400 text-white px-2 py-1 rounded text-sm'>
              Pro extra 10% off
            </span>
          )}
          {props.isOff &&(
            <span className='bg-blue-600 text-white px-2 py-1 rounded text-sm'>
            $250 off
          </span>
          )}

        <div className="my-2 flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-medium">{props.name}</h4>
              <span className="bg-green-800 text-white text-sm p-1 gap-3 rounded flex items-center">
                {props.restaurantReviewValue} <AiTwotoneStar />
              </span>
            </div>
            <div className="flex items-center justify-between text-gray-500 gap-10">
              <p className="truncate text-ellipsis overflow-hidden w-3/4">
                {props.cuisine.join(", ")}
              </p>
              <p className="w-3/4 text-right">₹ {props.averageCost} for one</p>
            </div>
            </div>
      </div>
    </div>
  </div>
  </div>
 </Link>
 </div>
 </>
  )
}

export default RestaurantCard