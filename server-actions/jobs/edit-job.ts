"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Job, Team, Type } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editJob(job:Job) {
    const session = await auth();
    if(!session) { redirect('/auth') }
    try {
        const updateJobData = await prisma.job.update({
            where: {
                id: job.id
            },
            data: {
                title:job.title,
                content: job.content,
                type: job.type,
                location: job.location
            }
        })
        revalidatePath('/jobs')
        return {
            error: false,
            job:updateJobData,
            message: "🎉 Updated Successfully"
        }
    } catch (error) {
        return {
            error: "Internal Server Error",
            job: null,
            message: "Internal Server Error"
        }
    }
}