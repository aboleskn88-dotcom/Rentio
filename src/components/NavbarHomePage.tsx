"use client"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const NavbarHomePage = () => { 
  const [isMobile , setisMobile] = useState(false)
  return (
        <header className='bg-gray-300 pb-10'>
            <nav className='hidden sm:flex'>
              {/* دکمه ورود و شروع اجاره  */}
                  <div className='flex flex-1 items-center gap-10 px-10 pt-7'>
                    <Link href={'/'}>
                      <button className='text-lg border-2 p-2 border-green-800 rounded-xl px-6
                     bg-green-800 font-bold hover:cursor-pointer'>شروع اجاره</button>
                    </Link>
                    <Link href={'/'}>
                      <p className='text-black font-semibold text-lg hover:cursor-pointer'>ورود</p>
                    </Link>
                  </div>
                  {/* دسته بندی و .. */}
                <div className='flex flex-1 justify-center gap-20 text-gray-500 text-lg pt-10'>
                        <Link className='transition-colors duration-300 hover:text-black' href={'/'}>تماس با ما</Link>
                        <Link className='transition-colors duration-300 hover:text-black' href={'/'}>اجاره دادن وسایل</Link>
                        <Link className='transition-colors duration-300 hover:text-black' href={'/'}>نحوه اجاره</Link>
                        <Link className='transition-colors duration-300 hover:text-black' href={'/'}>دسته بندی ها</Link>
                </div>
                <div className='flex flex-1'>
                  <Image className='rounded-lg pt-7 ml-auto mr-6' src={'/file_00000000e6fc821095a110924c41d703.png'} width={80} height={80} alt='project_profile' />
                </div>
            </nav>
            {/* موبایل */}
            <nav className='sm:hidden'>
              <div className='flex'>
                {/* ایکون منو */}
                  <div className='flex-1'>
                    <button onClick={()=>setisMobile(!isMobile)}>
                       {
                        isMobile ? <X size={25} className='m-2' /> : <Menu size={25} className='m-2' /> 
                       }
                    </button>
                  </div>
                <div className='flex-1'>
                   <Image className='rounded-lg m-2 ml-auto' src={'/file_00000000e6fc821095a110924c41d703.png'} 
                   width={50} height={50} alt='project_profile' />
                </div>
                </div>
                {
                isMobile ? 
                <div className='flex justify-center gap-5 text-gray-500 font-semibold'>
                      <Link className='transition-colors duration-300 hover:text-black' href={'/'}>تماس با ما</Link>
                      <Link className='transition-colors duration-300 hover:text-black' href={'/'}>اجاره دادن وسایل</Link>
                      <Link className='transition-colors duration-300 hover:text-black' href={'/'}>نحوه اجاره</Link>
                      <Link className='transition-colors duration-300 hover:text-black' href={'/'}>دسته بندی ها</Link>                  
                </div>
                : ""
                }
            </nav>
        </header>
  )
}

export default NavbarHomePage