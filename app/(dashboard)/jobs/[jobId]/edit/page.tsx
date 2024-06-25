import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import EditJobTabs from "@/components/edit-job-tabs";

export const metadata:Metadata = {
    title: "Edit Job",
    description: "Edit Your Job."
}

export default async function Page({ params }: { params: { jobId: string } }) {
    const job = await getJobById(params.jobId);
    if(job?.error) { redirect('/jobs') }
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl">Edit Job</h1>
        <Button size={"sm"}>Preview Job</Button>
        </div>
        <EditJobTabs job={job?.job as Job} />
        </>
    )
}