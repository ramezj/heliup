import { getApplicantById } from "@/server-actions/applicants/get-applicant"
import { Metadata } from "next"
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

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
        <h1 className="text-xl font-medium">{applicant.applicant?.first_name} {applicant.applicant?.last_name}</h1>
        <Badge className="rounded-md">{applicant.applicant?.email}</Badge>
        <h1>{applicant.applicant?.motivation}</h1>
        </div>
        </>
    )
}