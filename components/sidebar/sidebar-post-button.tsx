'use client'

import { Feather } from "lucide-react"

const SidebarPostButton = () => {
    return (
        <>
            {/* mobile post */}
            <div className="mt-6 lg:hidden rounded=full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 cursor-pointer transition">
                <Feather size={24} color="white"/>
            </div>
        </>
    )
}

export default SidebarPostButton