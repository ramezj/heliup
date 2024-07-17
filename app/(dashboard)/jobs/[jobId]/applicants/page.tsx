import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import EditJobTabs from "@/components/edit-job";
import Link from "next/link";
import { Trash } from "lucide-react";

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
        <h1 className="font-bold text-3xl">Applicants</h1>
        </div>
        </>
    )
}