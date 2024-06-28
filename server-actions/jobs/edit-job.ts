"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Job, Organization } from "@prisma/client";

export async function editJob(job:Job) {
    const session = await auth();
    if(!session) { return {
        error: true,
        job:null,
        message: "Not authenticated"
    }}
    try {
        const updateJobData = await prisma.job.update({
            where: {
                id: job.id
            },
            data: {
                title:job.title,
                content: job.content,
                type: job.type
            }
        })
    } catch (error) {
        
    }
}