import React from 'react'
import Slider from "react-slick";
import { NextArrow, PrevArrow } from './Arrow';
import DeliveryCategoryCard from './DeliveryCategoryCard';
const DeliveryCarousel = () => {
  const categories =[
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      title: "Burges",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
      title: "Thali",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title: "Paratha",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
      title: "Momos",
    },
  ]
  const settingCast = {
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className='p-5 bg-gray-50'>
      <div className='flex text-3xl font-zomato font-medium p-5'>
      <h1>Inspiration for your first order</h1>
      </div>
      <Slider {...settingCast}>
        {categories.map((food,index)=>(
           <DeliveryCategoryCard key={index} {...food} />
          )) }
          </Slider>
          </div>
    </>
  )
}

export default DeliveryCarousel