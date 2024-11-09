"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";
import { redirect } from "next/navigation";

export async function getUserDashboard() {
    const session = await auth();
    if(!session) { redirect('/auth') }
    try {
        const organization = await prisma.organization.findFirst({
            where:{
                userId: session.user?.id
            },
            include: {
                jobs:true
            }
        });
        const totalApplicants = await prisma.organization.findUnique({
            where: { userId: session.user?.id },
            select: {
              jobs: {
                select: {
                  _count: {
                    select: {
                      applicants: true,
                    },
                  },
                },
              },
            },
          });
          const totalApplicantCount = totalApplicants?.jobs.reduce(
            (total, job) => total + job._count.applicants,
            0
          ) ?? 0;
          return {
            ok:true,
            organization,
            totalApplicants: totalApplicantCount
          }
    } catch (error) {
        console.error(error);
        return {
            ok:false,
            organization:null,
            totalApplicants: null
        }
    }
}