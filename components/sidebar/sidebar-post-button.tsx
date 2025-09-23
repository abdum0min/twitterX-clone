'use client'

import { Feather } from "lucide-react"
import Link from "next/link"

const SidebarPostButton = () => {
    return (
        <Link href={'/'}>
            {/* mobile post */}
            <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 cursor-pointer transition hover:opacity-80">
                <Feather size={24} color="white"/>
            </div>

            {/* desktop post */}
            <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:opacity-90 cursor-pointer">
                <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
                    POST
                </p>
            </div>
        </Link>
    )
}

export default SidebarPostButton