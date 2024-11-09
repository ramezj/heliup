"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export  async function createJob(name: string) {
    const session = await auth();
    if(!session) { redirect('/auth') }
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: session.user?.id
            },
            include: {
                team: true
            }
        });
        const Job = await prisma.job.create({
            data: {
                title: name,
                type: "FULLTIME",
                content: "",
                teamId: user?.team?.id as string
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
            error: "Internal Server Error"
        }
    }
}