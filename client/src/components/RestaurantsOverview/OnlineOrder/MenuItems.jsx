import React, { useState } from "react";
import ReactStars from "react-stars";
const MenuItems = (props) => {
    
  // console.log(props?.images);
//   console.log(props.description.length);
const [ readMore, setReadMore] = useState(true);
const toggelRead =()=>{setReadMore(!readMore)}
// console.log(props.index);

  return (
    <>
      <section className="relative" key={props.index}>
        <div className="flex flex-col justify-start p-3 my-3">
          <div className="flex flex-row ">
            
              <img
                src={"http://localhost:8081/" + props.images}
                className="w-44 h-44 object-cover rounded-md mr-4"
                alt={props.name}
              />
          
            <div className="relative">
              <div className="flex flex-col">
                <div className="">
                  <h1 className="text-2xl text-gray-600">{props.name}</h1>
                </div>
                <div className="flex flex-row items-center">
                  <ReactStars
                    count={5}
                    color2={"#ffd700"}
                    edit={false}
                    size={24}
                    value={3.5}
                  />
                  <label className="text-gray-500 text-base ml-2">
                    82 votes
                  </label>
                </div>
                <h1 className="text-base text-gray-500 font-normal">₹{props.price}</h1>
                {/* <h1 className="text-lg text-gray-500">{props.description}</h1> */}
                {/* here we use slice for break the description into 100 char and then used the readmore state to change the state to read more to read less */}
                <h1 className="text-base text-gray-500">{readMore ?props.description.slice(0,100) :props.description}</h1><span className="text-base text-gray-700" onClick={toggelRead}>{ props.description.length > 99 &&readMore ? "...read more" :null}</span>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default MenuItems;
