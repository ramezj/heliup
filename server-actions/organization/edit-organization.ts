"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Job, Organization } from "@prisma/client";

export async function editOrganization(organization:Organization) {
    console.log(organization);
    const session = await auth();
    if(!session) { return {
        error: true,
        organization:null,
        message: "Not authenticated"
    }}
    try {
        const updateOrg = await prisma.organization.update({
            where: {
                id: organization.id
            },
            data: {
                ...organization
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