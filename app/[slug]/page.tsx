import { getOrganizationBySlug } from "@/server-actions/organization/get-organization";
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { JobCard } from "@/components/job-card";
import { Metadata } from "next";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"  
import { notFound } from 'next/navigation'
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const organization = await getOrganizationBySlug(params.slug);
    return {
      title: organization.organization?.name,
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
        <div className="w-full border-b border-0 h-16 sticky text-center justify-between flex items-center px-6">
        <div className="flex">
            <h1 className="font-bold text-sm sm:text-base">{params.slug}</h1>
        </div>
        </div>
        <div className="w-full flex flex-col items-center text-center p-4 space-y-1">
            <h1 className="font-bold text-3xl pt-4">{organization.organization?.name}</h1>
            <p className="text-muted-foreground max-w-3xl">{organization.organization?.description}</p>
            <div className="flex flex-col gap-4 lg:w-1/2 w-full pt-2">
            {organization.organization?.jobs.map((job:Job) => {
                return (
                    <div key={job.id} className="relative">
                    <JobCard job={job} organization={organization.organization} />
                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
}