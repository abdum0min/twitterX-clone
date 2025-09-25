import { AuthOptions } from "next-auth"
import { connectDatabase } from "./mongoose";
import User from "@/database/user.model";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectDatabase()

                const user = await User.findOne({ email: credentials?.email })

                return user
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })

    ],
    callbacks: {
        async session({ session }: any) {
            await connectDatabase()
            const isExistingUser = await User.findOne({ email: session.user?.email })
            if (!isExistingUser) {
                const user = await User.create({
                    name: session.user?.name,
                    email: session.user?.email,
                    profileImage: session.user?.image,
                })
                session.currentuser = user
            }
            session.currentuser = isExistingUser

            return session
        }
    },
    session: { strategy: 'jwt' },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login'
    }
}