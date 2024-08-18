'use client'
import { Loader2 } from "lucide-react"
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

export default function Loading() {
    const params = useParams<{ slug: string}>()
    return (
        <>
        <div className="w-full border-b border-0 h-16 sticky text-center justify-between flex items-center px-6 bg-black">
        <div className="flex">
        <h1 className="font-bold text-sm sm:text-base">{params.slug}</h1>
        </div>
        </div>
        <div className="w-full items-center flex flex-col justify-center">
        <Loader2 className="size-8 animate-spin text-gray-200" />
        </div>
        </>
    )
}