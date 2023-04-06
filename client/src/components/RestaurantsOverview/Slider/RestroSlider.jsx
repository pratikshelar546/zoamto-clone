import Slider from "react-slick";
import React from 'react'
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getRestaurant, getSpecificRestaurant } from '../../../redux/reducers/Restraurants/RestaurantAction';
import SliderCard from "./SliderCard";
import { NextArrow, PrevArrow } from "../../Restaurant/Delivery/Arrow";
import { useParams } from "react-router-dom";


const RestroSlider = (props) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurant()).then((data) => {
      // console.log("data", data);
      setRestaurantList(Object.values(data.payload));
    });
  }, [dispatch]);



  const [restaurants, setRestaurant] = useState({ cuisine: [] });
  const { id } = useParams();
  const dispatched = useDispatch();
  // console.log(id);\
  useEffect(() => {
    dispatched(getSpecificRestaurant(id)).then((data) => {
      // console.log("data ", data.payload);
      setRestaurant(data.payload);
    });
  }, [dispatched, id]);

  // restaurantList.map((restro)=>{

  //   const cuisines = restro.cuisine
  //   if(cuisines[0]  === restaurant.cuisine[0]){
  //     console.log("restaurant is", restro.name, "cuisine is", cuisines);
  //     return restro
  //   }else{
  //     console.log("not available");
  //   }
  // })

  //  restaurantList.map(({cuisine})=>{
  // //  const datacu= cuisine.map(([data])=> data);
  // //  console.log(datacu);
  // // const data = cuisine.lenght
  // //  console.log("from",cuisine[0],cuisine[1],cuisine[3] );
  // // console.log("all",cuisine);
  //   if (cuisine[0] === restaurant.cuisine[0]) {
  //   console.log(cuisine , restaurantList._id);
  //    } else {
  //     console.log("not found");
  //    }return cuisine
  //   })
  // console.log(cuisine.map(([data])=>data));
  // console.log(cuisine);
  // console.log(restaurant.cuisine);
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" p-2 justify-center ">
        <h2 className="text-gray-500 text-2xl "> Similar Restaurants </h2>
        <div className="relative w-auto">
          <Slider {...settings}>
            {
            restaurantList.map((restaurant) => {
              const cuisines = restaurant.cuisine;
              return(
                // if (cuisines[0] === restaurants.cuisine[0]) {
                //   <SliderCard {...restaurant} key={restaurant._id}/>
                //   // const filterRestro = Object.values(restaurant);
                //   console.log(restaurant.name);
                //   // return restaurant
                // } )
                cuisines[0] === restaurants.cuisine[0]? <SliderCard {...restaurant} key={restaurant._id}/>:console.log("npt")
              )
              
            })}
            {/* {restaurantList.map((restaurant)=>(
                    <SliderCard {...restaurant} key={restaurant._id}/>
                ))} */}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default RestroSlider