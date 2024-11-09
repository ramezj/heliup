"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Job, Team } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editOrganization(team:Team) {
    const session = await auth();
    if(!session) { redirect('/auth') }
    try {
        const orgExists = await prisma.team.findFirst({
            where:{
                id: team.id
            }
        })
        if(!orgExists) {
            return {
                error: true,
                organization:null,
                message: "please create an organization first."
            }
        }
        const checkSlug = await prisma.team.findFirst({
            where: {
                slug: {
                    equals: team.slug,
                    mode: 'insensitive'
                }
            }
        })
        if(checkSlug && team.slug != orgExists.slug) { return {
            error: true,
            organization:null,
            message:"Slug Already In Use"
        }}
        const updateOrg = await prisma.team.update({
            where: {
                id: team.id
            },
            data: {
                slug: team.slug,
                name: team.name,
                description: team.description,
                twitter: team.twitter,
                website: team.website
            }
        })
        revalidatePath('/dashboard');
        return {
            error: false,
            organization:updateOrg,
            message: "🎉 Updated Successfully"
        }
    } catch (error) {
        return {
            error: false,
            organization: null,
            message: "Internal Server Error"
        }
    }
}