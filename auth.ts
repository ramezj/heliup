import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from './utils/db';
import { hexoid } from "hexoid"

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
    async signIn({ user }) {
      if(user.firstTimeUser === true) {
        console.log("First time user Detected!");
        const generateSlug = hexoid(24);
        try {
          const organization = await prisma.organization.create({
            data: {
              userId: user.id!,
              name: `${user.name}'s organization`,
              slug: generateSlug()
            }
          })
          console.log("Organization created:", organization);
          const update_user = await prisma.user.update({
            where: {
              id: user.id!
            },
            data: {
              firstTimeUser: false
            }
          })
          console.log("Updated firstTimeUser!");
          return true;
        } catch (error) {
          console.error("error creating organization");
          return false;
        }
      }
      return true;
    },
    async session({ session, user }) {
      session.user = user;
      return session;
    }
  },
})