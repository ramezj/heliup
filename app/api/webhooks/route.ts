import { NextRequest, NextResponse } from "next/server";
import { validateSignature } from "@/utils/validate-signature";

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({
        ok:true,
        error: null,
        message:body
    })
}