import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeartCrack } from "lucide-react"

export default function NotFound() {
    return (
        <>
            <div className="w-full flex flex-col items-center text-center p-8 pt-12">
            <h1 className="font-bold text-5xl flex align-middle items-center"><HeartCrack className="size-10 mr-2" />404</h1>
            <p className="text-muted-foreground pt-2">The page you are looking for does not exist, maybe try something else?</p>
            <br />
            <div className="flex flex-col gap-4 sm:w-1/2 w-full">
            <Button asChild>
                <Link href={`https://${process.env.NEXT_URL}`}>
                Back to home page
                </Link>
            </Button>
            </div>
        </div>
        </>
    )
}