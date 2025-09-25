import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const User = () => {
    return (
        <div className='flex gap-3 items-center justify-between cursor-pointer hover:bg-neutral-200/10 transition py-2 px-3 rounded-md'>
            <div className='flex gap-2 cursor-pointer items-center'>
                <Avatar>
                    <AvatarImage/>
                    <AvatarFallback>CB</AvatarFallback>
                </Avatar>

                <div className='flex flex-col'>
                    <p className='text-white font-semibold text-sm line-clamp-1'>Samar</p>
                    <p className='text-neutral-400 text-sm line-clamp-1'>@samar0811</p>
                </div>
            </div>
        </div>
    )
}

export default User