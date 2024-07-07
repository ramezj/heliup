"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";
import { redirect } from "next/navigation";

export  async function getUserDashboard() {
    const session = await auth();
    if(!session) { redirect('/auth') }
    const organization = await prisma.organization.findFirst({
        where:{
            userId:session.user?.id
        },
        include: {
            jobs:true
        }
    });
    return ( organization )
}