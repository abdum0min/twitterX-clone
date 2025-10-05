import Comment from "@/database/comment.model"
import Post from "@/database/post.model"
import User from "@/database/user.model"
import { connectDatabase } from "@/lib/mongoose"
import { NextResponse } from "next/server"

export async function GET(req: Request, route: { params: { postId: string } }) {
    try {
        await connectDatabase()
        const { postId } = route.params

        const post = await Post.findById(postId).populate({
            path: "comments",
            model: Comment,
            populate: {
                path: "user",
                model: User,
                select: "name email profileImage _id username"
            }
        }).sort({ createdAt: -1 })

        return NextResponse.json(post.comments)
    } catch (error) {
        const result = error as Error
        return NextResponse.json({ error: result.message }, { status: 400 })
    }
}