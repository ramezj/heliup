import { getOrganizationBySlug } from "@/server-actions/team/get-team";
import { Job, Team } from "@prisma/client"
import { redirect } from "next/navigation";
import { JobCard } from "@/components/job-card";
import { Metadata } from "next";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"  
import { notFound } from 'next/navigation'
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react"
import { SelectLocation } from "@/components/select-location";
import { ViewSlug } from "@/components/view-slug";
import { Prisma } from "@prisma/client";
import { Toggle } from "@/components/toggle";
import { SlugNavbar } from "@/components/navbar";

type TeamWithJobs = Prisma.TeamGetPayload<{
  include: {
      jobs: true
  }
}>

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const team = await getOrganizationBySlug(params.slug);
    return {
      title: "Jobs at " + team.team?.name,
    };
}
export default async function Page({ params }: { params: { slug: string } }) {
    const team = await getOrganizationBySlug(params.slug);
    if(team?.error) { 
        console.error("Not Found")
        notFound() 
    }
    return (
        <main className="">
        <div className="top-0 z-10 sticky">
        <SlugNavbar team={team.team as Team} />
        </div>
        <ViewSlug team={team.team as TeamWithJobs} locations={team.locations as Array<string>} types={team.types as Array<string>} />
        </main>
    )
}