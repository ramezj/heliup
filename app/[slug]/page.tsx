import { getOrganizationBySlug } from "@/server-actions/organization/get-organization";
import { Job, Organization } from "@prisma/client"
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

type OrganizationWithJobs = Prisma.OrganizationGetPayload<{
  include: {
      jobs: true
  }
}>

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const organization = await getOrganizationBySlug(params.slug);
    return {
      title: "Jobs at " + organization.organization?.name,
    };
}
export default async function Page({ params }: { params: { slug: string } }) {
    const organization = await getOrganizationBySlug(params.slug);
    if(organization?.error) { 
        console.error("Not Found")
        notFound() 
    }
    return (
        <>
        <div className="w-full border-b bg-black top-0 z-50 border-0 h-16 sticky text-center justify-between flex items-center px-6">
        <div className="flex">
        <Link className="font-bold text-sm sm:text-base" href='/'>{organization.organization?.name}</Link>
        </div>
        </div>
        <ViewSlug organization={organization.organization as OrganizationWithJobs} locations={organization.locations as Array<string>} />
        </>
    )
}