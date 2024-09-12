import React, { useContext, useEffect, useState } from 'react'
import style from './RecentProducts.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext.jsx'
import { WishListContext } from '../context/WishListContext.jsx'
export default function RecentProducts({ product }) {
 let {addToWishList,wishIlstItems}=useContext(WishListContext)
  let { addToCart, getCart ,cart,setCart} = useContext(CartContext)
  
  useEffect(() => {
      getCart()
    
    
      }, [wishIlstItems])
  return (
    <>
      <div className=" w-1/2 md:w-1/3 lg:w-1/6 product px-2 py-4 mb-5 rounded-md">
        {/* في سؤال ليه كانت بتعمل not fount مع المسار العادي "productdetails" */}
        {/* في سؤال ليه كانت بتعمل not fount مع المسار العادي "productdetails/${product.id}/" */}
        <Link to={`/productdetails/${product.id}/`}>
          <div className=''>
            <img src={product.imageCover} alt={product.title} />
            <h2 className='text-main text-sm'>{product.category.name}</h2>
            <h2 className='font-medium'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
            <div className="flex justify-between my-1">
              <h3>{product.price}EGP</h3>
              <h3 className="" >

              <i className='fa fa-star rating rating-color'></i> {product.ratingsAverage}</h3>
            </div>
          </div>
        </Link>
        <div className='text-center'>     
        <i onClick={(e)=>addToWishList(product.id,e)} className="fa-solid fa-heart cursor-pointer  fa-2x btn"></i>        </div>

        <button className='btn w-full text-white bg-main rounded-md' onClick={() => addToCart(product.id)}>add to cart</button>


      </div>
    </>
  )
}
