import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from './utils/db';

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
    newUser: '/test'
    // newUser: '/test'
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret:process.env.AUTH_SECRET,
  session: {
    strategy: 'database'
  },
  trustHost: true,
  // callbacks: {
  //   async jwt({ token, user }) {
  //       if(user) {
  //           token.id = user.id
  //       }
  //     return token
  //   },
  //   async session({ token, session }) {
  //     if(session.user && token.sub) {
  //       session.user.id = token.sub
  //     } 
  //     return session;
  //   }
  // },
})