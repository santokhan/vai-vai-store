import NextAuth, { AuthOptions } from 'next-auth'
// import Providers from 'next-auth/providers'
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/signin",
        newUser: undefined,
    }
}

const Auth = NextAuth(authOptions)

export default Auth;