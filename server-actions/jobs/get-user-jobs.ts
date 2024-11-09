"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Team } from "@prisma/client";
import { redirect } from "next/navigation";

export async function getUserJobs() {
    const session = await auth();
    if(!session) { redirect('/auth') }
    const organization = await prisma.team.findFirst({
        where:{
            ownerId:session.user?.id
        },
        include: {
            jobs: {
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    applicants: true
                }
            }
        },
    });
    if(!organization) {
        return { 
            ok:false,
            message: 'Organization not found',
            jobs: null
        }
    }
    return {
        ok:true,
        message: "successful",
        jobs: organization.jobs
    }
}

export async function getUserJobsSortedByApplicants() {
    const session = await auth();
    if(!session) { redirect('/auth') }
    const organization = await prisma.team.findFirst({
        where:{
            ownerId:session.user?.id
        },
        include: {
            jobs: {
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    applicants: true
                }
            }
        },
    });
    if(!organization) {
        return { 
            ok:false,
            message: 'Organization not found',
            jobs: null
        }
    }
    return {
        ok:true,
        message: "successful",
        jobs: organization.jobs
    }
}