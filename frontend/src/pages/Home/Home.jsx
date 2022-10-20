import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import img1 from '../../assets/images/store1.png'
import img2 from '../../assets/images/dashboard.svg'

import Button from '../../components/Button/Button'
import './Home.scss'

const Home = () => {
  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='home'>
      {/* SECTION 1 */}

      <div className='banner min-h-screen flex items-center px-20'>
        <div className='w-[50%]'>
          <h2 className='text-4xl text-white'>
            {' '}
            In-store, We've Got Your Restaurant Covered
          </h2>
          <p className='text-lg text-white mt-5'>
            An end-to-end, web-based POS that has everything you need to manage
            your restaurant— online & in-store.
          </p>
          <Button className='mt-6' name='Contact Us' />
        </div>
        <div className='w-[50%]'>
          <img className='ml-auto' src={img1} alt='' />
        </div>
      </div>

      {/* Section 2 */}

      <div className='section-2 min-h-screen flex items-center px-10'>
        <div className='product-div flex rounded-xl p-10 w-[100%]'>
          <div className='w-[60%] m-auto'>
            <h2 className='text-4xl text-white'>Product Features</h2>
            <p className='text-lg text-white mt-5'>
              Our products have been designed with your business in mind, and
              are packed with essential features to help you succeed.
            </p>
            <div className='item-div mt-9'>
              <div className='flex mt-3'>
                <div className='item w-[50%] flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='#fff'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'
                    />
                  </svg>

                  <p className='ml-3 text-white'>Menu Management</p>
                </div>
              </div>

              <div className='item w-[50%] flex mt-3 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#fff'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                  />
                </svg>

                <p className='ml-3 text-white'>Outlet Management</p>
              </div>

              <div className='item w-[50%] flex mt-3 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#fff'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z'
                  />
                </svg>

                <p className='ml-3 text-white'>QR Generation</p>
              </div>
            </div>
          </div>
          <div className='w-[40%]'>
            <img className='ml-auto w-[80%]' src={img2} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
