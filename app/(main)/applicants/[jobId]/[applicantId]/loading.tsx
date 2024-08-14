import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

export default function Loading() {
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl tracking-tight">View Applicant</h1>
        </div>
        <div className="space-y-4"> 
        <div className="space-y-2">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-full h-10" />
        </div>
        <div className="space-y-2">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-full h-10" />
        </div>
        <div className="space-y-2"> 
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-full h-[4.17rem]" />
        </div>
        <div className="space-y-2"> 
        <Skeleton className="w-24 h-6" />
        <div className="flex flex-row gap-2">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-24 h-6" />
        </div>
        </div>
        <div className="space-y-2"> 
        <Skeleton className="w-24 h-6" />
        <div>
        <Button asChild variant={"outline"}>
        Download Resume
        </Button>
        </div>
        </div>
        </div>
        </>
    )
}