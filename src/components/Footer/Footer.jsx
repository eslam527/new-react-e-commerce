<<<<<<< HEAD
import React, { useState } from 'react'
import style from './Footer.module.css'
import amazonLogo from '../../assets/Amazon-Logo.png'
import payPalLogo from '../../assets/Paypal-Logo-Transparent-Download-387x258.png'
import masterCard from '../../assets/download.png'
import googlePlay from '../../assets/get-it-on-google-play-preview.png'
import appStroe from '../../assets/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png'
export default function Footer() {
  return (
    <>


      <footer className="bg-slate-200  dark:bg-gray-900 uppercase ">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="">
            <div className="info ">
              <h2 className='text-2xl font-semibold'>get the freshCart app</h2>
              <p className='text-sm text-slate-400 my-2 '>we will send you a link, open it on your phone to download the app</p>
            </div>
            <div className="regster">
              <form className=" mx-auto">
                <div className="  flex justify-between items-center px-3">
                  <div className="email w-10/12">
                    <input type="email" id="email" className="shadow-sm bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500 dark:shadow-sm-light" placeholder="Email..." required />
                  </div>
                  <div className='w-2/12 p-5'>
                    <button className='btn bg-main text-white w-full px-3 py-1 text-sm lg:px-2 rounded-md'>shere app link</button>

                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-6 border-slate-300 sm:mx-auto dark:border-slate-200 lg:my-8" />
          <div className="flex payment justify-between items-center px-4">
            <div className="partners flex items-center space-x-3 w-6/12">
              <h3 className='text-sm text-slate-500'>payment partenrs</h3>
              <img src={amazonLogo} className='w-20' alt="amazonLogo" />
              <img src={payPalLogo} className='w-20' alt="payPalLogo" />
              <img src={masterCard} className='w-20' alt="masterCard" />
            </div>
            <div className="partners flex items-center space-x-2 justify-end w-6/12">
              <h3 className='text-sm text-slate-500'>get deliveries with freshCart</h3>
              <img src={googlePlay} className='w-20' alt="googlePlay" />
              <img src={appStroe} className='w-20' alt="appStroe" />
            </div>
          </div>
          <hr className="my-6 border-slate-300 sm:mx-auto dark:border-slate-200 lg:my-8" />
<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline text-gray-400">Flowbite™</a>. All Rights Reserved.</span>

        </div>
      </footer>



    </>
  )
}
=======
import React, { useState } from 'react'
import style from './Footer.module.css'
import amazonLogo from '../../assets/Amazon-Logo.png'
import payPalLogo from '../../assets/Paypal-Logo-Transparent-Download-387x258.png'
import masterCard from '../../assets/download.png'
import googlePlay from '../../assets/get-it-on-google-play-preview.png'
import appStroe from '../../assets/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png'
export default function Footer() {
  return (
    <>


      <footer className="bg-slate-200  dark:bg-gray-900 uppercase ">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="">
            <div className="info ">
              <h2 className='text-2xl font-semibold'>get the freshCart app</h2>
              <p className='text-sm text-slate-400 my-2 '>we will send you a link, open it on your phone to download the app</p>
            </div>
            <div className="regster">
              <form className=" mx-auto">
                <div className="  flex justify-between items-center px-3">
                  <div className="email w-10/12">
                    <input type="email" id="email" className="shadow-sm bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500 dark:shadow-sm-light" placeholder="Email..." required />
                  </div>
                  <div className='w-2/12 p-5'>
                    <button className='btn bg-main text-white w-full px-3 py-1 text-sm lg:px-2 rounded-md'>shere app link</button>

                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-6 border-slate-300 sm:mx-auto dark:border-slate-200 lg:my-8" />
          <div className="flex payment justify-between items-center px-4">
            <div className="partners flex items-center space-x-3 w-6/12">
              <h3 className='text-sm text-slate-500'>payment partenrs</h3>
              <img src={amazonLogo} className='w-20' alt="amazonLogo" />
              <img src={payPalLogo} className='w-20' alt="payPalLogo" />
              <img src={masterCard} className='w-20' alt="masterCard" />
            </div>
            <div className="partners flex items-center space-x-2 justify-end w-6/12">
              <h3 className='text-sm text-slate-500'>get deliveries with freshCart</h3>
              <img src={googlePlay} className='w-20' alt="googlePlay" />
              <img src={appStroe} className='w-20' alt="appStroe" />
            </div>
          </div>
          <hr className="my-6 border-slate-300 sm:mx-auto dark:border-slate-200 lg:my-8" />
<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline text-gray-400">Flowbite™</a>. All Rights Reserved.</span>

        </div>
      </footer>



    </>
  )
}
>>>>>>> 4bd04e17803f649796db74775bc7235f22ecff85
