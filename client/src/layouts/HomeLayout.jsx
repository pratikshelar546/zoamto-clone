import React from 'react'
import Collections from '../components/home/Collections'
import DownloadApp from '../components/home/DownloadApp'
import Footer from '../components/home/Footer'
import HomeNav from '../components/home/HomeNav'
import Location from '../components/home/Location'
import WeOffer from '../components/home/WeOffer'
const HomeLayout =(Component)=> ({...props}) => {
  return (
    <>
    <Component {...props}/>
    <HomeNav/>
    <WeOffer/>
    <Collections/>
    <Location/>
    <DownloadApp/>
    <Footer/>
    </>
  )
}

export default HomeLayout