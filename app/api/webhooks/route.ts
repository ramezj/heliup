import { NextRequest, NextResponse } from "next/server";
import { validateSignature } from "@/utils/validate-signature";

export async function POST(req: NextRequest) {
    const bodyText = await req.text();
    const parsedbody = new URLSearchParams(bodyText);
    const body = Object.fromEntries(parsedbody.entries());
    console.log(body);
    return NextResponse.json({
        ok:true,
        error: null,
        message:bodyText
    })
}