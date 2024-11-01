import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { RenderContent } from "@/components/render-content";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ApplyCard from "@/components/apply-card";
import EditJobTabs from "@/components/edit-job";
import { getOrganizationBySlug } from "@/server-actions/organization/get-organization";
import { notFound } from 'next/navigation'
import Link from "next/link";
import { formatJobType } from "@/utils/format";
import { formatDistanceToNow } from "date-fns";
import { Toggle } from "@/components/toggle";
import { SlugNavbar } from "@/components/navbar";
import { Organization } from "@prisma/client";

export async function generateMetadata({ params }: { params: { jobId: string } }): Promise<Metadata> {
    const job = await getJobById(params.jobId)
    return {
      title: job.job?.title
    };
}
export default async function Page({ params }: { params: { jobId: string, slug:string } }) {
    const organization = await getOrganizationBySlug(params.slug);
    if(organization?.error) { 
        console.error("Not Found")
        notFound() 
    }
    const job = await getJobById(params.jobId);
    if(job?.error) { redirect('/') }
    return (
        <main className="dark:bg-black bg-white min-h-screen h-full">
        <div className="top-0 z-10 sticky">
        <SlugNavbar organization={organization.organization as Organization} />
        </div>
            <div className="w-full flex flex-col items-center text-center py-8 px-4 gap-y-4">
            <div>
            <h1 className="font-bold text-2xl">{job.job?.title}</h1>
            <p className="text-sm max-w-3xl text-muted-foreground">{formatDistanceToNow(job.job?.createdAt!)} ago </p>
            </div>
            <div className="flex flex-row gap-2">
            <Badge variant={"outline"} className="rounded-sm"><span className="mr-2">💼</span>{formatJobType(job.job?.type)}</Badge>
            {
                job?.job?.location
                ? <Badge variant={"outline"} className="rounded-sm"><span className="mr-2">🌎</span>{job.job?.location}</Badge>
                : <></>
            }
            </div>
            {
                job.job?.content
                ?  
                <>
                <div className="lg:w-1/2 w-full rounded-lg border border-foreground/20 p-7 text-left" dangerouslySetInnerHTML={{__html: job.job?.content!}} />
                </>
                :
                <>
                </>
            }
            <ApplyCard jobId={params.jobId} />
        </div>
        </main>
    )
}