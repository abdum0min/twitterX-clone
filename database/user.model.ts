import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    coverImage: String,
    profileImage: String,
}, {timestamps: true})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User