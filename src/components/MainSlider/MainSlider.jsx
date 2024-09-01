import React, { useState } from 'react'
import style from './MainSlider.module.css'
import img1 from '../../assets/slider-image-1.jpeg'
import img2 from '../../assets/slider-image-2.jpeg'
import img3 from '../../assets/slider-image-3.jpeg'
import Slider from 'react-slick'


export default function MainSlider() {



  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500


  };



  return (
    <>
      <h2 className='text-3xl  font-bold py-3 my-4'>MainSlider</h2>
      <div className="flex">
      <div className="w-3/4">

      <Slider {...settings}>
            <img src={img1} className='h-[400px]' alt="img1" />
            <img src={img2} className='h-[400px]' alt="img2" />
            <img src={img3} className='h-[400px]' alt="img3" />
      </Slider>
      </div>

      <div className="w-1/4">
          <img src={img3} className='h-[200px]' alt="img1" /><img src={img1} className='h-[200px]' alt="img2" />
          </div>
        </div>

    </>
  )
}
