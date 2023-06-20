import React from 'react'
import CollectionSlider from './CollectionSlider'
import FiltersButton from "../Restaurant/FiltersButton"
import Restraurant from "../Restaurant/Delivery/Restraurant"
const Collections = () => {
 
  return (
    <>
    <section className='relative bg-gray-100 h-fit max-w-full '>
    <div className='relative mb-4'>
      <div className='px-7'>
        <h1 className='text-4xl text-gray-700'>Collections</h1>
      </div>
      <div className='px-7 mt-10'>
        <div className='flex flex-row justify-between'>
          <h2 className='text-xl text-gray-600 '>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</h2>
          <h2 className='text-xl text-zomato-300'>
          All collections in Mumbai
          </h2>
        </div>
        <div>
          <CollectionSlider/>
        </div>

      </div>
    </div>
    </section>
    <section> <FiltersButton/></section>
         <section className='relative mt-7 p-4'>
          <div>
            <h1 className='text-3xl text-gray-700'>Best Dining Restaurants near you in Worli</h1>
          </div>
          <section>
            <Restraurant/>
          </section>
         </section>
    
    </>
  )
}

export default Collections