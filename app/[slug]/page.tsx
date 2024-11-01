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
import { Toggle } from "@/components/toggle";
import { SlugNavbar } from "@/components/navbar";

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
        <main className="dark:bg-black bg-white">
        <div className="top-0 z-10 sticky">
        <SlugNavbar organization={organization.organization as Organization} />
        </div>
        <ViewSlug organization={organization.organization as OrganizationWithJobs} locations={organization.locations as Array<string>} types={organization.types as Array<string>} />
        </main>
    )
}