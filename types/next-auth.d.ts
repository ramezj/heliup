// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      firstTimeUser?: boolean;
      isPremium?: boolean;
    };
  }

  interface User {
    id: string;
    email: string;
    firstTimeUser: boolean;
    isPremium: boolean;
    // Add other fields from the User model if needed
  }
}
