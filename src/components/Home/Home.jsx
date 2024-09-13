<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import { data } from 'autoprefixer'
import RecentProducts from '../RecentProducts/RecentProducts.jsx'
import Loader from '../loader/loader.jsx'
import CatogrySlider from '../CatogrySlider/CatogrySlider.jsx'
import MainSlider from '../MainSlider/MainSlider.jsx'
import { CartContext } from '../context/CartContext.jsx'
import { WishListContext } from '../context/WishListContext.jsx'
import { useFormik } from 'formik'


export default function Home() {
  let { addToWishList, x } = useContext(WishListContext)
  useEffect(()=>{
    document.title = 'Home';
  },[])
  
  const [products, setProducts] = useState([])
function search(){
}
  let { addToCart, getCart, cart, setCart } = useContext(CartContext)
  async function getAllProducts() {
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      console.log(data?.data);
      setProducts(data?.data)
      window.ti
      // في سؤال

    }
    catch (err) {
      console.log(err);

    }


  }
  useEffect(() => { getAllProducts(); }, [])
  useEffect(()=>{addToWishList()},[])
  // const formik = useFormik({
  //   initialValues: {
  //     search:''
  //   }
  //   , onSubmit:search

  // })
  // console.log(formik.values);
  
  return (
    <>
      <div className="flex flex-col justify-center">
        <MainSlider />
        <CatogrySlider />
        <h2 className='text-3xl m-6 font-bold '>Recent Products</h2>
        <div className="search w-2/3 mx-auto my-4 focus:border-green-600">
          {/* <input value={formik.values.search} type="text" id="search" className="shadow-sm bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500 dark:shadow-sm-light" placeholder="search..." required /> */}

        </div>

        {products.length ?
          <div className="flex flex-wrap justify-center">
            {products.map((product) => <RecentProducts key={product.id} product={product}></RecentProducts>)}


          </div>
          :
          <div className="flex h-screen justify-center items-center">
            <Loader />

          </div>
        }
      </div>

    </>
  )
}
=======
import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import { data } from 'autoprefixer'
import RecentProducts from '../RecentProducts/RecentProducts.jsx'
import Loader from '../loader/loader.jsx'
import CatogrySlider from '../CatogrySlider/CatogrySlider.jsx'
import MainSlider from '../MainSlider/MainSlider.jsx'
import { CartContext } from '../context/CartContext.jsx'
import { WishListContext } from '../context/WishListContext.jsx'
import { useFormik } from 'formik'


export default function Home() {
  let { addToWishList, x } = useContext(WishListContext)
  useEffect(()=>{
    document.title = 'Home';
  },[])
  
  const [products, setProducts] = useState([])
function search(){
}
  let { addToCart, getCart, cart, setCart } = useContext(CartContext)
  async function getAllProducts() {
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      console.log(data?.data);
      setProducts(data?.data)
      window.ti
      // في سؤال

    }
    catch (err) {
      console.log(err);

    }


  }
  useEffect(() => { getAllProducts(); }, [])
  useEffect(()=>{addToWishList()},[])
  // const formik = useFormik({
  //   initialValues: {
  //     search:''
  //   }
  //   , onSubmit:search

  // })
  // console.log(formik.values);
  
  return (
    <>
      <div className="flex flex-col justify-center">
        <MainSlider />
        <CatogrySlider />
        <h2 className='text-3xl m-6 font-bold '>Recent Products</h2>
        <div className="search w-2/3 mx-auto my-4 focus:border-green-600">
          {/* <input value={formik.values.search} type="text" id="search" className="shadow-sm bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500 dark:shadow-sm-light" placeholder="search..." required /> */}

        </div>

        {products.length ?
          <div className="flex flex-wrap justify-center">
            {products.map((product) => <RecentProducts key={product.id} product={product}></RecentProducts>)}


          </div>
          :
          <div className="flex h-screen justify-center items-center">
            <Loader />

          </div>
        }
      </div>

    </>
  )
}
>>>>>>> 4bd04e17803f649796db74775bc7235f22ecff85
