import * as React from 'react';
import { BiRightArrow } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import {FaRegCopy,FaDirections} from "react-icons/fa"
import { Link } from "react-router-dom";
// import { Dialog } from '@headlessui/react'
import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../home/Footer";
// import RestaurantLayout from "../../layouts/RestaurantLayout";
import { getSpecificRestaurant } from "../../redux/reducers/Restraurants/RestaurantAction";
import RestroSlider from "./Slider/RestroSlider";
// import RestaurnatInfo from "./RestaurnatInfo";
// google map
import {useLoadScript,GoogleMap} from "@react-google-maps/api"
const google = window.google;
const Overview = (props) => {
  const [restaurant, setRestaurant] = useState({ cuisine: [] });
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id);\
  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      // console.log("data ", data.payload);
      setRestaurant(data.payload);
    });
  }, [dispatch, id]);
  // let [isOpen, setIsOpen] = useState(false)
  //   console.log(restaurant);

  const {isLoded} = useLoadScript({
  googleMapsApiKey:"AIzaSyALR1DzKPg7CGGmm5RvJfWcGs-g0bahbQg",
  
  }) 
  
  return (
    <>
      <main>
        <section className="w-full">
          <div className=" flex flex-row  ">
            <div className="relative w-4/6  font-zomato">
              <div className="">
                <div className="flex  px-5">
                  <h1 className="text-4xl font-light text-gray-800">
                    About this place
                  </h1>
                </div>
                {/* buttons modal insertion remaaing */}
                <div className="w-full flex flex-row px-5 py-4 gap-4">
                  <button className="relative flex outline-none w-1/3 shadow h-20 p-5 rounded-xl">
                    <div className="relative flex flex-row">
                      <div className="flex relative">
                        {" "}
                        <img
                          src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png"
                          alt="sanitized"
                          className="w-12 h-12 shadow rounded-full"
                        />
                      </div>
                      <div className="flex relative flex-col">
                        {" "}
                        <h2 className="text-gray-400 font-extralight text-xs">
                          RESTAURANT SAFETY MEASURE
                        </h2>
                        <h2 className="text-gray-600 font-extralight text-sm">
                          Well Sanitized Kitchen
                        </h2>
                      </div>
                    </div>
                  </button>
                  <button className="relative flex outline-none w-1/3 shadow h-20 p-5 rounded-xl">
                    <div className="relative flex flex-row">
                      <div className="flex relative">
                        {" "}
                        <img
                          src="https://b.zmtcdn.com/data/o2_assets/fa7443fb81df3ff2c54186672599c3db1585754076.png"
                          alt="hand wash"
                          className="w-12 h-12  rounded-full"
                        />
                      </div>
                      <div className="flex relative flex-col">
                        {" "}
                        <h2 className="text-gray-400 font-extralight text-xs">
                          RESTAURANT SAFETY MEASURE
                        </h2>
                        <h2 className="text-gray-600 font-extralight text-sm">
                          Rider Hand Wash
                        </h2>
                      </div>
                    </div>
                  </button>
                  <button className="relative flex outline-none w-1/3 shadow h-20 p-5 rounded-xl">
                    <div className="relative flex flex-row">
                      <div className="flex relative">
                        {" "}
                        <img
                          src="https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png"
                          alt="temp"
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                      <div className="flex relative flex-col">
                        {" "}
                        <h2 className="text-gray-400 font-extralight text-xs">
                          RESTAURANT SAFETY MEASURE
                        </h2>
                        <h2 className="text-gray-600 font-extralight text-sm ">
                          Daily Temp. Checks
                        </h2>
                      </div>
                    </div>
                  </button>
                </div>
                <section className="relative w-full p-5 justify-between flex">
                  <div>
                    <h1 className="text-2xl font-light text-gray-700">Menu</h1>
                    <div>
                      <img
                        src={"http://localhost:8081/" + props.images}
                        alt={props.name}
                        className="w-48 h-56 object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center p-4 w-auto h-auto">
                    {" "}
                    <Link className="text-zomato-500 mr-5 flex text-lg">
                      see all menus <BiRightArrow size="1em" />
                    </Link>
                  </div>
                </section>
                <section className="relative w-full flex">
                  <div className="p-4 text-gray-700">
                    <h1 className="font-medium text-2xl">Cuisines </h1>
                    <div className="flex flex-row gap-3 p-2 w-24">
                      {restaurant?.cuisine.map((cuisineName, index) => (
                        <span
                          key={index}
                          className="border border-gray-400 text-lg font-light text-zomato-200 px-4 py-1 rounded-full"
                        >
                          {cuisineName}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="p-5">
                  <h1 className="text-2xl font-medium text-gray-600">
                    People Say This Place Is Known For
                  </h1>
                  <p className="text-xl font-light text-gray-400 py-3 font-zomato">
                    Served Quickly, Good Music, Food Presentation, Wonderful
                    Presentation, Timely Service, Contactless Delivery
                  </p>
                  <h1 className="text-2xl font-medium text-gray-600">
                    Average Cost
                  </h1>
                  <p className="text-xl font-light text-gray-400 py-3 font-zomato">
                    ₹{restaurant.avrageCost} for two people (approx.)
                  </p>
                  <h2 className="text-lg font-light text-gray-400  font-zomato">
                    Cash and Cards accepted
                  </h2>
                  <h2 className="text-lg font-light text-gray-400  font-zomato">
                    Digital payments accepted
                  </h2>
                </section>
                <section className=" py-5">
                  <h1 className="text-2xl font-medium text-gray-600">
                    More Info
                  </h1>
                  <div className=" justify-between grid grid-cols-2">
                    <p className="flex flex-row text-lg font-light text-gray-400  font-zomato gap-2 mt-2">
                      <TiTick
                        className="rounded-full  border-2 border-green-700 text-green-700 "
                        size="1.5em"
                      />{" "}
                      breakfast
                    </p>
                    <p className="flex flex-row text-lg font-light text-gray-400  font-zomato gap-2 mt-2">
                      <TiTick
                        className="rounded-full  border-2 border-green-700 text-green-700 "
                        size="1.5em"
                      />{" "}
                      Home Delivery
                    </p>
                    <p className="flex flex-row text-lg font-light text-gray-400  font-zomato gap-2 mt-2">
                      <TiTick
                        className="rounded-full  border-2 border-green-700 text-green-700 "
                        size="1.5em"
                      />{" "}
                      Takeaway Available
                    </p>
                  </div>
                </section>
                {/* simillar restaurant */}
                <section className="relative max-w-6xl">
                  <RestroSlider />
                </section>
                {/* blogger */}
                <section className="relative p-5 ">
                  <div className="bg-gray-100 p-1 rounded-xl w-full">
                    <div className="p-4">
                      <h1 className="text-gray-700 font-zomato text-3xl">
                        {" "}
                        Are you a food blogger?
                      </h1>
                      <h2 className="text-base text-zomato-400 font-zomato">
                        Add a Zomato spoonback to your blog.
                      </h2>
                    </div>
                  </div>
                </section>
                {/* reviews */}
                <section className="">
                  <div className="w-full p-5">
                    <div>
                      <h1 className="text-2xl text-gray-700 font-zomato">Review Highlights</h1>
                     
                      <p className="border p-1 inline-flex m-2 border-gray-300  rounded-3xl py-2 px-5  text-gray-600 bg-gray-50 text-sm font-zomato ">Tasty Appetizers</p>
                      <p className="border p-1 inline-flex m-2 border-gray-300  rounded-3xl py-2 px-  text-gray-600 bg-gray-50 text-sm font-zomato ">Filling Food</p>
                      <p className="border p-1 inline-flex m-2 border-gray-300  rounded-3xl py-2 px-5  text-gray-600 bg-gray-50 text-sm font-zomato ">Great Veg Options</p>
                      <p className="border p-1 inline-flex m-2 border-gray-300  rounded-3xl py-2 px-5  text-gray-600 bg-gray-50 text-sm font-zomato ">Mouth Watering Food</p>
                      <p className="border p-1 inline-flex m-2 border-gray-300  rounded-3xl py-2 px-5  text-gray-600 bg-gray-50 text-sm font-zomato ">Healthy and Delicious</p>
                      <p className="border p-1 inline-flex m-2 border-gray-300  rounded-3xl py-2 px-5  text-gray-600 bg-gray-50 text-sm font-zomato "> Fresh Food with Good Quality</p>
                      
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="flex relative">
              <div className=" sticky top-64 z-10 h-fit overflow-hidden mb-5">
              <div className='shadow-sm mt-4 shadow-slate-500 border box-border rounded-xl w-96 '>
                {/* contact */}
                <section className="p-5">
                <h1 className="text-xl font-zomato text-gray-700 "> Call</h1>
                <h2 className="text-zomato-200 text-lg font-zomato ">{props.contactNumber}</h2>
                </section>
                {/* direction */}
                <section className="px-5">
                <div className="">
                  <h1 className="text-xl font-zomato text-gray-700 ">Direction</h1>
                  <div className='w-full h-full relative border '>
                    {/* map */}

                      {!isLoded?<h1>map</h1>:<GoogleMap  center={{lat:44, lng:-80}} zoom={12} mapContainerStyle={{width:"100%", height:"100%"}} ></GoogleMap>}
                  </div>
                  <h1 className="text-gray-600 text-base">{props.address}</h1>
                  <div className="gap-4 flex my-5">
                  <button className="outline-none text-gray-700 texy-base px-3 py-1 border border-gray-500 rounded-lg flex"><FaRegCopy className="m-1 text-gray-600" size="1em"/> copy</button>
                  <button className="outline-none text-gray-700 texy-base px-3 py-1 border border-gray-500 rounded-lg flex"><FaDirections className="m-1 text-zomato-400" size="1em"/>Direction</button>
                  </div>
                </div>
                </section>
              </div>
              </div>
            </div>
          </div>
          
        </section>
        <div className='relative '>
            <h1 className='text-lg font-zomato text-gray-600 py-3'>RELATED TO THE BELGIAN WAFFLE CO., LOWER PARE</h1>
            <p className='text-sm font-zomato text-gray-500'>Restaurants in Mumbai, Mumbai Restaurants, Lower Parel restaurants, Best Lower Parel restaurants, South Mumbai restaurants, Dessert Parlour in Mumbai, Dessert Parlour near me, Dessert Parlour in South Mumbai, Dessert Parlour in Lower Parel, in Mumbai, near me, in South Mumbai, in Lower Parel, in Mumbai, near me, in South Mumbai, in Lower Parel, The Belgian Waffle Co. Menu, Order food online in Lower Parel, Order food online in Mumbai, Order food online in South Mumbai, New Year Parties in Mumbai, Christmas' Special in Mumbai</p>
          </div>
        {/* <Footer/> */}
      </main>
    </>
  );
};

export default Overview;
