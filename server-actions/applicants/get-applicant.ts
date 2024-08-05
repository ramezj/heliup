"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";

export async function getApplicantById(applicantId: string) {
    try {
        const applicant = await prisma.applicant.findUnique({
            where: {
                id: applicantId
            }
        });
        if(!applicant) {
            return {
                error: true,
                message: "Applicant doesnt exist"
            }
        }
        return { 
            error: false,
            applicant
        }
    } catch (error) {
        return {
            error: true,
            message: "Internal Server Error"
        }
    }
}