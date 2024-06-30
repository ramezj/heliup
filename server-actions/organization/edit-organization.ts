"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Job, Organization } from "@prisma/client";

export async function editOrganization(organization:Organization) {
    const session = await auth();
    if(!session) { return {
        error: true,
        organization:null,
        message: "Not authenticated"
    }}
    try {
        const checkSlug = await prisma.organization.findFirst({
            where: {
                slug:organization.slug
            }
        })
        if(checkSlug) { return {
            error: true,
            organization:null,
            message:"Slug Already In Use"
        }}
        const updateOrg = await prisma.organization.update({
            where: {
                id: organization.id
            },
            data: {
                slug: organization.slug,
                name: organization.name,
                description: organization.name
            }
        })
        return {
            error: false,
            organization:updateOrg,
            message: "Updated Successfully!"
        }
    } catch (error) {
        return {
            error: false,
            organization: null,
            message: "Internal Server Error"
        }
    }
}