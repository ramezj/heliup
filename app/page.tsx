import Image from "next/image";
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "HireHollo",
  description: "Jobspire, Your one-stop platform for creating and managing custom job boards."
}

export default async function Page() {
  const session = await auth();
  return (
   <>
   <Navigation session={session}/>
   <div className="w-full text-center p-8">
    <h1 className="font-bold text-4xl">
      HireHollo
    </h1>
    <p className="text-muted-foreground">
      Hiring, for startups & small organizations.
    </p>
   </div>
   </>
  );
}
