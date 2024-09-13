<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import style from './BrandDitels.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function BrandDitels() {
 let {id} =  useParams()
 console.log(id);
 
 const [brandDitels, setbrandDitels] = useState([])

async function getditels(id) {
  try{
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    console.log(data?.data);
    setbrandDitels(data?.data)
  }
  catch(err){
    console.log(err);
  }
}
useEffect(()=>{getditels(id)},[])
useEffect(()=>{
  document.title = 'Brand Ditels';
},[])

  return (
    <>
      <div className="w-1/2 mx-auto text-center my-10">
      <h2 className='text-2xl font-semibold text-center text-main'>Brand Ditels</h2>

      <div className="inner w-2/3 mx-auto flex justify-center product rounded-lg">
      <img src={brandDitels.image} className='w-full' alt={brandDitels.name} />

      </div>
      <h3 className='text-center text-main my-3 font-semibold'>{brandDitels.name}</h3>

      </div>
      
    </>
  )
}
=======
import React, { useEffect, useState } from 'react'
import style from './BrandDitels.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function BrandDitels() {
 let {id} =  useParams()
 console.log(id);
 
 const [brandDitels, setbrandDitels] = useState([])

async function getditels(id) {
  try{
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    console.log(data?.data);
    setbrandDitels(data?.data)
  }
  catch(err){
    console.log(err);
  }
}
useEffect(()=>{getditels(id)},[])
useEffect(()=>{
  document.title = 'Brand Ditels';
},[])

  return (
    <>
      <div className="w-1/2 mx-auto text-center my-10">
      <h2 className='text-2xl font-semibold text-center text-main'>Brand Ditels</h2>

      <div className="inner w-2/3 mx-auto flex justify-center product rounded-lg">
      <img src={brandDitels.image} className='w-full' alt={brandDitels.name} />

      </div>
      <h3 className='text-center text-main my-3 font-semibold'>{brandDitels.name}</h3>

      </div>
      
    </>
  )
}
>>>>>>> 4bd04e17803f649796db74775bc7235f22ecff85
