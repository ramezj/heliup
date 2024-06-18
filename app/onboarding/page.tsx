import { Metadata } from "next"
import { auth } from "@/auth";
import { Navigation } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Onboarding",
    description: "Create Organization",
  };

  export default async function Page() {
    const session = await auth();
      return (
        <>
        <Navigation session={session}/>
        <div className="flex items-center justify-center py-24">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Create Organization</h1>
            </div>
            <div className="grid gap-4">
              <div className="-mt-1">
                <Separator />
              </div>
              <Input placeholder="Organization Name"/>
              <Button>Create</Button>
            </div>
          </div>
        </div>
        </>
      );
    }