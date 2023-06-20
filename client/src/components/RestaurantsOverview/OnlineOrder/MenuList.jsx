import React, { useState } from 'react'
import MenuItems from './MenuItems'

const MenuList = (props) => {
  const checked = "veg";


  return (
    <>
   
     <section name={props.name} className="relative h-fit pb-2 " >
      <h1 className='text-3xl font-medium text-gray-600'>{props.name}</h1>
               {
                props?.items?.map((each,index)=>{
                  console.log(each.category);
                  
                  // console.log(each.isVeg);
                  // setIsVeg(each.isVeg);
                  // {props.checked === each.isVeg ?  <MenuItems {...each} key={index}/> : <MenuItems {...each} key={index}/>}
                  
                  // {checked === each.category ? retu <MenuItems {...each} key={index}/>:null }
                  return(
                    <MenuItems {...each} key={index}/>
                  )
                })
              }
              <hr className='text-gray-500  bg-gray-500 '/>
              </section>
    </>
  )
}

export default MenuList