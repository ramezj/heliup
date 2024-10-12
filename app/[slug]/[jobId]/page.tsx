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
        <>
        <div className="z-50 top-0 border-b sticky">
        <div className="lg:w-1/2 w-full mx-auto bg-black h-16 sticky text-center justify-between flex items-center lg:px-0 px-4">
        <div className="flex">
        <Link className="font-medium text-xl sm:text-2xl align-middle" href='/'>{organization.organization?.name}</Link>
        </div>
        <div className="flex">
        <Toggle />
        </div>
        </div>
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
                <div className="lg:w-1/2 w-full rounded-lg border border-white/10 p-7 text-left" dangerouslySetInnerHTML={{__html: job.job?.content!}} />
                </>
                :
                <>
                </>
            }
            <ApplyCard jobId={params.jobId} />
        </div>
        </>
    )
}