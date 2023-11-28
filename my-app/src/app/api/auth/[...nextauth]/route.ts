import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         email: {},
        //         password: {}
        //     },
        //     async authorize(credentials, req) {
        //         try {
        //             const res = await fetch("/your/endpoint", {
        //                 method: 'POST',
        //                 body: JSON.stringify(credentials),
        //                 headers: { "Content-Type": "application/json" }
        //             })
        //             const user = await res.json()
        //             if (res.ok && user) {
        //                 return user
        //             }
        //             return null
        //         }
        //         catch (err) {
        //             console.log(err);
        //         }
        //     }
        // }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    callbacks: {

        async signIn({ user, account }: { user: any, account: any }) {
            if (account.provider === 'Google') {
      
            }
            return user
        }
    },
    page: {
        signIn: "/login"
    }
}
export const headers = NextAuth(authOptions)
export { headers as GET, headers as POST }