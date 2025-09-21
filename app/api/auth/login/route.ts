import User from "@/database/user.model";
import { connectDatabase } from "@/lib/mongoose";
import { compare } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectDatabase()
        const { email, password } = await req.json()

        const isExistingUser = await User.findOne({ email })

        if(!isExistingUser){
            return NextResponse.json(
                {error: "Email does not exist"},
                {status: 400}
            )
        }
        const isPasswordCorrect = await compare(password, isExistingUser.password)

        if(!isPasswordCorrect){
            return NextResponse.json(
                {error: "Incorrect password"},
                {status: 400}
            )
        }

        return NextResponse.json(
            {success: true, user: isExistingUser},
            {status: 200}
        )

    } catch (error) {
        
    }
}