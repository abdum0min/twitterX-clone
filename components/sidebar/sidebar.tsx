'use client'

import { useSession } from "next-auth/react"

const Sidebar = () => {
    const { data: session, status } = useSession()

    return (
        <div>Sidebar</div>
    )
}

export default Sidebar