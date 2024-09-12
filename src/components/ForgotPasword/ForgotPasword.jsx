import React, { useEffect, useState } from 'react'
import style from './ForgotPasword.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import *as yup from 'yup'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../loader/loader'
import { data } from 'autoprefixer'

export default function ForgotPasword() {
  useEffect(()=>{
    document.title = 'Forgot Pasword';
  },[])

const[isLoading,setIsloading]=useState(false)
const[data,setData]=useState([])
const navigation = useNavigate()
async function handelVerify(valus) {

  try{
    setIsloading(true)
    let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{
      email:valus.email
    }
  )
  console.log(data);
  setData(data)
  toast.success(data.message, {
    duration: 2500

  });
  setIsloading(false)
  navigation('/verify-code')
  }catch(err){
    console.log(err);
    toast.success(data.message, {
      duration: 1000

    });

  }
  
}



  const validationSchema = yup.object().shape({
    email: yup.string().email('emaile is valid').required('email is requird'),
  })

 const formik =  useFormik({
  initialValues: {
    email: "",
  },validationSchema: validationSchema
  , onSubmit: handelVerify

 })
  return (
    <>
    {isLoading ?         <div className='h-screen flex justify-center items-center'><Loader/></div>  
  :<div className="w-1/2 mx-auto mt-4">
      <h2 className='text-2xl my-5'>ForgotPasword</h2>

      <form className="my-5" onSubmit={formik.handleSubmit} >
        <div className="relative z-0 w-full mb-5 group">
          <h2 className='my-3 text-main'>{data.message}</h2>
          <input value={formik.values.email} onChange={formik.handleChange}
           onBlur={formik.handleBlur} type="email" name="email" id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
            border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
             dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
           rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user email</label>
        </div>
        <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none
         focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600
          dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">verify</button>

      </form>
      </div>
      }


    </>
  )
}
