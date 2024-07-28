import { getOrganizationBySlug } from "@/server-actions/organization/get-organization";
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { JobCard } from "@/components/job-card";
import { Metadata } from "next";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"  
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const organization = await getOrganizationBySlug(params.slug);
    return {
      title: organization.organization?.slug,
    };
}
export default async function Page({ params }: { params: { slug: string } }) {
    const organization = await getOrganizationBySlug(params.slug);
    if(organization?.error) { 
        console.error("Not Found")
        notFound() 
    }
    return (
        <div className="w-full flex flex-col items-center text-center p-8">
            <h1 className="font-bold text-2xl">{organization.organization?.name}</h1>
            <p className="text-muted-foreground">{organization.organization?.description}</p>
            <br />
            <div className="flex flex-col gap-4 lg:w-1/2 w-full">
            {organization.organization?.jobs.map((job:Job) => {
                return (
                    <div key={job.id}>
                    <JobCard job={job} organization={organization.organization} />
                    </div>
                )
            })}
            </div>
        </div>
    )
}