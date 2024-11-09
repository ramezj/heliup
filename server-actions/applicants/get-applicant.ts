"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { r2 } from "@/utils/r2";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

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
        const command = await new GetObjectCommand({
            Bucket:"hirehollo",
            Key:applicant.resumeKey
        });
        const url = await getSignedUrl(r2, command);
        return { 
            error: false,
            applicant,
            url
        }
    } catch (error) {
        return {
            error: true,
            message: "Internal Server Error"
        }
    }
}