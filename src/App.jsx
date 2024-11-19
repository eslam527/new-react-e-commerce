import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Cart from './components/cart/cart.jsx'
import Products from './components/products/products.jsx'
import Catogries from './components/Catogries/catogries.jsx'
import Brands from './components/brands/Brands.jsx'
import Register from './components/Register/Register.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import LayOut from './components/LayOut/LayOut.jsx'
import UserContextProvider from './components/context/UserContext.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetils from './components/ProductDetils/ProductDetils.jsx'
import CartContextProvider from './components/context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import CheckOut from './components/CheckOut/CheckOut.jsx'
import AllOrders from './components/AllOrders/AllOrders.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WishListContextProvider from './components/context/WishListContext.jsx'
import WishList from './components/wishList/wishList.jsx'
import ForgotPasword from './components/ForgotPasword/ForgotPasword.jsx'
import FoverifyCode from './components/Foverify-code/Foverify-code.jsx'
import ResetEmailPassword from './components/ResetEmailPassword/ResetEmailPassword.jsx'
import BrandDitels from './components/BrandDitels/BrandDitels.jsx'
import CatogryDitels from './components/catogryDitels/catogryDitels.jsx'
export default function App() {
  const routers = createBrowserRouter([
    {
      path: '', element: <LayOut />, children: [
        { path: 'home', element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'forgotPassword', element: <ForgotPasword /> },
        { path: 'verify-code', element: <FoverifyCode /> },
        { path: 'reset-email-password', element: <ResetEmailPassword /> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'brand', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'product', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'brandDitels/:id', element: <ProtectedRoute><BrandDitels /></ProtectedRoute> },
        { path: 'catogryDitels/:id', element: <ProtectedRoute><CatogryDitels/></ProtectedRoute> },
        { path: 'catogries', element: <ProtectedRoute> <Catogries /></ProtectedRoute> },
        { path: 'checkout', element: <ProtectedRoute> <CheckOut /></ProtectedRoute> },
        { path: 'allorders', element: <ProtectedRoute> <AllOrders /></ProtectedRoute> },
        { path: 'wishList', element: <ProtectedRoute> <WishList /> </ProtectedRoute> },
        { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetils /></ProtectedRoute> },
        { path: 'login', element: <LogIn /> },
        { index: true, element: <Register /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  const query = new QueryClient()
  return (
    <>
      <WishListContextProvider>

        <CartContextProvider>
          <UserContextProvider>
              <RouterProvider router={routers}></RouterProvider>
              <Toaster />
          </UserContextProvider>
        </CartContextProvider>
      </WishListContextProvider>


    </>
  )
}

