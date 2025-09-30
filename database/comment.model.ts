import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ret: "Post"
    },
}, { timestamps: true })

const Comment = mongoose.models.Comment || mongoose.model("Comment", CommentSchema)
export default Comment