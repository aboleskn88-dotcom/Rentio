import { Clock, ShieldCheck, Truck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CategoryChips = () => {
  return (
    <section className='text-center mx-60'>
         <div className='flex bg-white py-5 rounded-lg my-5'>
            <div className='flex-1'>
                <button className='mx-3 bg-green-600 p-4 rounded-lg cursor-pointer'>
                    جست و جو 
                </button>
            </div>
            <div className='flex-1'>
                <span className='text-gray-400'>تاریخ شروع</span>
                <input className='block placeholder:text-gray-400 placeholder:text-right outline-none text-gray-400 text-right'placeholder='انتخاب تاریخ' type="text" />
            </div>
            <div className='flex-1'>
                <span className='text-gray-400'>شهر</span>
                <input className='block placeholder:text-gray-400 placeholder:text-right outline-none text-gray-400 text-right'placeholder='[شهر]' type="text" />
            </div>
            <div className='flex-1'>
                <span className='text-gray-400'>چه چیزی میخوای</span>
                <input className='block placeholder:text-gray-400 placeholder:text-right outline-none text-gray-400 text-right'placeholder='مثلا دوربین ,دربیل,' type="text" />                
            </div>
         </div>
        
        <div className='flex'>
            <div className='flex flex-1 justify-center'>
                <span className='text-gray-400 px-2 text-lg font-semibold'>
                    لغو رزور در موعد مقرر
                </span>
                <Clock className='text-green-500 mt-0.5'/>
            </div>
            <div className='flex justify-center flex-1'>
                <span className='text-gray-400 px-2 text-lg font-semibold'>
                    تحویل درب منزل
                </span>
                <Truck className='text-green-500 mt-0.5' />
            </div>
            <div className='flex justify-center flex-1'>
                <span className='text-gray-400 px-2 text-lg font-semibold'>
                    وسایل بیمه‌شده
                </span>
                <ShieldCheck className='text-green-500 mt-0.5' />
            </div>
        </div>
        <div className='mt-6'>
            <div className='flex flex-1 justify-center font-semibold'>
                <Link href={'/'} className='text-black bg-white mx-10 p-2 rounded-2xl'>دوربین و فیلم برداری</Link>
                <Link href={'/'} className='text-black bg-white mx-10 p-2 rounded-2xl'>ابزار و تجهیزات</Link>
                <Link href={'/'} className='text-black bg-white mx-10 p-2 rounded-2xl'>کمپ و سفر</Link>
                <Link href={'/'} className='text-black bg-white mx-10 p-2 rounded-2xl'>لوازم مهمانی</Link>
                <Link href={'/'} className='text-black bg-white mx-10 p-2 rounded-2xl'>کنسول و بازی</Link>
                <Link href={'/'} className='text-black bg-white mx-10 p-2 rounded-2xl'>دوچرخه و اسکوتر</Link>
            </div>
        </div>

    </section>
  )
}

export default CategoryChips