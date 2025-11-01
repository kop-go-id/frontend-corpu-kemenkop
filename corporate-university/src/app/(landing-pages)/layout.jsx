'use client'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { scrollToHash } from '@/utils/helpers'

const Layout = ({ children }) => {
    const pathname = usePathname()

    useEffect(() => {
        // Handle hash navigation on route change
        const hash = window.location.hash
        if (hash) {
            // Small delay to ensure DOM is fully rendered
            setTimeout(() => {
                scrollToHash(hash)
            }, 100)
        }
    }, [pathname])

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