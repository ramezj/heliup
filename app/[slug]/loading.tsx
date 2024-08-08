import { Skeleton } from "@/components/ui/skeleton"
import { LoadingJob } from "@/components/job-card"

export default function Loading() {
    return (
        <div className="w-full flex flex-col items-center text-center p-8">
            <Skeleton className="h-4 w-[250px]" />
            <br />
            <div className="flex flex-col gap-4 sm:w-1/2 w-full">
            <LoadingJob />
            <LoadingJob />
            <LoadingJob />
            </div>
        </div>
    )
}