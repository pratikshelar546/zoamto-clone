import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from "react-redux"
import { getRestaurant } from '../../../redux/reducers/Restraurants/RestaurantAction';
import RestaurantCard from '../../RestaurantCard';


const Restraurant = (props) => {
  const [restaurantList,setRestaurantList] = useState([]);
  const dispatch = useDispatch();
 
  const restro = useSelector((state)=>state.restaurants);

  useEffect(()=>{
    dispatch(getRestaurant())
  },[])
  // useEffect(() => {
  //   if (reduxState) {
  //     setRestaurantList(reduxState);
  //   }
  // }, [reduxState]);
  // useEffect(() => {
  //  setRestaurantList(reduxState);
  // }, [reduxState]);
 
  // useEffect(() => {
  //   dispatch(getRestaurant()).then((data)=>{
  //     setRestaurantList((prev)=>({
  //       ...prev,
  //       ...data.payload.restaurant
  //     }))
  //   })
  // })
  

  console.log("restaurant",restro);

  // const restaurantList =[{
  //     _id: "124ksjf435245jv34fg3",
  //     isPro: true,
  //     isOff: true,
  //     name: "Nathu's Sweets",
  //     restaurantReviewValue: "3.7",
  //     cuisine: [
  //       "Mithai",
  //       "South Indian",
  //       "Chinese",
  //       "Street Food",
  //       "Fast Food",
  //       "Desserts",
  //       "North Indian",
  //     ],
  //     averageCost: "450",
  //   },
  //   {
  //     _id:  "sdffdsadadsfadfadsfadsf",
  //     isPro: true,
  //     isOff: false,
  //     name: "Master Koii's",
  //     restaurantReviewValue: "4.6",
  //     cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
  //     averageCost: "600",
  //   },
  //   {
  //     _id: "124ksjf435245jfdfv34fg3",
  //     isPro: true,
  //     isOff: true,
  //     name: "Nathu's Sweets",
  //     restaurantReviewValue: "3.7",
  //     cuisine: [
  //       "Mithai",
  //       "South Indian",
  //       "Chinese",
  //       "Street Food",
  //       "Fast Food",
  //       "Desserts",
  //       "North Indian",
  //     ],
  //     averageCost: "450",
  //   }]
    
    return (
    <>
    <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
    Order food online in Mumbai
    </h1>
    <div className='w-full justify-center flex max-w-6xl'>
    <div className='grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3'>
    {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
    </div>
    </div>
    </>
  )
}

export default Restraurant