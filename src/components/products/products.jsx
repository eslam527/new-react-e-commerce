import React, { useContext, useEffect, useState } from 'react'
import style from './products.module.css'
import RecentProducts from '../RecentProducts/RecentProducts.jsx'
import Loader from '../loader/loader.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext.jsx'
import { WishListContext } from '../context/WishListContext.jsx'
export default function Products() {
  let { addToCart, getCart ,cart,setCart} = useContext(CartContext)
  let {addToWishList,wishIlstItems}=useContext(WishListContext)

  const [products, setproducts] = useState([])
  const [loading, setLoading] = useState(false)
  async function getProducts() {
    try {
      setLoading(true)
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?`)
      console.log(data.data);
      setproducts(data?.data)
      setLoading(false)
    } catch (err) {
      setLoading(true)
      console.log(err);
      setLoading(false)
    }
  }

  useEffect(() => { getProducts() }, [])
  useEffect(() => {
    getCart()
  
  
    }, [cart])
  useEffect(()=>{addToWishList()},[])
  useEffect(()=>{
    document.title = 'Products';
  },[])

  return (
    <>




      <h2 className='text-2xl my-10 font-semibold text-center text-main'>Products</h2>

      {!loading ?
        <div className=" flex p-6 flex-wrap justify-center mx-auto items-center px-2 space-y-2" >

          {products?.map((product) => {
            return <div key={product.id} className='w-1/2 md:w-1/3 lg:w-1/4 product  p-2 text-center  rounded-md'>
              <div className='inner'>
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
                  <i onClick={(e) => addToWishList(product.id, e)} className="fa-solid fa-heart cursor-pointer  fa-2x btn"></i>        </div>

                <button className='btn w-full text-white bg-main rounded-md' onClick={() => addToCart(product.id)}>add to cart</button>


              </div>

            </div>
          })}
    </div >
        :
  <div className='flex justify-center items-center h-screen'><Loader /></div>




}
    </>
  )
}
