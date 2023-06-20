import React from 'react'
import {Link} from "react-router-dom"
const CardCollection = (props) => {
  return (
    <>
    <section className='relative cursor-pointer p-3 flex-col w-full flex rounded-lg'>
        <Link to="/overview">
            <div className=' h-96 w-80 overflow-hidden relative max-w-full'>
                <img src={props.images} alt={props.title} className='h-full w-full object-cover rounded-lg' />
                <section className='top-0 absolute left-0 rounded h-full w-full bg-gradient-to-t from-gray-900 to-transparent'>
                    <section className='w-full absolute text-lg font-zomato font-medium bottom-1 flex flex-col text-white ml-4 pr-3'>
                        <h1>{props.title.length>28 ? props.title.slice(0,25)+ "...":props.title  }</h1>
                       <h1>{props.places}</h1>
                    </section>
                </section>
            </div>
        </Link>
    </section>
    </>
  )
}

export default CardCollection