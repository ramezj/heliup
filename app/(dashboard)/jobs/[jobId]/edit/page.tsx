import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function Page({ params }: { params: { jobId: string } }) {
    const job = await getJobById(params.jobId);
    console.log(job);
    if(job?.error) { redirect('/jobs') }
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl">Edit Job</h1>
        <Button>Preview Job</Button>
        </div>
        {job?.job?.title}
        </>
    )
}