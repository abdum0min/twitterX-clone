import Auth from '@/components/auth'
import { authOptions } from '@/lib/auth-options'
import { getServerSession } from 'next-auth'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
    const session: any = await getServerSession(authOptions)

    if (!session) {
        return (
            <div className='container h-screen mx-auto max-w-7xl px-5 md:px-0'>
                <Auth />
            </div>
        )
    }

    return (
        <div>{children}</div>
    )
}

export default Layout