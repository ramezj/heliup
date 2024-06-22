"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache";

export  async function createJob(name: string) {
    const session = await auth();
    if(!session) { return null }
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: session.user?.id
            },
            include: {
                organization: true
            }
        });
        const Job = await prisma.job.create({
            data: {
                title: name,
                type: "FULLTIME",
                content: "",
                organizationId: user?.organization?.id as string
            }
        })
        revalidatePath('/jobs');
        return {
            ok:true,
            job:Job,
            error: null
        }
    } catch (error) {
        return {
            ok:false,
            job: null,
            error: "Something went completely wrong - try again later."
        }
    }
}