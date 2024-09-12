import React, { useEffect, useState } from 'react'
import style from './brands.module.css'
import Loader from '../loader/loader.jsx'
import axios from 'axios'
import { data } from 'autoprefixer'
import { Link } from 'react-router-dom'
export default function Brands() {
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(true);

  async function getBrands() {
    try {
      setLoading(true)
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
      console.log(data.data);
      setBrands(data.data)
      setLoading(false)
    }

    catch (err) {
      setLoading(true)
      console.log(err);
      setLoading(false)

    }
  }
  async function getSBrands() {
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands/64089fe824b25627a25315d1')
      console.log(data.data);

    }
    catch (err) {
      console.log(err);

    }
  }
  useEffect(() => { getBrands() }, [])
  useEffect(()=>{
    document.title = 'Brands';
  },[])

  return (
    <>
      <h2 className='text-2xl my-10 font-semibold text-center text-main'>Brands</h2>

      {!loading ?
        <div className=" flex p-6 flex-wrap justify-center mx-auto items-center px-2 space-y-2" >

          {brands?.map((brand) => {
            return <Link to={`/brandDitels/${brand._id}`} key={brand._id} className='w-1/2 md:w-1/3 lg:w-1/4 product  p-2 text-center  rounded-md'>
              <div >
                <img src={brand.image} className='w-full px-2' alt={brand.name} />
                <h2 className=' my-2'>{brand.name}</h2>
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
