import LearningTopbar from '@/components/layout/LearningTopbar'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <LearningTopbar />
            {children}
        </div>
    )
}

export default Layout