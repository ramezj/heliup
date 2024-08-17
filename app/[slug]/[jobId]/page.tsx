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

export async function generateMetadata({ params }: { params: { jobId: string } }): Promise<Metadata> {
    const job = await getJobById(params.jobId)
    return {
      title: job.job?.title
    };
}
export default async function Page({ params }: { params: { jobId: string, slug:string } }) {
    const job = await getJobById(params.jobId);
    if(job?.error) { redirect('/') }
    return (
        <>
            <div className="w-full border-b border-0 h-16 sticky text-center justify-between flex items-center px-6">
            <div className="flex">
                <h1 className="font-bold text-sm sm:text-base">{params.slug}</h1>
            </div>
            </div>
            <div className="w-full flex flex-col items-center text-center py-8 px-4 gap-y-4">
            <h1 className="font-bold text-2xl">{job.job?.title}</h1>
            <div className="grid grid-cols-2 gap-4">
            <Badge variant={"outline"} className="rounded-sm">{job.job?.type}</Badge>
            <Badge variant={"outline"} className="rounded-sm">{job.job?.type}</Badge>
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