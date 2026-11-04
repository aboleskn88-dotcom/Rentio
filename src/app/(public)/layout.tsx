import Footer from '@/components/home/Footer'
import NavbarHomePage from '@/components/NavbarHomePage'
import React from 'react'

const PublicLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className=''>
        <NavbarHomePage />
        {children}
        <Footer />
    </div>
  )
}

export default PublicLayout