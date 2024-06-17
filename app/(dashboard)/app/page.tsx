import Image from "next/image";
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Metadata } from "next";

export default async function Page() {
  const session = await auth();
  return (
   <>
   {JSON.stringify(session)}
   </>
  );
}
