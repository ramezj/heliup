"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";

export async function getOrganizationBySlug(slug: string) {
    try {
        const organization = await prisma.organization.findUnique({
            where: {
                slug: slug
            },
            include: {
                jobs: true
            }
        });
        if(!organization) {
            return {
                error:true,
                message: "Organization doesnt exist"
            }
        }
        return { 
            error: false,
            organization
        }
    } catch (error) {
        return {
            error: true,
            message: "something went wrong, please try again later."
        }
    }
}