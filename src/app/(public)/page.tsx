import CategoryChips from '@/components/home/CategoryChips'
import Faq from '@/components/home/Faq'
import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import OwnerCta from '@/components/home/OwnerCta'
import ProductGrid from '@/components/home/ProductGrid'
import WhyRent from '@/components/home/WhyRent'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-gray-300'>
        <Hero />
        <CategoryChips />
        <ProductGrid />
        <HowItWorks />
        <WhyRent />
        <OwnerCta />
        <Faq />
    </div>
  )
}

export default Home