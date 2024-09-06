import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { FreeCard, PaidCard } from "@/components/pricing";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Pricing",
  description: "Heliup, Your one-stop platform for creating and managing custom job boards.",
  applicationName: "Heliup"

}

export default async function Page() {
  const session = await auth();
  return (
   <>
    <div className="top-0 sticky z-50">
   <Navigation session={session}/>
   </div>
   <div className="w-full text-center flex flex-col py-8">
    <div className="space-y-1">
    <h1 className="font-bold text-4xl justify-center text-center">Pricing</h1>
    <p className="text-muted-foreground w-full pr-8 pl-8">
    Hiring shouldn&apos;t be a financial burden, which is why we provide a cost-effective solution.
    </p>
    <Link href="/policy" className="underline">terms and conditions</Link>
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
