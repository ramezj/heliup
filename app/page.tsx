import Image from "next/image";
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
   <>
   <Navigation session={session}/>
   {JSON.stringify(session)}
   </>
  );
}
