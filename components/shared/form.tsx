import { IUser } from '@/types'
// import React, { Dispatch, SetStateAction } from 'react'


interface Props {
    placeholder: string
    // isComment?: boolean
    // postId?: string
    user: IUser
    // posts: IPost[]
    // setPosts: Dispatch<SetStateAction<IPost[]>>
}

const Form = ({ user, placeholder }: Props) => {
    return (
        <div>form</div>
    )
}

export default Form