'use client'
import { Loader2 } from "lucide-react"
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Loading() {
    const params = useParams<{ slug: string}>()
    return (
        <div className="min-h-screen">
        <div className="w-full border-b border-0 h-16 sticky text-center justify-between flex items-center px-6 bg-black">
        <div className="flex">
        <Link className="font-bold text-sm sm:text-base" href='/'>{params.slug}</Link>
        </div>
        </div>
        <div className="w-full h-screen items-center flex flex-col justify-center content-center place-content-center">
        <Loader2 className="size-8 animate-spin text-gray-200" />
        </div>
        </div>
    )
}