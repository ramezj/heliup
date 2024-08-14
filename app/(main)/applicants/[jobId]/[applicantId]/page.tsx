import { getApplicantById } from "@/server-actions/applicants/get-applicant"
import { Metadata } from "next"
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatApplicantType } from "@/utils/format";
import { Applicant, Status } from "@prisma/client";
import { EditStatus } from "@/components/edit-status";

export const metadata:Metadata = {
    title: "View Applicants",
    description: "Edit Your Job."
}

export default async function Page({ params }: { params: { applicantId: string } }) {
    const applicant = await getApplicantById(params.applicantId)
    if(applicant.error) { redirect('/') }
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl tracking-tight">View Applicant</h1>
        </div>
        <div className="space-y-4"> 
        <div className="space-y-2">
        <Label className="text-lg">Full Name</Label>
        <Input value={`${applicant.applicant?.first_name} ${applicant.applicant?.last_name}`} readOnly />
        </div>
        <div className="space-y-2">
        <Label className="text-lg">Email Address</Label>
        <Input value={applicant.applicant?.email} readOnly />
        </div>
        <div className="space-y-2"> 
        <Label className="text-lg">Motivation Letter</Label>
        <Textarea value={applicant.applicant?.motivation} readOnly />
        </div>
        <div className="space-y-2"> 
        <Label className="text-lg">Status</Label>
        <div className="flex flex-row gap-2">
        <Input className="max-w-52" value={formatApplicantType(applicant.applicant?.status as Status)} readOnly />
        <EditStatus applicant={applicant.applicant as Applicant} />
        {/* <Button variant={"outline"}>Edit Status</Button> */}
        </div>
        </div>
        <div className="space-y-2"> 
        <Label className="text-lg">Resume</Label>
        <div>
        <Button asChild variant={"outline"}>
            <Link href={applicant.url!} target="_blank" download={applicant.url!}>
            Download Resume
            </Link>
        </Button>
        </div>
        </div>
        </div>
        </>
    )
}