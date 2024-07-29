"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";
import { redirect } from "next/navigation";

export async function applyToJob(jobId: string, firstName: string, lastName: string, emailAddress: string, phoneNumber: number, location: string) {
    try {
        const job = await prisma.job.findFirst({
            where: {
                id:jobId
            }
        })
        if(!job) {
            return { 
                ok:false,
                message: "Job Does Not Exist"
            }
        }
    } catch (error) {
        return {
            ok:false,
            message: "Internal Server Error"
        }
    }
}