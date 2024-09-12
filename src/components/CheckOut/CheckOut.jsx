import React, { useContext, useEffect, useState } from 'react'
import style from './CheckOut.module.css'
import Loader from '../loader/loader.jsx'
import { useFormik } from 'formik'
import { CartContext } from '../context/CartContext.jsx'

export default function CheckOut() {


let {chechOut}=useContext(CartContext)





const formik = useFormik({
  initialValues: {

    details: "",
    phone: "",
    city: "",

  },

  onSubmit: (values) => {
    const shippingAddress = {
      details: values.details,
      phone: values.phone,
      city: values.city,
    };
    chechOut(shippingAddress);
  },
});



  return (
    <>
    {/* <div className='flex justify-center items-center h-screen'><Loader/></div> */}
    <div className="w-1/2 mx-auto py-8">
    <h2 className='text-2xl'>CheckOut now</h2>
    <form className="my-5" onSubmit={formik.handleSubmit}>

        <div className="relative z-0 w-full mb-5 group">
            <input value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
            <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user details</label>
          </div>
        <div className="relative z-0 w-full mb-5 group">
            <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user phone</label>
          </div>
        <div className="relative z-0 w-full mb-5 group">
            <input value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} type="city" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
            <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user city</label>
          </div>
          <button type='submit' className='text-white bg-green-700 hover:bg-green-600 py-2 px-4 btn font-medium rounded-md '>Check out</button>
</form>
</div>
    </>
  )
}
