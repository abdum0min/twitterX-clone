'use client'

import { Bell, Home, User } from "lucide-react"
import { useSession } from "next-auth/react"

const Sidebar = () => {
    const { data: session, status } : any  = useSession()

    const sidebarItems = [
        {
            label: 'Home',
            path: '/',
            icon: Home
        },
        {
            label: 'Notifications',
            path: `/notlifications/${status === 'authenticated' && session?.currentuser?._id}`,
            icon: Bell
        },
        {
            label: 'Profile',
            path: `/profile/${status === 'authenticated' && session?.currentuser?._id}`,
            icon: User
        }
    ]

    return (
        <section className="sticky top-0 left-0 h-screen lg:w-[266px], w-fit flex flex-col justify-between py-4">
            <div className="flex flex-col space-y-2">
                {/* Mobile sidebar */}
                <div className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-sky-300 hover:bg-opacity-10 cursor-pointer transition">
                    <Image/>
                </div>
            </div>
        </section>
    )
}

export default Sidebar