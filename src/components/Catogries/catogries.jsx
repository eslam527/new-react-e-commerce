import React, { useEffect, useState } from 'react'
import style from './catogries.module.css'
import Loader from '../loader/loader.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Catogries() {
  const [loading, setLoading] = useState(true);
  const [catogries, setCatogries] = useState([])
  useEffect(()=>{
    document.title = 'Catogries';
  },[])

  async function getCategories() {
    setLoading(true)
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      console.log(data.data);
      setCatogries(data?.data)
      setLoading(false)

    }
    catch (err) {
      setLoading(true)

      console.log(err);
      setLoading(false)

    }
  }

  // async function getsCategories() {
  //   try{
  //     let {data}= await axios.get ('https://ecommerce.routemisr.com/api/v1/categories')
  //     console.log(data.data);

  //   }
  //   catch(err){
  //     console.log(err);

  //   }
  // }
  useEffect(() => { getCategories() }, [])
  // useEffect(()=>{getsCategories(),[]})



  return (
    <>
      <h2 className='text-2xl my-10 font-semibold text-center text-main'>Catogries</h2>
      {!loading ?
        <div className=" flex p-6 flex-wrap justify-center mx-auto items-center px-2 space-y-2" >

          {catogries?.map((Catogry) => {
            return <Link to={`/catogryDitels/${Catogry._id}`} key={Catogry._id} className='w-1/2 md:w-1/3 lg:w-1/4 product  p-2 text-center  rounded-md'>

              <div >

                <img src={Catogry.image} className='w-full px-2 h-[300px]' alt={Catogry.name} />
                <h2 className='my-3'>{Catogry.name}</h2>
              </div>

            </Link>

          })}
        </div>
        :
        <div className='flex justify-center items-center h-screen'><Loader /></div>




      }
    </>
  )
}
