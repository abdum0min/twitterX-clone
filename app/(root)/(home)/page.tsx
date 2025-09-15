import Auth from '@/components/auth'
import React from 'react'

const HomePage = () => {
    const user = false
    if(!user) return (
        <div className='container h-screen mx-auto max-w-7xl px-5 md:px-0'>
            <Auth/>
        </div>
    )
    
    return (
        <div>HomePage</div>
    )
}

export default HomePage