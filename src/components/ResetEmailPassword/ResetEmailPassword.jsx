import React, { useContext, useState } from 'react'
import style from './ResetEmailPassword.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import *as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'




export default function ResetEmailPassword() {
  const [apiErr, setApiErr] = useState(null);
  const [apiSucss, setApiSucss] = useState(null);
  const [loading, setLodaing] = useState(false)
  const navigation = useNavigate();
  let { setUserData } = useContext(UserContext)

  async function handelRegister(values) {
    try {
      setLodaing(true)
      const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,{
      email: values.email,
      newPassword:values.newPassword


      })
      setUserData(data.token)
      console.log(data);
      navigation('/home')
      setLodaing(false)
    } catch (err) {
      console.log(err);
      setApiErr(err.response.data.message)

      setLodaing(false)
    }

  }
  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: ""

    }, 
     onSubmit: handelRegister

  })





  return  (<>     <div className="w-1/2 mx-auto py-8">
  <h2 className='text-2xl font-semibold'>Reset Your Email Password</h2>
  {apiErr && <div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
    {apiErr}
  </div>}

  <form className="my-5" onSubmit={formik.handleSubmit}>
    <div className="relative z-0 w-full mb-5 group">
      <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user email</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="newPassword" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">new password</label>
    </div>
    {loading ? <button type="button" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
      <i className='fa fa-spinner fa-spin-pulse'></i>
    </button>
      :
      <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button>

    }
  </form>


</div>

</>
)

}