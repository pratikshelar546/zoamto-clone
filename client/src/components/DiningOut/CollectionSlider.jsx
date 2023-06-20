import React from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../Restaurant/Delivery/Arrow';
import CardCollection from './CardCollection';

const CollectionSlider = () => {
    const data =[
        {
            images:"https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg?output-format=webp",
            title:"Winners of Zomato Restaurant Awards",
            places:"17 places"
        },
        {
            images:"https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252747.jpg?output-format=webp",
            title:"16 Best insta-worthy place",
            places:"16 places"
        }, {
            images:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674824128.jpg?output-format=webp",
            title:"14 Romantic Dining places",
            places:"14 places"
        }, {
            images:"https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160968.png?output-format=webp",
            title:"15 Thrilling Lice cricket Screenings",
            places:"15 places"
        }, {
            images:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674823998.jpg?output-format=webp",
            title:"17 Serrene RoofTop places",
            places:"17 places"
        },
        {
            images:"https://b.zmtcdn.com/data/collections/b90a3bc172dab4f5befb3389950ffcab_1674824072.jpg?output-format=webp",
            title:"6 Unique Dinning Experiences",
            places:"6 places"
        },
        {
            images:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674824266.jpg?output-format=webp",
            title:"17 Serrene RoofTop places",
            places:"17 places"
        },
        {
            images:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674823998.jpg?output-format=webp",
            title:"14 Newly Opened Restaurants",
            places:"14 places"
        },
    ]
    const settingCast = {
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
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
              slidesToShow: 3,
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
    <section >
    <Slider {...settingCast}>
     
    {data.map((collections,index)=>{
       return(
       <CardCollection key={index} {...collections} />
       )
    })}
  
    </Slider>
    </section>
    </>
  )
}

export default CollectionSlider