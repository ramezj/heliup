import { Loader2 } from "lucide-react"

export default function Loading() {
    return (
        <>
        <div className="w-full h-screen items-center flex flex-col justify-center dark:bg-black bg-white">
        <Loader2 className="size-8 animate-spin dark:text-gray-200 text-gray-800" />
        </div>
        </>
    )
}