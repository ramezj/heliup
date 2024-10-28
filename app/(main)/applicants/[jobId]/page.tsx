import { Applicant, Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import EditJobTabs from "@/components/edit-job";
import Link from "next/link";
import { Trash } from "lucide-react";
import { ApplicantCard } from "@/components/applicants-card";
import { getJobApplicants } from "@/server-actions/applicants/get-job-applicants";

export const metadata:Metadata = {
    title: "View Applicants",
    description: "Edit Your Job."
}

export default async function Page({ params }: { params: { jobId: string } }) {
    const job = await getJobApplicants(params.jobId);
    if(job?.error || job?.job === null) { redirect('/jobs') }
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl tracking-tight">{job.job?.title}</h1>
        </div>
        <div className="flex flex-col gap-4">
        {
            job?.job?.applicants.length === 0 && 
            <>
            <p className="text-muted-foreground font-normal">No Applicants Yet</p>
            </>
        }
        {
            job.job?.applicants.map((applicant:Applicant) => {
                return (
                    <div className="relative" key={applicant.id}>
                    <ApplicantCard applicant={applicant} />
                    </div>
                )
            })
        }
        </div>
        </>
    )
}