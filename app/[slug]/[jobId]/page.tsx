import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { RenderContent } from "@/components/render-content";

export default async function Page({ params }: { params: { jobId: string } }) {
    const job = await getJobById(params.jobId);
    if(job?.error) { redirect('/jobs') }
    console.log(job.job?.content)
    return (
        <>
        <div className="w-full flex flex-col items-center text-center p-8">
            <h1 className="font-bold text-2xl">{job.job?.title}</h1>
            <div>
                <RenderContent content={job.job?.content!} />
            </div>
        </div>
        </>
    )
}