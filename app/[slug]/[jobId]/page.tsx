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

export async function generateMetadata({ params }: { params: { jobId: string } }): Promise<Metadata> {
    const job = await getJobById(params.jobId)
    return {
      title: job.job?.title
    };
}
export default async function Page({ params }: { params: { jobId: string } }) {
    const job = await getJobById(params.jobId);
    if(job?.error) { redirect('/jobs') }
    return (
        <>
        <div className="w-full flex flex-col items-center text-center p-8 gap-y-4">
            <h1 className="font-bold text-2xl">{job.job?.title}</h1>
            <div className="grid grid-cols-2 gap-4">
            <Badge variant={"outline"} className="rounded-sm">{job.job?.type}</Badge>
            <Badge variant={"outline"} className="rounded-sm">{job.job?.type}</Badge>
            </div>
            <div className="text-left w-full md:w-1/2" dangerouslySetInnerHTML={{__html: job.job?.content!}}>
            {/* <RenderContent content={job.job?.content!} /> */}
            </div>
            <ApplyCard jobId={params.jobId} />
        </div>
        </>
    )
}