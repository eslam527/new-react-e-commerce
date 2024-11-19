import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import Loader from '../loader/loader.jsx'
import { Link } from 'react-router-dom'
export default function Cart() {

  let { getCart, cart, updateCart, removeCartItem, removeCart, setIsloading,setIsLoadingCart,isLoadingCart, isLoading } = useContext(CartContext)
  useEffect(() => {
    getCart()
  
    }, [])
  
    useEffect(()=>{
      document.title = 'Cart';
    },[])
  
  return (
    <>
{isLoading?<div className='flex justify-center items-center h-screen'><Loader/></div>
:

<>

{!cart ?
        <div className='flex justify-center items-center h-screen'>
          <h2 className='text-center text-main text-3xl my-10'>the cart is empty</h2>
        </div>
        :

        <div className='overflow-auto py-3'>
          <h2 className='text-center text-main text-3xl mt-10'>your cart</h2>
          <div className="relative overflow-x-auto my-5 w-3/4 mx-auto shadow-md sm:rounded-lg">
            <div className='flex justify-around items-center p-2 md:p-4 bg-slate-300  font-semibold'>
              <span>cart items:  {cart?.numOfCartItems}</span>
              <span>total: {cart?.data?.totalCartPrice}</span>
              <Link to={'/checkout'} className='text-white flex-grow-0  bg-green-700 hover:bg-green-600 py-2 px-4 btn font-medium rounded-md '>Check out</Link>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs hidden md:block  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className='flex justify-evenly w-full'>
                  <th scope="col" className="px-16 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              
              <tbody>
                {/* ليه () */}
                {cart?.data.products.map((product, index) => (
                  <tr key={index} className= "flex   items-center md:flex-row flex-col justify-evenly bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <img src={product.product.imageCover} className="w-full md:w-32 max-w-full max-h-full" alt={product.product.title} />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.product.title.split(' ').slice(0, 2).join(' ')}  </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button disabled={isLoading} onClick={() => { updateCart(product.product.id, product.count - 1) }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                          </svg>
                        </button>
                        <div>
                          <span>{isLoading ? <i className='fas fa-spinner fa-spin'></i> : product.count}</span>
                        </div>
                        <button disabled={isLoading} onClick={() => { updateCart(product.product.id, product.count + 1) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {/* ليه data.products.price */}
                      {product.price} EGY
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => removeCartItem(product.product.id)} className="font-medium text-red-600 dark:text-red-500 hover:">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>


            </table>

          </div>
        </div>

      }

</>
}
    </>
  )
}







