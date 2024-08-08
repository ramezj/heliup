import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { jobId: string } }) {
    const job = await getJobById(params.jobId);
    console.log(job);
    if(job?.error) { redirect('/jobs') }
    return (
        <>
        {JSON.stringify(job?.job)}
        </>
    )
}