import { LucideIcon } from "lucide-react"

interface SidebarItemProps {
    item: {
        label: string
        path: string
        icon: LucideIcon
    }
}


const SidebarItem = ({item}: SidebarItemProps) => {
    return (
        <div className="flex flex-row items-center">
            {/* mobile sidebar item */}
            <div className="relative  rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden">
                <item.icon size={28} color="white"/>
            </div>
            {/* desktop sidebar item */}
            <div className="relative hidden rounded-full gap-4 p-4 lg:flex items-center cursor-pointer hover:bg-slate-400 hover:bg-opacity-10">
                <item.icon size={28} color="white"/>
                <p className="hidden lg:block text-xl text-white">{item.label}</p>
            </div>
        </div>
    )
}

export default SidebarItem