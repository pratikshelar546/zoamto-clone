import React from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from './Arrow';
import TopBrandCaouselCard from './TopBrandCaouselCard';

const TopBrandCaousel = () => {
    const Brands =[
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp",
            name:"McDonald's",
            Time:"18 Min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png?output-format=webp",
            name:"La Pino'z Pizza",
            Time:"18 Min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png?output-format=webp",
            name:"Subway",
            Time:"13 Min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png?output-format=webp",
            name:"Burger King",
            Time:"20 Min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png?output-format=webp",
            name:"KFC",
            Time:"39 Min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
            name:"Pizza Hut",
            Time:"39 Min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/3c2a7f7e5fc15add88437a4891a7c229_1675833518.png?output-format=webp",
            name:"The Belgian Waffle Co.",
            Time:"27 Min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/9c390005a3b36e2f209b5868d536973f_1639679267.png?output-format=webp",
            name:"Meraki",
            Time:"28 min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/dc25345966698c3077d648ecf3c5b3d1_1643349213.png?output-format=webp",
            name:"BOX8 - Desi Meals",
            Time:"30 Min"
        },
        {
            images:"https://b.zmtcdn.com/data/brand_creatives/logos/0a9a5179d8be286ecab6a9b40f9ed880_1666095095.png?output-format=webp",
            name:"1441 Pizzeria",
            Time:"22 Min"
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
 <div className='p-5 '>
    <div className='flex text-3xl font-zomato font-medium p-5'>
        <h1>Top brands for you</h1>
    </div>
    <Slider {...settingCast}>
{Brands.map((brand,index)=>(
    <TopBrandCaouselCard key={index} {...brand}/>
))}
    </Slider>
 </div>
 </>
  )
}

export default TopBrandCaousel