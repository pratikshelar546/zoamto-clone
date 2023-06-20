import React from 'react'
import Tabs from '../components/Restaurant/Tab'
import RestaurantLayout from '../layouts/RestaurantLayout'

const Restaurant= (props) => {

  return (
   <>
   <Tabs {...props} />
   </>
  )
}

export default  RestaurantLayout(Restaurant)