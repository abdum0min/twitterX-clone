"use client"

import Header from '@/components/shared/header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { sliceText } from '@/lib/utils'
import { IPost } from '@/types'
import axios from 'axios'
import { formatDistanceToNowStrict } from 'date-fns'
import { Loader2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const PostDetailPage = ({ params }: { params: { postId: string } }) => {
    const { data: session, status }: any = useSession()
    const [isLoading, setIsLoading] = useState(false)
    const [isFetchingComments, setIsFetchingComments] = useState(false)
    const [post, setPost] = useState<IPost | null>(null)
    const [comments, setComments] = useState()

    const getPost = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(`/api/posts/${params?.postId}`)
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
            const { data } = await axios.get(`/api/posts/${params?.postId}/comments`)
            setComments(data)
            setIsFetchingComments(false)
        } catch (error) {
            console.log(error)
            setIsFetchingComments(false)
        }
    }

    useEffect(() => {
        getComments()
        getPost()
    }, [])

    return (
        <>
            <Header label='Posts' isBack />


            {isLoading || status === "loading" ?
                <div className='flex justify-center items-center h-24'>
                    <Loader2 className='animate-spin text-sky-500' />
                </div>
                :
                <>
                    <div className='border-b-[1px] border-neutral-800 p-5 cursor-pointer bg-neutral-900 transition'>
                        <div className='flex flex-row items-center gap-3'>
                            <Avatar>
                                <AvatarImage src={post?.user.profileImage} />
                                <AvatarFallback>{post?.user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className='flex flex-row items-center gap-2'>
                                    <p className='text-white font-semibold cursor-pointer hover:underline'>
                                        {post?.user?.name}
                                    </p>
                                    <span className='text-neutral-500 cursor-pointer hover:underline hidden md:block'>
                                        {post?.user.username ?
                                            `${sliceText(post?.user?.username ?? "", 16)}`  
                                            :
                                            `${sliceText(post?.user?.email ?? '', 16)}`
                                        }
                                    </span>

                                    <span className='text-neutral-500 text-sm'>
                                        {formatDistanceToNowStrict(new Date(post?.createdAt ?? ""))} ago
                                    </span>
                                </div>
                                <div className='text-white mt-1'>
                                    {post?.body}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default PostDetailPage   