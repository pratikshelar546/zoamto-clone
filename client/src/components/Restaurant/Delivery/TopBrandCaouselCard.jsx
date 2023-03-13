import React from 'react'

const TopBrandCaouselCard = (props) => {
  return (
    <>
    <div className='flex flex-col rounded-md w-full justify-center items-center'>
   <div className=''> <div className="w-36 h-auto justify-center ">
          <img
            className="w-full h-full object-center object-cover justify-center rounded-full"
            src={props.images}
            alt={props.name}
          />
        </div>
        </div>
        <div>
          <h3 className="text-xl text-center font-zomato font-thin">{props.name}</h3>
          <p className='text-sm text-center font-zomato font-thin'> {props.Time}</p>
        </div>
    </div>
    </>
  )
}

export default TopBrandCaouselCard