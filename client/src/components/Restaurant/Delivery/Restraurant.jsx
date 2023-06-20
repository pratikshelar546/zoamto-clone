import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from "react-redux"
import { getRestaurant } from '../../../redux/reducers/Restraurants/RestaurantAction';
import RestaurantCard from '../../RestaurantCard';
import { getMenuList } from '../../../redux/reducers/menu/MenuAction';


const Restraurant = (props) => {
  const [restaurantList,setRestaurantList] = useState([]);  
  const dispatch = useDispatch();
//  console.log(props.title);
  // const restro = useSelector((state)=>state.restaurants);

  // useEffect(()=>{
  // setRestaurantList(dispatch(getRestaurant()))
  // },[])
  // useEffect(() => {
  //   if (reduxState) {
  //     setRestaurantList(reduxState);
  //   }
  // }, [reduxState]);
  // useEffect(() => {
  //  setRestaurantList(reduxState);
  // }, [reduxState]);
 
  useEffect(() => {
    dispatch(getRestaurant()).then((data)=>{
      // console.log("data", data.payload[0].cuisine);
      setRestaurantList(Object.values(data.payload));
    });
  }, [dispatch]);
  // console.log("dlis",restaurantList);

    return (
    <>
   
    <div className='w-full justify-center flex max-w-7xl'>
    <div className='grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3'>
    { props.title ?restaurantList.map((restaurant)=>{
         
      return(
        restaurant.cuisine.map((cuisine)=>{
     
          
         return(
          // console.log(cuisine)
          props.title === cuisine? <RestaurantCard {...restaurant} key={restaurant._id} />:null
          // props.title === cuisine ? console.log(cuisine) :console.log("no")
         )
        })
      )
    }) :
    restaurantList.map((restaurant) => (
      
      <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
    </div>
    </div>
    </>
  )
}

export default Restraurant