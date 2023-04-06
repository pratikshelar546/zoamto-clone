import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getSpecificRestaurant } from "../../../redux/reducers/Restraurants/RestaurantAction";

const SliderCard = (props) => {
// const getSpecificRestro =()=>{
// console.log(props._id);
// }
// console.log(props);
// const click =(e)=>{
// e.preventDefault();
// }
  return (
    <>
      <div className="w-full p-2 ">
        <Link to={`/restaurant/${props._id}/overview`} onClick="histoy.go(0);">
          <div className="bg-white w-full p-2 h-96 overflow-hidden rounded-2xl transition duration-500 ease-in-out sm:shadow-md md:shadow-none hover:drop-shadow-lg">
            <div className="w-full h-full flex ">
              <div className="w-full flex">
                <div className="flex flex-col gap-1 items-start w-72">
                  <div className="relative cursor-pointer bottom-2 w-full h-48">
                    <div className="relative overflow-hidden">
                      <img
                        src={"http://localhost:8081/" + props.images}
                        alt={props.name}
                        className="w-full h-48 rounded-2xl object-cover"
                      />
                    </div>
                    <div className="absolute bottom-1 left-2">
                      <span className="bg-blue-400 text-white px-2 py-1 rounded text-sm">
                       50% off up to 100
                      </span>

                      {props.isOff && (
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                          $250 off
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="my-2 flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-medium">{props.name}</h4>
                      <span className="bg-green-800 text-white text-sm p-1 gap-3 rounded flex items-center">
                        {props.restaurantReviewValue} <AiTwotoneStar />
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500 gap-10">
                      <p className="truncate text-ellipsis overflow-hidden w-3/4">
                        {props.popularDishes}
                      </p>
                      <p className="w-3/4 text-right">
                         {props.avrageCost} 
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-zomato font-normal text-gray-500">{props.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SliderCard;
