import Image from "next/image";
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserDashboard } from "@/server-actions/dashboard/getUserDashboard";
import { Organization } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { JobCard } from "@/components/job-card";

export default async function Page() {
  const session = await auth();
  if(!session) { redirect('/') }
  if(session.user?.firstTimeUser === true) { redirect('/onboarding') }
  const organization:Organization | null = await getUserDashboard();
  console.log(organization);
  return (
   <>
<>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-2xl">Overview</h1>
        <Button> <Plus className="w-4 h-4 mr-2"/> Create new Job</Button>
        </div>
        </>
   </>
  );
}
