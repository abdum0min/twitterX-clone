import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const User = () => {
    return (
        <div className='flex gap-3 items-center justify-between'>
            <div className='flex gap-2 cursor-pointer'>
                <Avatar>
                    <AvatarImage/>
                    <AvatarFallback>CB</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default User