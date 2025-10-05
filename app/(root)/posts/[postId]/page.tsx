"use client"

import Header from '@/components/shared/header'
import { IPost } from '@/types'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const PostDetailPage = ({ params }: { params: { postId: string } }) => {
    const { data: session, status }: any = useSession()
    const [isLoading, setIsLoading] = useState(false)
    const [isFetchingComments, setIsFetchingComments] = useState(false)
    const [post, setPost] = useState<IPost | null>(null)
    const [comments, setComments] = useState()

    const getPost = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(`/api/posts/${params.postId}`)
            setPost(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    const getComments = async () => {
        try {
            setIsFetchingComments(true)
            const { data } = await axios.get(`/api/posts/${params.postId}/comments`)
            setComments(data)
            setIsFetchingComments(false)
        } catch (error) {
            console.log(error)
            setIsFetchingComments(false)
        }
    }

    return (
        <>
            <Header label='Posts' isBack />


            {isLoading || status === "loading" ?
                <div className='flex justify-center items-center h-24'>
                    <Loader2 className='animate-spin text-sky-500' />
                </div>
                :
                <>

                </>
            }
        </>
    )
}

export default PostDetailPage   