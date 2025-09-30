import Form from '@/components/shared/form'
import Header from '@/components/shared/header'
import { authOptions } from '@/lib/auth-options'
import { getServerSession } from 'next-auth'
import React from 'react'

const HomePage = async () => {
    const session: any = await getServerSession(authOptions)

    return (
        <>
            <Header label='Home' />
            <Form user={JSON.parse(JSON.stringify(session.currentuser))} placeholder="What's on your mind" />
        </>
    )
}

export default HomePage