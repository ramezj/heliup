import { Metadata } from "next"
import { auth } from "@/auth";
import { Navigation } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { CreateOrganization } from "@/components/create-organization";

export const metadata: Metadata = {
    title: "Onboarding",
    description: "Create Organization",
  };
export default async function Page() {
    const session = await auth();
    if(!session) redirect('/login');
    if(session.user?.firstTimeUser === false) { redirect ('/dashboard')}
      return (
        <>
        <Navigation session={session}/>
        <div className="flex items-center justify-center py-24">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Create Organization</h1>
            </div>
            <CreateOrganization />
          </div>
        </div>
        </>
      );
    }