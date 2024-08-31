"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Job, Organization, Type } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteJob(jobId: string) {
    const session = await auth();
    if(!session) { redirect('/auth') }
    try {
        const job = await prisma.job.findFirst({
            where: {
                id: jobId
            },
            include: {
                organization: true
            }
        })
        if(!job) {
            return {
                ok:false,
                message: "Job Not Found."
            }
        }
        if(job.organization.userId != session.user?.id) {
            return {
                ok:false,
                message: "User MissMatch"
            }
        }
        const deleteJob = await prisma.job.delete({
            where: {
                id:jobId
            }
        })
        revalidatePath('/jobs');
        return {
            ok:true,
            message: "Job Deleted Successfully"
        }
    } catch (error) {
        return {
            ok:false,
            message: "Internal Server Error"
        }
    }
}