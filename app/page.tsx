import Image from "next/image";
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Jobspire",
  description: "Jobspire, Your one-stop platform for creating and managing custom job boards."
}

export default async function Page() {
  const session = await auth();
  return (
   <>
   <Navigation session={session}/>
   {JSON.stringify(session?.user)}
   </>
  );
}
