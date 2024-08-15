import { Skeleton } from "@/components/ui/skeleton"
import { LoadingJob } from "@/components/job-card"
import { Loader2 } from "lucide-react"

export default function Loading() {
    return (
        <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader2 className="size-8 animate-spin text-gray-200" />
        </div>
    )
}