import React, { Fragment } from "react";
import { AiOutlineInfoCircle, AiTwotoneStar } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineDirections } from "react-icons/md";
import { BiShare } from "react-icons/bi";
import { Tab } from "@headlessui/react";
import Overview from "./Overview";
import Footer from "../home/Footer";
import OrderOnline from "./OnlineOrder/OrderOnline";




const RestaurnatInfo = (props) => {

  return (
    <>
      <section className="mt-1 mx-auto relative max-w-7xl">
        <div className="relative">
          {/* images */}

          <section className="relative">
            <div className="w-full h-height text-zomato-200 p-4 justify-center flex flex-row gap-2">
              <div className="w-3/5 relative max-sm:mt-8 max-sm:w-full cursor-pointer overflow-hidden h-full hover:shadow">
                <img
                  src={"http://localhost:8081/" + props.images}
                  alt={props.name}
                  className="w-full h-full object-cover transform-none will-change-transform filter transition duration-500 ease-in-out "
                />
              </div>
              <div className="md:flex w-1/5 cursor-pointer overflow-hidden max-sm:hidden relative">
                <div className="flex gap-2 w-full flex-col h-full">
                  <img
                    src={"http://localhost:8081/" + props.images}
                    alt={props.name}
                    className="flex h-1/2 w-full object-cover"
                  />
                  <img
                    src={"http://localhost:8081/" + props.images}
                    alt={props.name}
                    className="flex h-1/2 w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:flex w-1/5 cursor-pointer overflow-hidden relative max-sm:hidden">
                <div className="relative h-full">
                  <img
                    src={"http://localhost:8081/" + props.images}
                    alt={props.name}
                    className="flex h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* info */}
          
              <div className="relative bg-white">
                <div className="top-0  z-30 sticky bg-white overflow-hidden -scroll-mb-2">
              <div className="flex relative w-full p-2 text-gray-700 justify-between items-center">
                <h1 className="text-4xl items-center ">{props.name}</h1>
                <section className="flex">
                  <div className="flex items-center cursor-pointer">
                    <div className="bg-green-800 text-white text-sm p-1 gap-3 rounded">
                      {props.restaurantReviewValue} 
                      <AiTwotoneStar size="1.5em" />
                    </div>
                    <div className="p-2 ml-1 items-center">
                      <h2>{props.restaurantReviewValue}</h2>
                      <p className="text-sm font-extralight">Dining Reviews</p>
                    </div>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <div className="bg-green-800 text-white text-sm p-1 gap-3 rounded">
                      {props.restaurantReviewValue} 
                      <AiTwotoneStar size="1.5em" />
                    </div>
                    <div className="p-2 ml-1 items-center">
                      <h2>{props.restaurantReviewValue}</h2>
                      <p className="text-sm font-extralight">
                        Dilivery Reviews
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <section className="relative p-2">
                <div className="flex flex-col">
                  <h1 className="text-gray-500 font-thin text-xl">
                    {props.cuisine &&props.cuisine.join(", ")}
                  </h1>
                  <h1 className="text-gray-400 font-thin text-xl">
                    {props.mapLocation}
                  </h1>
                </div>
              </section>
              <section>
                <div className="flex">
                  <h1 className="font-zomato text-zomato-400 mr-4">Open now</h1>
                  <h1 className="font-thin text-lg text-gray-400">
                    {props.restaurantTiming}
                  </h1>
                  <div className="ml-2 text-gray-400">
                    <AiOutlineInfoCircle size="1em" />
                  </div>
                </div>
              </section>
              <section className="relative">
                <div className=" flex flex-row gap-2">
                  <div className="border border-gray-300 w-max px-1 rounded-lg cursor-pointer hover:bg-gray-100">
                    <button className="flex flex-row p-2 text-gray-500 text-lg font-zomato font-thin items-center gap-1">
                       
                      <MdOutlineDirections
                        size="1.3em"
                        className="text-zomato-300"
                      /> 
                      Direction
                    </button>
                  </div>
                  <div className="border border-gray-300 w-max px-1 rounded-lg cursor-pointer hover:bg-gray-100">
                    <button className="flex flex-row p-2 text-gray-500 text-lg font-zomato font-thin items-center gap-1">
                       
                      <FaRegBookmark
                        size="1em"
                        className="text-zomato-300"
                      /> 
                      Bookmark
                    </button>
                  </div>
                  <div className="border border-gray-300 w-max px-1 rounded-lg cursor-pointer hover:bg-gray-100">
                    <button className="flex flex-row p-2 text-gray-500 text-lg font-zomato font-thin items-center gap-1">
                       
                      <BiShare
                        size="1.5em"
                        className="text-zomato-300 -scale-x-90"
                      /> 
                      Share
                    </button>
                  </div>
                </div>
              </section>
              </div>
              {/* modal */}
              <section>
                <div>
                  <Tab.Group as="div" className="p-3" defaultIndex={1}>
                    <div className="sticky top-48 bg-white z-30">
                    <Tab.List
                      as="div"
                      className="gap-9 flex text-xl text-gray-500 font-extralight h-16 items-center border-b-2 font-zomato mb-5"
                    >
                      <Tab
                        as={Fragment}
                        className="flex justify-center h-full px-7 items-center outline-none cursor-pointer"
                      >
                        {({ selected }) => (
                          <button
                            className={
                              selected
                                ? " text-zomato-400 border-b-2 border-zomato-300"
                                : "bg-white text-gray-400"
                            }
                          >
                            Overview
                          </button>
                        )}
                      </Tab>
                      <Tab
                        as={Fragment}
                        className="flex justify-center h-full px-7 items-center outline-none cursor-pointer"
                      >
                        {({ selected }) => (
                          <button
                            className={
                              selected
                                ? " text-zomato-400 border-b-2 border-zomato-300"
                                : "bg-white text-gray-400"
                            }
                          >
                            Order Online
                          </button>
                        )}
                      </Tab>
                      <Tab
                        as={Fragment}
                        className="flex justify-center h-full px-7 items-center outline-none cursor-pointer"
                      >
                        {({ selected }) => (
                          <button
                            className={
                              selected
                                ? " text-zomato-400 border-b-2 border-zomato-300"
                                : "bg-white text-gray-400"
                            }
                          >
                            Reviews
                          </button>
                        )}
                      </Tab>
                      <Tab
                        as={Fragment}
                        className="flex justify-center h-full px-7 items-center outline-none cursor-pointer"
                      >
                        {({ selected }) => (
                          <button
                            className={
                              selected
                                ? " text-zomato-400 border-b-2 border-zomato-300"
                                : "bg-white text-gray-400"
                            }
                          >
                            Photos
                          </button>
                        )}
                      </Tab>
                      <Tab
                        as={Fragment}
                        className="flex justify-center h-full px-7 items-center outline-none cursor-pointer"
                      >
                        {({ selected }) => (
                          <button
                            className={
                              selected
                                ? " text-zomato-400 border-b-2 border-zomato-300"
                                : "bg-white text-gray-400"
                            }
                          >
                            Menu
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                      </div>
                    <Tab.Panels>
                      <Tab.Panel><Overview {...props}/></Tab.Panel>
                      <Tab.Panel><OrderOnline{...props}/></Tab.Panel>
                      <Tab.Panel>Content 3</Tab.Panel>
                      <Tab.Panel>Content 4</Tab.Panel>
                      <Tab.Panel>Content 5</Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </section>
            </div>
            
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default RestaurnatInfo;
