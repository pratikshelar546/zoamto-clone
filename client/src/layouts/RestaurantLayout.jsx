import React from 'react'
import RestroNav from '../components/NavBar/RestroNav'

const RestaurantLayout =(Component)=> ({...props}) => {
  return (
   <>
   <RestroNav/>
   
   <Component {...props}/>
   </>
  )
}

export default RestaurantLayout

