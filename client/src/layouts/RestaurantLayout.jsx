import React from 'react'
import RestroNav from '../components/NavBar/RestroNav'

import Tabs from '../components/Restaurant/Tab'

const RestaurantLayout =(Component)=> ({...props}) => {
  return (
   <>
   <RestroNav/>
   <Tabs {...props} />
   <Component {...props}/>
   </>
  )
}

export default RestaurantLayout