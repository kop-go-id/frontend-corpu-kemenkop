import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <div className='sticy top-0'>
                <Navbar />
            </div>
            <div className='min-h-screen'>
                {children}
            </div>
            <div className=''>
                <Footer />
            </div>
        </div>
    )
}

export default Layout