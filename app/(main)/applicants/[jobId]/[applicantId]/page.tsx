import { getApplicantById } from "@/server-actions/applicants/get-applicant"
import { Metadata } from "next"
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

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
        <div className="space-y-2">
        <Label>Full Name</Label>
        <Input value={`${applicant.applicant?.first_name} ${applicant.applicant?.last_name}`} readOnly />
        {/* <h1 className="text-xl font-medium">{applicant.applicant?.first_name} {applicant.applicant?.last_name}</h1> */}
        </div>
        <div className="space-y-2">
        <Label>Email Address</Label>
        <Input value={applicant.applicant?.email} readOnly />
        </div>
        <div className="space-y-2"> 
        <Label className=" text-lg">Motivation Letter</Label>
        <div className="">
        <Textarea value={applicant.applicant?.motivation} readOnly />
        </div>
        </div>
        </>
    )
}