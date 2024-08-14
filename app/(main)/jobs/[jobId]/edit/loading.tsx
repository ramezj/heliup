import { Loader2, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Loading() {
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl">Configure Job</h1>
        <div className="flex gap-2">
        <Button variant={"outline"} size={"sm"}>
        <Trash className="w-4 h-4" />
        </Button>
        </div>
        </div>
        <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader2 className="size-8 animate-spin text-gray-200" />
        </div>
        </>
    )
}