import React, { useContext, useEffect, useState } from 'react'
import style from './wishList.module.css'
import { WishListContext } from '../context/WishListContext.jsx'
import { CartContext } from '../context/CartContext.jsx'
export default function WishList() {
  let { getWishList, setWishIlstItems, wishIlstItems,delet } = useContext(WishListContext)
  let { addToCart, getCart, cart, setCart } = useContext(CartContext)

  useEffect(() => { getWishList() }, [])

  return (
    <>
      <h2 className='text-2xl font-semibold text-center mt-9'>your wish list</h2>

      <div className="relative overflow-x-auto  w-2/3 mx-auto my-10 shadow-md sm:rounded-lg">

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs  hidden lg:flex text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='flex  w-full justify-between'>
              <th scope="col" className=" px-10 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
              category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                rate
              </th>
              <th scope="col" className="px-8 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {wishIlstItems?.map((product, index) =>
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-evenly items-center flex-col md:flex-row">
                <td className="p-4">

                  <div className="product w-full md:w-32 max-w-full  rounded-md p-3">
                    <img src={product.imageCover} className="w-full  max-h-full" alt={product.title} />
                    <div className='text-center'>

                      <button className='btn w-full text-white bg-main my-2 rounded-md' onClick={() => addToCart(product.id)}>add to cart</button>

                    </div>

                  </div>
                </td>
                <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.title.split(' ').slice(0, 2).join(' ')}
                </td>

                <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.price}EGP
                </td>
                <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                  <i className='fa fa-star rating rating-color'></i> {product.ratingsAverage}

                </td>
                <td className="px-4 py-4">
                  <button onClick={() => delet(product?.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                </td>
              </tr>
            )}



          </tbody>
        </table>
      </div>
    </>
  )
}
