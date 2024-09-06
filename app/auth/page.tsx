import Link from "next/link";
import { Metadata } from "next"
import { Separator } from "@/components/ui/separator" 
import { GoogleSignIn } from "@/components/auth/GoogleSignIn";
import { GithubSignIn } from "@/components/auth/GithubSignIn";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Card } from "@/components/ui/card";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your heliup account",
};

export default async function Page() {
  const session = await auth();
    return (
      <>
      <Navigation session={session}/>
      <div className="flex items-center justify-center py-24">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back 👋🏼</h1>
          </div>
          <div className="grid gap-4">
            <div className="-mt-2">
              <Separator />
            </div>
                <GoogleSignIn />
                <div className="text-center">
                <p className="text-muted-foreground text-sm">by signing up you agree to our <Link className="underline" href={'/policy'}>terms and conditions</Link></p>
                </div>
                {/* <GithubSignIn /> */}
          </div>
        </div>
      </div>
      </>
    );
  }
  