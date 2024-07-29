import { getJobById } from "@/server-actions/jobs/get-job"
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";
import { RenderContent } from "@/components/render-content";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
            <div className="text-left w-full md:w-1/2">
            <RenderContent content={job.job?.content!} />
            </div>
            <div className="lg:w-1/2 w-full rounded-lg border border-white/10 space-y-4 p-8 text-left">
            <div className="space-y-2">
            <Label htmlFor="name">First Name</Label>
            <Input placeholder="Joe" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">Last Name</Label>
            <Input placeholder="Biden" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">Email Address</Label>
            <Input placeholder="joebiden@gmail.com" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">Phone Number</Label>
            <Input placeholder="+20087163518" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">Location</Label>
            <Input placeholder="Los Angeles, CA"/>
            </div>
            <Button className="w-full">
            Apply Now
            </Button>
            </div>
        </div>
        </>
    )
}