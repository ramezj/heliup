"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { redirect } from "next/navigation";

export  async function getUserBilling() {
    const session = await auth();
    if(!session) { redirect('/auth') }
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: session.user?.id
            }
        });
        return ( user )
    } catch (error) {
        console.error(error);
    }
}