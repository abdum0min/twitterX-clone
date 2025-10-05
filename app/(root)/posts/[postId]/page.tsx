"use client"

import Header from '@/components/shared/header'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const PostDetailPage = () => {
    const { data: session, status }: any = useSession()
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            <Header label='Posts' isBack />
        </>
    )
}

export default PostDetailPage   