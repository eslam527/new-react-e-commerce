<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import style from './CatogrySlider.module.css'
import Slider from 'react-slick'
import axios from 'axios';

export default function CatogrySlider() {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500


  };
  

  const [category, setcategory] = useState([])
  async function getCategory() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setcategory(data?.data)
    console.log(data.data);

  }
  useEffect(() => {
    getCategory()
  }, [])



  category
  return (
    <>
    <h2 className='text-3xl  font-bold py-3 my-4'>shop puoler category</h2>
    <Slider {...settings}>
              {category?.map((category ,index) =>
              <div key={index}>
                 <img src={ category.image} className='w-full h-[200px]' alt="productImag" />
                 <h3 className='my-3 font-semibold'>{category.name}</h3>
              </div>
              )}
            </Slider>

      
    </>
  )
}
=======
import React, { useEffect, useState } from 'react'
import style from './CatogrySlider.module.css'
import Slider from 'react-slick'
import axios from 'axios';

export default function CatogrySlider() {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500


  };
  

  const [category, setcategory] = useState([])
  async function getCategory() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setcategory(data?.data)
    console.log(data.data);

  }
  useEffect(() => {
    getCategory()
  }, [])



  category
  return (
    <>
    <h2 className='text-3xl  font-bold py-3 my-4'>shop puoler category</h2>
    <Slider {...settings}>
              {category?.map((category ,index) =>
              <div key={index}>
                 <img src={ category.image} className='w-full h-[200px]' alt="productImag" />
                 <h3 className='my-3 font-semibold'>{category.name}</h3>
              </div>
              )}
            </Slider>

      
    </>
  )
}
>>>>>>> 4bd04e17803f649796db74775bc7235f22ecff85
