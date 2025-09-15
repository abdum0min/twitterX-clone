"use client"

import Image from 'next/image'
import React, { useCallback } from 'react'
import Button from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import useRegisterModal from '@/hooks/useRegisterModal'
import RegisterModal from '../modals/registerModal'
import useLoginModal from '@/hooks/useLoginModal'
import LoginModal from '../modals/loginModal'

const Auth = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const onOpenRegisterModal = useCallback(() => {
        registerModal.onOpen()
    }, [registerModal])

    const onOpenLoginModal = useCallback(() => {
        loginModal.onOpen()
    }, [loginModal])
    return (
        <>
            <RegisterModal/>
            <LoginModal/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen'>
                <Image
                    src={'/images/x.svg'}
                    alt='X'
                    width={450}
                    height={450}
                    className='justify-self-center hidden md:block'
                />

                <div className='flex flex-col md:justify-between justify-center gap-6 md:h-[70vh] h-full'>
                    <div className='block md:hidden'>
                        <Image
                            src={'/images/x.svg'}
                            alt='X'
                            width={50}
                            height={50}
                        />
                    </div>
                    <h1 className='text-6xl font-bold'>Happening now</h1>
                    <div className='md:w-[60%] w-full'>
                        <h2 className='font-bold text-3xl mb-4'>Join today.</h2>
                        <div className='flex flex-col space-y-2'>
                            <Button
                                fullWidth
                                secondary
                                label={
                                    <div className='flex gap-2 items-center justify-center'>
                                        <FcGoogle /> Signup with google
                                    </div>
                                }
                            />
                            <Button
                                fullWidth
                                secondary
                                label={
                                    <div className='flex gap-2 items-center justify-center'>
                                        <AiFillGithub /> Signup with github
                                    </div>
                                }
                            />
                            <div className='flex items-center justify-center'>
                                <div className='h-px bg-gray-700 w-1/2' />
                                <p className='mx-4'>or</p>
                                <div className='h-px bg-gray-700 w-1/2' />
                            </div>
                            <Button
                                label={"Create account"}
                                fullWidth
                                onClick={onOpenRegisterModal}
                            />
                            <div className='text-[10px] text-gray-400'>
                                By signing up, you agree to the{" "}
                                <span className='text-sky-500'>Terms of Service</span> and
                                <span className='text-sky-500'> Privacy Policy</span>, including
                                <span className='text-sky-500'> Cookie Use</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[60%] w-full'>
                        <h3 className='font-medium text-xl mb-4'>Already have an account?</h3>
                        <Button
                            label={"Sign in"}
                            fullWidth
                            outline
                            onClick={onOpenLoginModal}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth