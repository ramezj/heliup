"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";

export  async function getJobById(jobId: string) {
    const session = await auth();
    if(!session) { return {
        error: true,
        job:null,
        message: "Not authenticated"
    } }
    try {
        const job = await prisma.job.findUnique({
            where: {
                id: jobId
            }
        });
        if(!job) {
            return {
                error:true,
                message: "Job doesnt exist"
            }
        }
        return { 
            error: false,
            job
        }
    } catch (error) {
        return {
            error: true,
            message: "something went wrong, please try again later."
        }
    }
}