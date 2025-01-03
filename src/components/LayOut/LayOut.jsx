import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'
import { UserContext } from '../context/UserContext'

import { Outlet, useNavigate } from 'react-router-dom'
export default function LayOut() {
  const navigate = useNavigate();
  let {setUserData} = useContext(UserContext)

  return (
    <>
     <NavBar/>
    <div className="container my-10 capitalize overflow-auto ">
    <Outlet>
      
      </Outlet>
  
    </div>
    <Footer/>
      
    </>
  )
}
