import React from 'react'
import RestroNav from '../components/NavBar/RestroNav'
import FiltersButton from '../components/Restaurant/FiltersButton'
import Tabs from '../components/Restaurant/Tab'

const RestaurantLayout =(Component)=> ({...props}) => {
  return (
   <>
   <RestroNav/>
   <Tabs {...props} />
   {/* <FiltersButton/> */}
   <Component {...props}/>
   </>
  )
}

export default RestaurantLayout