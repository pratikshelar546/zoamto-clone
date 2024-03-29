import React, { useState } from "react";
import { Tab } from "@headlessui/react";

import FiltersButton from "./FiltersButton";
import DeliveryCarousel from "./Delivery/DeliveryCarousel";
import TopBrandCaousel from "./Delivery/TopBrandCaousel";
import Restraurant from "./Delivery/Restraurant";
import Footer from "../home/Footer";
import Index from "../DiningOut/Index";
import Collections from "../DiningOut/Collections";



const Tabs = (props) => {
  const [title,setTitle] = useState("")
  const pullData =(data)=>{
    setTitle(data);
    // console.log(title);
  }
// console.log(props);
  return (
    <>
      <div className="flex w-full shadow justify-center ">
        {/* <div className="shadow flex"> */}
        <div className="flex border-0  max-w-7xl ml-9 w-full mt-10 h-20">
            <div className="flex flex-col w-full">
          <Tab.Group defaultIndex={props.index}>
            <div >
        <Tab.List as="div" className="flex flex-row gap-20  border-gray-400 h-20" >
         <Tab as="h2" className="flex flex-row text-gray-600 focus:border-b-2 border-zomato-300 h-20  focus:text-zomato-300 outline-none ">
            <div>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt="Delivery" className="w-10"
              />
            </div>
            <div className="justify-center text-xl flex hover:cursor-pointer ">Delivery</div>
           
          </Tab>
         
          <Tab as="h2" className="flex flex-row text-gray-600 focus:border-b-2 border-zomato-300  focus:text-zomato-300 outline-none ">
            <div>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                alt="Dining Out" className="w-10"
              />
            </div>
            <div className="justify-center text-xl flex hover:cursor-pointer  p-2 ">Dining Out</div>
          </Tab>
          <Tab as="h2" className="flex flex-row text-gray-600 focus:border-b-2 border-zomato-300  focus:text-zomato-300 outline-none ">
            <div>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                alt="Nightlife" className="w-10"
              />
            </div>
            <div className="justify-center text-xl flex hover:cursor-pointer  p-2">Nightlife</div>
          </Tab>
        </Tab.List>
        {/* </div> */}
        
        
       </div>
       
       <Tab.Panels>
          <Tab.Panel>
            <FiltersButton title={title}/>
       <DeliveryCarousel newData={pullData}/>  
       <TopBrandCaousel/>  
       <h1 className='text-xl mt-4 mb-2 ml-7 md:mt-8 md:text-3xl md:font-semibold'>
    Order food online in Mumbai
    </h1>
       <Restraurant title={title} /> 
       </Tab.Panel>
          <Tab.Panel><Index/></Tab.Panel>
          <Tab.Panel><Collections/></Tab.Panel>
         
        </Tab.Panels>
        <Footer/>
      </Tab.Group>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Tabs;
