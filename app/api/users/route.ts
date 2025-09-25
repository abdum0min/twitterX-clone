import User from "@/database/user.model";
import { connectDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectDatabase()
        const { searchParams } = new URL(req.url)
        const limit = searchParams.get('limit') || 10

        const users = await User.find().select('name username imageProfile _id email').limit(Number(limit))

        return NextResponse.json( users )

    } catch (error) {
        const result = error as Error
        return NextResponse.json({ message: result.message }, { status: 500 })
    }
}