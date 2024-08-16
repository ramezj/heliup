import { Skeleton } from "@/components/ui/skeleton"
import { LoadingJob } from "@/components/job-card"
import { Loader2 } from "lucide-react"

export default function Loading() {
    return (
        <>
        <div className="w-full border-b border-0 h-16 sticky text-center justify-between flex items-center px-6">
        <div className="flex">
            <h1>loading</h1>
        </div>
        <div className="flex">
            <h1>loading</h1>
        </div>
        </div>
        <div className="w-full h-screen items-center flex flex-col justify-center">
        <Loader2 className="size-8 animate-spin text-gray-200" />
        </div>
        </>
    )
}