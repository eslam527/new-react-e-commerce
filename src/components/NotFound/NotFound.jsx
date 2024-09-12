import React, { useState } from 'react'
import style from './NotFound.module.css'
export default function NotFound() {
  return (
    <>
      <div className={`${style.slideBottom} ${style.hVh} flex justify-center items-center  text-main `} >
        
        <h1 className='text-9xl overflow-hidden'>404 </h1>
        <p><span className='text-5xl overflow-hidden'>|</span>page is not found</p>
      </div>
    </>
  )
}
