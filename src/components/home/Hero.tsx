import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-300'>
        <div>
            <div className='text-center '>
                <Link href={'/'} className='border rounded-lg px-4 text-green-700 border-gray-200 cursor-pointer py-0.5 text-lg '>
                    بدون خرید فقط استفاده
                </Link>
            </div>
            <div className='text-center mt-10'>
                <span className='text-5xl text-black font-semibold'>
                    هرچیزی که لازم داری رو <span className='text-green-600'>اجاره کن</span>
                </span>
            </div>
            <div className='text-center mt-8 font-bold'>
                <span className='text-gray-500 text-2xl'>
                    از دوربین و ابزار تا لوازم کمپ و مهمانی. به‌جای خرید، فقط برای مدت نیازت اجاره کن.
                </span>
            </div>
        </div>
    </section>
  )
}

export default Hero