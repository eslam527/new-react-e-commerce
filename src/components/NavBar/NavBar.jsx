<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import style from './NavBar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/freshcart-logo.svg'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'
import { WishListContext } from '../context/WishListContext.jsx'


export default function NavBar() {
  let { userData, setUserData } = useContext(UserContext)
  let { cart, getCart } = useContext(CartContext)
  let { lsetNum,getWishList } = useContext(WishListContext)
  const navigate = useNavigate();
  useEffect(() => { getCart() }, [])
  useEffect(() => { getWishList() }, [])


  function logOut() {
    localStorage.removeItem('userToken')
    setUserData(null)
    navigate('/login')


  }
  function toggelNav(){
    document.querySelector('.linls').classList.toggle('hidden')
    
  }
  return (
    <>
      <nav className='bg-slate-200 capitalize md:fixed top-0 left-0 right-0 z-30'>
        <div className="container text-center p-2 items-center flex flex-wrap md:flex-row justify-between">
          <div className='flex flex-co md:flex-row items-center space-x-3 '>
          <Link to='home'>            <img src={logo} width={120} alt="logo" />
            </Link>




          </div>
          <i onClick={(e)=>toggelNav(e)} className="fa-solid fa-bars md:hidden block" />


          <div className='flex  md:justify-end text-left md:text-center flex-col md:flex-row justify-between items-start  flex-grow   md:items-center space-x-3  linls w-full md:w-auto py-2 '>
          {userData && <ul className='flex flex-col md:flex-row  md:space-x-9 items-center md:justify-center flex-grow'>
              <li ><NavLink to='home' >home</NavLink></li>
              <li><NavLink to='product'>product</NavLink></li>
              <li><NavLink to='catogries'>categories</NavLink></li>
              <li><NavLink to='brand'>brands</NavLink></li>
            </ul>
            }
            <ul className='flex flex-col md:flex-row md:space-x-3 md:items-center '>
              {userData ?
                <>
                  {/* why'?' */}
                  <li><NavLink to='wishList'><i className="fa-solid fa-heart text-main fa-2x "></i></NavLink></li>
                  <li className=' relative'><NavLink to='cart'><i className="fa-solid text-center fa-cart-shopping fa-2x text-main   align-middle"> <span className='   absolute left-[9%] md:left-[38%] bottom-2   md:text-2xl text-white '> {cart ? cart?.numOfCartItems : 0}</span>
                  </i>
                  </NavLink></li>
                  <li><span className='cursor-pointer' onClick={logOut} >logout</span></li>


                </>
                : <>

                  <li><NavLink to=''>Register</NavLink></li>
                  <li><NavLink to='login'>login</NavLink></li>
                </>
              }


              <li className='space-x-2 text-black'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>

              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
=======
import React, { useContext, useEffect, useState } from 'react'
import style from './NavBar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/freshcart-logo.svg'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'
import { WishListContext } from '../context/WishListContext.jsx'


export default function NavBar() {
  let { userData, setUserData } = useContext(UserContext)
  let { cart, getCart } = useContext(CartContext)
  let { lsetNum,getWishList } = useContext(WishListContext)
  const navigate = useNavigate();
  useEffect(() => { getCart() }, [])
  useEffect(() => { getWishList() }, [])


  function logOut() {
    localStorage.removeItem('userToken')
    setUserData(null)
    navigate('/login')


  }
  function toggelNav(){
    document.querySelector('.linls').classList.toggle('hidden')
    
  }
  return (
    <>
      <nav className='bg-slate-200 capitalize md:fixed top-0 left-0 right-0 z-30'>
        <div className="container text-center p-2 items-center flex flex-wrap md:flex-row justify-between">
          <div className='flex flex-co md:flex-row items-center space-x-3 '>
          <Link to='home'>            <img src={logo} width={120} alt="logo" />
            </Link>




          </div>
          <i onClick={(e)=>toggelNav(e)} className="fa-solid fa-bars md:hidden block" />


          <div className='flex  md:justify-end text-left md:text-center flex-col md:flex-row justify-between items-start  flex-grow   md:items-center space-x-3  linls w-full md:w-auto py-2 '>
          {userData && <ul className='flex flex-col md:flex-row  md:space-x-9 items-center md:justify-center flex-grow'>
              <li ><NavLink to='home' >home</NavLink></li>
              <li><NavLink to='product'>product</NavLink></li>
              <li><NavLink to='catogries'>categories</NavLink></li>
              <li><NavLink to='brand'>brands</NavLink></li>
            </ul>
            }
            <ul className='flex flex-col md:flex-row md:space-x-3 md:items-center '>
              {userData ?
                <>
                  {/* why'?' */}
                  <li><NavLink to='wishList'><i className="fa-solid fa-heart text-main fa-2x "></i></NavLink></li>
                  <li className=' relative'><NavLink to='cart'><i className="fa-solid text-center fa-cart-shopping fa-2x text-main   align-middle"> <span className='   absolute left-[9%] md:left-[38%] bottom-2   md:text-2xl text-white '> {cart ? cart?.numOfCartItems : 0}</span>
                  </i>
                  </NavLink></li>
                  <li><span className='cursor-pointer' onClick={logOut} >logout</span></li>


                </>
                : <>

                  <li><NavLink to=''>Register</NavLink></li>
                  <li><NavLink to='login'>login</NavLink></li>
                </>
              }


              <li className='space-x-2 text-black'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>

              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
>>>>>>> 4bd04e17803f649796db74775bc7235f22ecff85
