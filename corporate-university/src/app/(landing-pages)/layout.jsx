import Navbar from '@/components/layout/Navbar'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <div className='sticy top-0'>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout