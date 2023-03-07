import React from 'react'
import Collections from '../components/home/Collections'
import DownloadApp from '../components/home/DownloadApp'
import Footer from '../components/home/Footer'
import HomeNav from '../components/NavBar/HomeNav'
import Location from '../components/home/Location'
import WeOffer from '../components/home/WeOffer'

const HomeLayout =(Component)=>({...props}) => {
  
  return (
    <>
    <HomeNav/>
    <WeOffer />
    <Collections/>
    <Location/>
    <DownloadApp/>
    <Footer/>
    <Component {...props}/>
    </>
  )
}

export default HomeLayout