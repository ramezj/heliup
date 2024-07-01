"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Job, Organization } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function editOrganization(organization:Organization) {
    const session = await auth();
    if(!session) { return {
        error: true,
        organization:null,
        message: "Not authenticated"
    }}
    try {
        const orgExists = await prisma.organization.findFirst({
            where:{
                id: organization.id
            }
        })
        if(!orgExists) {
            return {
                error: true,
                organization:null,
                message: "please create an organization first."
            }
        }
        const checkSlug = await prisma.organization.findFirst({
            where: {
                slug: {
                    equals: organization.slug,
                    mode: 'insensitive'
                }
            }
        })
        if(checkSlug && organization.slug != orgExists.slug) { return {
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
                description: organization.description
            }
        })
        revalidatePath('/dashboard');
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