import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import ConfigureJob from "@/components/edit-job";
import Link from "next/link";
import { Trash } from "lucide-react";
import DeleteJobModal from "@/components/delete-job";

export const metadata:Metadata = {
    title: "Configure Job",
    description: "Configure Your Job."
}

export default async function Page({ params }: { params: { jobId: string } }) {
    const job = await getJobById(params.jobId);
    if(job?.error || job?.job === null) { redirect('/jobs') }
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl">Configure Job</h1>
        <div className="flex gap-2">
        <DeleteJobModal jobId={job.job?.id!}/>
        </div>
        </div>
        <div className="w-full -mt-2">
        <ConfigureJob job={job?.job as Job} />
        </div>
        </>
    )
}