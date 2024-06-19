"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";

type OrganizationProps = {
    name: string,
    slug: string,
    website: string
}

export  async function createOrganization(props: OrganizationProps) {
    const session = await auth();
    if(!session) { return null }
    if(session.user?.firstTimeUser != true) {
        return ({
            ok:false,
            organization:null,
            error:'User already has organization'
        });
    }
    try {
        const organization = await prisma.organization.create({
            data: {
                userId: session.user.id as string,
                name: props.name,
                slug: props.slug,
                website: props.website
            }
        })
        const updateUser = await prisma.user.update({
            where: {
                id: session.user.id as string
            }, 
            data: {
                firstTimeUser: false
            }
        })
        return ({
            ok:true,
            organization,
            error:null
        } )
    } catch (error) {
        return ({
            ok: false,
            organization:null,
            error:error
        })
    }
}