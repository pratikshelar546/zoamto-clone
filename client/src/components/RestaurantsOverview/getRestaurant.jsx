import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import RestaurantLayout from "../../layouts/RestaurantLayout";
import { getSpecificRestaurant } from "../../redux/reducers/Restraurants/RestaurantAction";
import RestaurnatInfo from "./RestaurnatInfo";
import RestroSlider from "./Slider/RestroSlider";
import Footer from "../home/Footer";

const Overview = () => {
  const [restaurant, setRestaurant] = useState({  });
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id);\
  useEffect(() => {
   dispatch(getSpecificRestaurant(id)).then((data)=>{
    // console.log("data ", data.payload);
    setRestaurant(data.payload)
     })
  },[dispatch, id]);
  // console.log("specifc",restaurant.name);

  return (
    <>
      <>
      
            <RestaurnatInfo {...restaurant}/>
            <Footer/>
            {/* <RestroSlider {...restaurant} /> */}
      </>
          
      
    </>
  );
};

export default RestaurantLayout(Overview);
