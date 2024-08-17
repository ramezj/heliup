import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { FreeCard, PaidCard } from "@/components/pricing";

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
    <div className="space-y-1">
    <h1 className="font-bold text-4xl justify-center text-center">Pricing</h1>
    <p className="text-muted-foreground">
      Prices listed reflect the monthly subscription fee.
    </p>
    </div>
    <div className="flex flex-wrap pt-8 gap-4 w-full items-center justify-center">
      <div className="relative">
      <FreeCard />
      </div>
      <div className="relative">
      <PaidCard />
      </div>
    </div>
   </div>
   </>
  );
}
