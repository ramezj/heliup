import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function Loading() {
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl tracking-tight">View Applicant</h1>
        </div>
        <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader2 className="size-8 animate-spin text-gray-200" />
        </div>
        </>
    )
}