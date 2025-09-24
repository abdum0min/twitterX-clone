import { signOut } from 'next-auth/react'
import React from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { IUser } from '@/types/'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
interface Props {
    user: IUser
}

const SidebarAccount = ({ user }: Props) => {
    console.log('SidebarAccount user:', user);
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
                <PopoverTrigger className='w-full rounded-full hover:bg-slate-800 hidden lg:block cursor-pointer transition px-4 py-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex gap-2 items-center'>
                            <Avatar >
                                <AvatarImage src={user?.profileImage}/>
                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col items-start text-white'>
                                <p>{user.name}</p>
                                {user.username ?
                                    <p className='opacity-40'>{user.username}</p>
                                    :
                                    <p className='opacity-40'>Manage account</p>
                                }
                            </div>
                        </div>
                        <MoreHorizontal color='white' size={24}/>
                    </div>
                </PopoverTrigger>
                <PopoverContent className='bg-black border-none rounded-xl shadow shadow-white px-0 mb-3'>
                    <div className='font-bold text-white curpsor-pointer hover:bg-slate-800 cursor-pointer p-4 transition'
                        onClick={() => signOut()}
                    >
                        Log out {user.username ? `@${user.username}` : user.name}
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default SidebarAccount