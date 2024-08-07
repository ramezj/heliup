import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import EditJobTabs from "@/components/edit-job";
import Link from "next/link";
import { Trash } from "lucide-react";
import DeleteJobModal from "@/components/delete-job";

export const metadata:Metadata = {
    title: "Edit Job",
    description: "Edit Your Job."
}

export default async function Page({ params }: { params: { jobId: string } }) {
    const job = await getJobById(params.jobId);
    if(job?.error || job?.job === null) { redirect('/jobs') }
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl">{job.job?.title}</h1>
        <div className="flex gap-2">
        <DeleteJobModal jobId={job.job?.id!}/>
        </div>
        </div>
        <div className="w-full">
        <EditJobTabs job={job?.job as Job} />
        </div>
        </>
    )
}