import React, { useContext, useEffect, useState } from 'react'
import style from './AllOrders.module.css'
import Loader from '../loader/loader.jsx'
import { CartContext } from '../context/CartContext.jsx'
export default function AllOrders() {

let {removeCart,setCart,cart,getCart}=useContext(CartContext)
useEffect(()=>{
  removeCart()
},[])
// useEffect(() => {
//   if(cart == null){
//     getCart()
  
//   }else{
//     setCart([])
//   }
//     }, [])
useEffect(()=>{
  document.title = 'All Orders';
},[])

  return (
    <>
    <h2 className='text-2xl'>AllOrders</h2>
    <div className='flex justify-center items-center h-screen'><Loader/></div>
    </>
  )
}
