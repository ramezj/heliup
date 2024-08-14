"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { Status } from "@prisma/client";

export async function EditApplicantStatusById(applicantId: string, status:Status) {
    const session = await auth();
    if(!session) {
        redirect('/auth');
    }
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
        const updateApplicant = await prisma.applicant.update({
            where: {
                id:applicantId
            },
            data: {
                status:status
            }
        })
        if(!updateApplicant) {
            return {
                error:true,
                message:"Something went wrong"
            }
        }
        return {
            ok:true,
            message:"Updated Successfully"
        }
    } catch (error) {
        return {
            error: true,
            message: "Internal Server Error"
        }
    }
}