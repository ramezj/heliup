import Image from "next/image";
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserDashboard } from "@/server-actions/dashboard/getUserDashboard";
import { Organization } from "@prisma/client";

export default async function Page() {
  const session = await auth();
  if(!session) { redirect('/') }
  if(session.user?.firstTimeUser === true) { redirect('/onboarding') }
  const organization:Organization | null = await getUserDashboard();
  return (
   <>
   <h1 className="font-bold text-3xl">Jobs</h1>
   {JSON.stringify(organization)}
   </>
  );
}
