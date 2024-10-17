import { NextRequest, NextResponse } from "next/server";
import { validateSignature } from "@/utils/validate-signature";
import prisma from "@/utils/db";

export async function POST(req: NextRequest) {
    const bodyText = await req.text();
    const parsedbody = new URLSearchParams(bodyText);
    const body = Object.fromEntries(parsedbody.entries());
    const resource_name = body?.resource_name;
    const subscription_id = body?.subscription_id;
    const userEmail = body?.user_email;
    const email = body?.email;
    console.log(body);
    // New Subscription
    if(resource_name == "sale") {
        const user = await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                isPremium: true,
                subscription_id: subscription_id
            }
        })
    }
    
    // Cancellation
    if(resource_name == "cancellation") {
        const user = await prisma.user.update({
            where: {
                email: userEmail,
                subscription_id: subscription_id
            },
            data: {
                isPremium: false,
            }
        })
    }
    return NextResponse.json({
        ok:true,
        error: null,
        message:bodyText
    })
}