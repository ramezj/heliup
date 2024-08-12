import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { FreeCard } from "@/components/pricing";

export const metadata:Metadata = {
  title: "Pricing | HireHollo",
  description: "HireHollo, Your one-stop platform for creating and managing custom job boards.",
  applicationName: "HireHollo"

}

export default async function Page() {
  const session = await auth();
  return (
   <>
   <Navigation session={session}/>
   <div className="w-full items-center justify-center flex flex-col py-8">
    <h1 className="font-bold text-4xl justify-center">Simple pricing.</h1>
    <div className="flex sm:flex-row flex-col pt-8 gap-4">
    <FreeCard />
    <FreeCard />
    </div>
   </div>
   </>
  );
}
