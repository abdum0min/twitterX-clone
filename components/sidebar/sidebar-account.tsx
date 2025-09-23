import { signOut } from 'next-auth/react'
import React from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { IUser } from '@/types/'
import { Popover, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
interface Props {
    user: IUser
}

const SidebarAccount = ({ user }: Props) => {
    return (
        <>
            {/* Mobile sidebar account */}
            <div className='lg:hidden block'>
                <div
                    className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-red-500 hover:opacity-80 transition cursor-pointer'
                    onClick={() => signOut()}
                >
                    <RiLogoutCircleLine size={24} color='white' />
                </div>
            </div>

            {/* Desktop sidebar account */}
            <Popover>
                <PopoverTrigger className='w-full rounded-full hover:bg-slate-300 hidden lg:block cursor-pointer hover:opacity-30 transition px-4 py-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex gap-2 items-center'>
                            <Avatar>
                                <AvatarImage src={user?.profileImage}/>
                                <AvatarFallback>{user?.name[0]}</AvatarFallback>
                            </Avatar>
                        </div>
                        <MoreHorizontal color='white' size={24}/>
                    </div>
                </PopoverTrigger>
            </Popover>
        </>
    )
}

export default SidebarAccount