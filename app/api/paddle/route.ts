import { NextRequest, NextResponse } from "next/server";
import { validateSignature } from "@/utils/validate-signature";

export async function POST(req: NextRequest) {
    const signature = req.headers.get("Paddle-Signature");
    const body = await req.text();
    // const isValid = await validateSignature(signature!, body, process.env.PADDLE_SECRET!);
    // if(!isValid) {
    //     return NextResponse.json({
    //         ok:false,
    //         message:null,
    //         error:"Invalid Signature"
    //     });
    // };
    // const parsedbody = await JSON.parse(body);
    console.log(body);
    return NextResponse.json({
        ok:true,
        error: null,
        message:body
    })
}