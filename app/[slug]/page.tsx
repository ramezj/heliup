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
        <div className="w-full border-b bg-black top-0 z-50 border-0 h-16 sticky text-center justify-between flex items-center px-6">
        <div className="flex">
        <Link className="font-bold text-sm sm:text-base" href='/'>{params.slug}</Link>
        </div>
        </div>
        <div className="w-full flex flex-col items-center text-center p-4 space-y-1 overflow-hidden">
            <h1 className="font-bold text-3xl pt-4">{organization.organization?.name}</h1>
            <p className="text-muted-foreground max-w-3xl">{organization.organization?.description}</p>
            <div className="flex sm:flex-row flex-col gap-4 sm:w-1/2 w-full pt-2 justify-center">
            <div className="w-full">
            <Select>
              <SelectTrigger className="bg-inherit w-full">
              <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-black">
                <SelectGroup>
                  <SelectItem value="FULLTIME">Full-Time</SelectItem>
                  <SelectItem value="PARTTIME">Part-Time</SelectItem>
                  <SelectItem value="INTERNSHIP">Internship</SelectItem>
                  <SelectItem value="CONTRACT">Contract</SelectItem>
                </SelectGroup>
              </SelectContent>
              </Select>
            </div>
            <div className="w-full">
            <Select>
              <SelectTrigger className="bg-inherit w-full">
              <SelectValue placeholder="Employment" />
              </SelectTrigger>
              <SelectContent className="bg-black">
                <SelectGroup>
                  <SelectItem value="FULLTIME">Full-Time</SelectItem>
                  <SelectItem value="PARTTIME">Part-Time</SelectItem>
                  <SelectItem value="INTERNSHIP">Internship</SelectItem>
                  <SelectItem value="CONTRACT">Contract</SelectItem>
                </SelectGroup>
              </SelectContent>
              </Select>
            </div>
            </div>
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