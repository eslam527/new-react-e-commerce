import React, { useEffect, useState } from 'react'
import style from './catogryDitels.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function CatogryDitels() {
  let {id} =  useParams()
  console.log(id);
  
  const [categorieDitels, setcategorieDitels] = useState([])
 
 async function getditels(id) {
   try{
     let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
     console.log(data?.data);
     setcategorieDitels(data?.data)
   }
   catch(err){
     console.log(err);
   }
 }
 useEffect(()=>{getditels(id)},[])
 

 useEffect(()=>{
  document.title = 'Catogry Ditels';
},[])


  return (
    <>
      <div className="w-1/2 mx-auto text-center my-10">
      <h2 className='text-2xl font-semibold text-center text-main'>Brand Ditels</h2>

      <div className="inner w-2/3 mx-auto flex justify-center product rounded-lg">
      <img src={categorieDitels.image} className='w-full' alt={categorieDitels.name} />

      </div>
      <h3 className='text-center text-main my-3 font-semibold'>{categorieDitels.name}</h3>

      </div>      
    </>
  )
}
