"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";
import { redirect } from "next/navigation";

export async function applyToJob(jobId: string, firstName: string, lastName: string, emailAddress: string, phoneNumber: number, location: string, motivation: string) {
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
        const applicant = await prisma.applicant.create({
            data: {
                jobId: jobId,
                first_name: firstName,
                last_name: lastName,
                email: emailAddress,
                number: phoneNumber,
                motivation: motivation
            }
        })
        console.log(applicant);
        if(!applicant) {
            return { 
                ok:false,
                message: "Internl Server Error"
            }
        }
        return {
            ok:true,
            message: "Applied Successfully!"
        }
    } catch (error) {
        console.error(error);
        return {
            ok:false,
            message: "Internal Server Error"
        }
    }
}