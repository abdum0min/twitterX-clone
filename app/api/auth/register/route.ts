import User from "@/database/user.model"
import { connectDatabase } from "@/lib/mongoose"
import { NextResponse } from "next/server"
import { hash } from 'bcrypt'

export async function POST(req: Request) {
    try {
        await connectDatabase()
        const { searchParams } = new URL(req.url)

        const step = searchParams.get("step")

        if (step == '1') {
            const { email } = await req.json()
            const isExistingUser = await User.findOne({ email })

            if (isExistingUser) {
                return NextResponse.json({ error: "Email already exists" }, { status: 400 })
            }

            return NextResponse.json({ success: true }, { status: 200 })
        } else if (step == '2') {
            const { name, email, password, username } = await req.json()

            const isExistingUser = await User.findOne({ username })

            if (isExistingUser) {
                return NextResponse.json({ error: "Username already exists" }, { status: 400 })
            }

            const hashedPassword = await hash(password, 10)

            const user = await User.create({ name, email, password: hashedPassword, username })

            return NextResponse.json({ success: true, user }, { status: 201 })
        }
    } catch (error) {
        const result = error as Error
        return NextResponse.json({ error: result.message }, { status: 400 })
    }
}