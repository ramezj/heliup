import { getOrganizationBySlug } from "@/server-actions/organization/get-organization";
import { Job } from "@prisma/client"
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
    const organization = await getOrganizationBySlug(params.slug);
    if(organization?.error) { redirect('/') }
    return (
        <>
        {JSON.stringify(organization)}
        </>
    )
}