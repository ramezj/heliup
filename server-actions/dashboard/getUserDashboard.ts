"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";

export  async function getUserDashboard() {
    const session = await auth();
    if(!session) { return null }
    const organization:Organization | null = await prisma.organization.findFirst({
        where:{
            userId:session.user?.id
        }
    });
    return ( organization )
}