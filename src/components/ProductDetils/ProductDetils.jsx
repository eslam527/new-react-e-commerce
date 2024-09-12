import React, { act, useContext, useEffect, useState } from 'react'
import style from './ProductDetils.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Slider from 'react-slick'
import Loader from '../loader/loader.jsx';
import { CartContext } from '../context/CartContext.jsx';
export default function ProductDetils() {
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

  let x = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500


  };

  let { addToCart,getCart,cart } = useContext(CartContext)
  let { id } = useParams()
  // console.log(id);
  const [ProductDetils, setProductDetils] = useState({})
  const [relatedProudcts, setRelatedProudcts] = useState([])
  async function getProductDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setProductDetils(data.data)
    // setRelatedProudcts(data.data.category._id)
    getRelatedProduct(data.data?.category._id)
    // console.log(data.data);
    console.log(data.data.category._id);

  }
  async function getRelatedProduct(categortId) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`, {
      params: {
        'category': categortId
      }
    })
    // infinty loop
    // console.log(data.data);
    setRelatedProudcts(data.data)
  }
  useEffect(()=>{
    document.title = 'Product Detils';
  },[])

  useEffect(() => {
    getProductDetails(id)
  }, [id])
useEffect(()=>{},[cart])
useEffect(()=>{getCart()},[])

  {ProductDetils.images?.length > 0 ? (
    ProductDetils.images.map((image, index) => (
      <img src={image} key={index} className='w-full' alt="productImage" />
    ))
  ) : (
    <img src={ProductDetils.imageCover} className='w-full' alt="productImage" />
  )}


  return (
    <>
      <h2 className='text-3xl  font-bold py-3'>ProductDetils</h2>
      {ProductDetils ? <>
        <div className="flex flex-col md:flex-row items-center space-x-2 ">
          <div className="w-full md:w-3/12">
            {
              ProductDetils?.images?.length > 1 ? <Slider {...settings}>
                {ProductDetils.images.map((image, index) => (
                  <img src={image} key={index} className='w-full' alt="productImage" />))}
              </Slider>:
             <img src={ProductDetils.imageCover} className='w-full' alt="productImage" /> 

          }


          </div>
          <div className="w-full md:w-9/12 info px-2">
            <div >
              <h3>{ProductDetils.title}</h3>
              <p className='text-sm text-gray-400 my-2'>{ProductDetils.description}</p>
              {/* why '?' */}
            </div> <h3>{ProductDetils.category?.name} </h3>

            <div className="flex justify-between my-1">
              <h3>{ProductDetils.price}EGP</h3>
              <h3 className="rating rating-color" ><i className='fa fa-star'></i> {ProductDetils.ratingsAverage}</h3>
            </div>
            <button onClick={() => addToCart(ProductDetils.id)} className='btn flex-grow-0 w-full bg-main my-4 py-2 text-white rounded-md'>add to cart</button>

          </div>

        </div>
        <h2 className='text-3xl  font-bold my-3'>related Product</h2>
        <div className="w-2/3 mx-auto ">
          <Slider {...x} className='text-center w-full' >
            {relatedProudcts?.map((product, index) => {
              return <>
                <div className=" p-4 product px-2 py-4 mb-5 rounded-md ">
                  {/* في مشكله */}
                  <Link to={`/productdetails/${product.id}`} >
                    <div className='w-full'  key={index}>
                      <img src={product.imageCover} alt={product.title} />
                      <h2 className='text-main text-sm'>{product.category.name}</h2>
                      <h2 className='font-medium'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                      <div className="flex justify-between my-1">
                        <h3>{product.price}EGP</h3>
                        <h3 className="rating rating-color" ><i className='fa fa-star'></i> {product.ratingsAverage}</h3>
                      </div>
                    </div>
                  </Link>
{/* في مشكلة */}
                  <button onClick={() => addToCart(ProductDetils.id)} className='btn w-full flex-grow-0 text-white bg-main hidden md:block rounded-md'>add to cart</button>


                </div>


              </>

            })}
          </Slider>
        </div>
      </>

        :
        <div className="flex h-screen justify-center items-center">
          <Loader />
        </div>

      }

    </>
  )
}
