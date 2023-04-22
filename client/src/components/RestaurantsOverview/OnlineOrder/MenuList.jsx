import React from 'react'
import MenuItems from './MenuItems'

const MenuList = (props) => {
    // console.log(props);
  return (
    <>
   
     <section name={props.name} className="relative h-fit pb-2 " >
      <h1 className='text-2xl font-semibold text-gray-600'>{props.name}</h1>
               {
                props?.items?.map((each,index)=>{
                  return(
                   
                    <MenuItems {...each} key={index}/>
                  )
                })
               }
              </section>
    </>
  )
}

export default MenuList