"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";

export async function getJobApplicants(jobId: string) {
    try {
        const job = await prisma.job.findUnique({
            where: {
                id: jobId
            },
            include: {
                applicants:{
                    orderBy: {
                        createdAt: "desc"
                    }
                }
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
            message: "Internal Server Error"
        }
    }
}