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
        <h1 className="font-bold text-3xl">Edit Job</h1>
        <div className="flex gap-2">
        <Button variant={"outline"} asChild size={"sm"}>
            <Link href={`/job/${job.job?.id}`}>
            <Trash className="w-4 h-4" />
            </Link>
        </Button>
        {/* <Button asChild size={"sm"}>
            <Link href={`/job/${job.job?.id}`}>
            Preview Job
            </Link>
        </Button> */}
        </div>
        </div>
        <div className="w-full">
        <EditJobTabs job={job?.job as Job} />
        </div>
        </>
    )
}