import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from './utils/db';

// prisma.$use(async(params, next) => {
//   if(params.model == "User" && params.action == "create") {
//     const result = await next(params);
//     console.log(result);
//   }
// })

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth',
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
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    }
  },
})