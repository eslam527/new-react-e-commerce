import React, { useState } from 'react'
import style from './Foverify-code.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import *as yup from 'yup'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

export default function FoverifyCode() {
  useEffect(()=>{
    document.title = 'FoverifyCode';
  },[])

  const[data,setData]=useState([])
  const[isLoading,setIsloading]=useState(false)
  const navigation = useNavigate()

  const validationSchema = yup.object().shape({
    resetCode: yup.string().required(),
  })
  async function handelVerify(valus) {

    try{
      setIsloading(true)
      let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,{
     resetCode: valus.resetCode ,

      }
    )
    console.log(data.message);
    setData(data.message)
    // err.response.data.message
    toast.success('Done', { duration: 2500 });
  
    
    setIsloading(false)
    navigation('/reset-email-password')
    }catch(err){
      console.log(err);
      toast.error('An error occurred', {
        duration: 10000
      })
  
    }
    
  }

 const formik = useFormik({
  initialValues: {
    resetCode:"",
  },validationSchema: validationSchema
  , onSubmit: handelVerify

 })

 

  return (
    <>

<div className=" mx-auto mt-4 min-h-screen flex justify-center items-center flex-col">

  
    <form className=" w-2/3" onSubmit={formik.handleSubmit} >
    <h2 className='text-2xl'>FoverifyCode</h2>

        <div className="relative z-0 w-full mb-5 group">
          <input value={formik.values.resetCode} onChange={formik.handleChange} onBlur={formik.handleBlur} name="resetCode" type='text'  id="resetCode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
          <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">verify-code</label>
        </div>
        {formik.errors.resetCode && formik.touched.resetCode && (
              <div className="text-red-600">{formik.errors.resetCode}</div>
            )}

        <button type='submit' className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
            {isLoading ? 'Verifying...' : 'Verify'}
          </button>

      </form>
      </div>

    </>
  )
}


