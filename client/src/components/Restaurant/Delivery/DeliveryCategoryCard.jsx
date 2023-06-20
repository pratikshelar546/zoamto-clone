import React, { useState } from "react";

// const SmCard = ({ image, title }) => {
//   return (
//     <>
//       <div className="lg:hidden md:flex rounded-md w-full">
//         <div className="w-24 h-24">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-center rounded-full"
//           />
//         </div>
//         <div>
//           <h3 clclassName="text-sm my-1 text-center font-light">{title}</h3>
//         </div>
//       </div>
//     </>
//   );
// };

// const LgCard = ({ image, title }) => {
//   return (
    
//   );
// };

const DeliveryCategoryCard = (props) => {

  const clickHandler =()=>{
   
    props.getData(props.title)
  }
  // console.log(title);
  
  return (
    <>
  <>
      <div className="flex flex-col rounded-md w-full justify-center items-center">
        <div className="w-36 h-auto justify-center cursor-pointer" onClick={clickHandler}>
          <img
            className="w-full h-full object-center justify-center rounded-full"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div>
          <h3 className="text-xl text-center font-zomato font-thin">{props.title}</h3>
        </div>
      </div>
    </>
    </>
  );
};

export default DeliveryCategoryCard;
