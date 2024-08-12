"use server"
import prisma from "@/utils/db"
import { auth } from "@/auth"
import { Organization } from "@prisma/client";
import { redirect } from "next/navigation";
import { r2 } from "@/utils/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function applyToJob(jobId: string, firstName: string, lastName: string, emailAddress: string, phoneNumber: number, motivation: string, formData: FormData) {
    const file:File = formData.get("file") as File;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const test = await new PutObjectCommand({
        Bucket: "hirehollo",
        Key: file.name,
        Body:buffer
    })
    try {
        const response = await r2.send(test);
        console.log(response);
        console.log("UPLOADED!");
    } catch (error) {
        console.log("ERROR");
    }
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