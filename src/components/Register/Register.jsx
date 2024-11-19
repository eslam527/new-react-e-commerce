 import React, { useContext, useEffect, useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import *as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'




export default function Register() {

let {setUserData} = useContext(UserContext)
useEffect(()=>{
  document.title = 'Register';
},[])


  const [apiErr, setApiErr] = useState(null);
  const [apiSucss, setApiSucss] = useState(null);
  const [loading, setLodaing] = useState(false)
  const navigation = useNavigate();
  async function handelRegister(values) {
    try {
      setLodaing(true)
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      setApiSucss(data.message)
      localStorage.setItem('userToken', data.token)
      navigation('home')
      setUserData(data.token)
      setLodaing(false)
    } catch (err) {

      setApiErr(err.response.data.message)
      setLodaing(false)
    }
  }


  // custom vatidation 
  // function validateForm(values) {
  //   let error = {};
  //   if (!values.name) {
  //     error.name = 'name is requer'
  //   }
  //   else if (!/^[A-Z][a-z]{3,10}$/.test(values.name)) {
  //     error.name = 'name must start with capitale char'
  //   }
  //   if (!values.email) {
  //     error.email = 'email is requer'
  //   }
  //   else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
  //     error.email = 'email must be like this (test@gmail.com)'

  //   }
  //   if (!values.password) {
  //     error.password = 'password is requer'
  //   }
  //   else if (!/^[A-Z][0-9]{5}$/.test(values.password)) {
  //     error.password = 'password be one char and 5number'

  //   }
  //   if(!values.rePassword){
  //     error.rePassword= 'rePassword is requer'
  //   }
  //   else if(values.rePassword != values.password){
  //     values.rePassword= ' rePassword != password'
  //   }

  //   return error
  // }
  //  yup package valdation
  let validationSchema = yup.object().shape({
    name: yup.string().min(3, 'min char is 3').max(15, 'the max char is 15').required('name is requird'),
    email: yup.string().email('emaile is valid').required('email is requird'),
    // في سؤال
    password: yup.string().matches(/^[A-Z]\w.{4,10}$/, 'password be like this Ahmed@123').required('pasword is requird'),
    rePassword: yup.string().oneOf([yup.ref('password')], 'rePassword & password not matching').required('rePassword is requird'),
    phone: yup.string().matches(/^(002)?01[0125][0-9]{8}$/, 'enter egyption number').required('phon is requird'),
  })
  const formik = useFormik({
    initialValues: {

      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""

    },validationSchema: validationSchema
    ,onSubmit: handelRegister
  })



  return (
    <>
      <div className="w-1/2 mx-auto py-8">
        <h2 className='text-2xl font-semibold'>Register now:</h2>
        {/* {apiErr ?<div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            {apiErr}
          </div>:
          <div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {apiSucss}
        </div>
          } */}
        {apiErr && <div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {apiErr}
        </div>}
        <form className="my-5" onSubmit={formik.handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input  type="name" name="name" id="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user name</label>
          </div>
          {formik.errors.name && formik.touched.name && <div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            {formik.errors.name}
          </div>
          }
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user email</label>
          </div>
          {formik.errors.email && formik.touched.email && <div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            {formik.errors.email}
          </div>
          }

          <div className="relative z-0 w-full mb-5 group">
            <input type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
          </div>

          {formik.errors.password && formik.touched.password && <div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            {formik.errors.password}
          </div>
          }

          <div className="relative z-0 w-full mb-5 group">
            <input  type="Password" value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
            <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">rePassword</label>
          </div>
          {formik.errors.rePassword && formik.touched.rePassword && <div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            {formik.errors.rePassword}
          </div>
          }

          <div className="relative z-0 w-full mb-5 group">
            <input  type="tel" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
          </div>
          {formik.errors.phone && formik.touched.phone && <div className="px-4 py-2 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            {formik.errors.phone}
          </div>
          }
          {
            loading ? <button type="tel" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
              <i className='fa fa-spinner fa-spin-pulse'></i>
            </button>
              :
              <button type="tel" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button>

          }
        </form>
      </div>





    </>
  )
}
