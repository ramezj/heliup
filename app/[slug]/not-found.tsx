import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function NotFound() {
    return (
        <>
            <div className="w-full flex flex-col items-center text-center p-8">
            <h1 className="font-bold text-2xl">404</h1>
            <p className="text-muted-foreground">Board not found, maybe try something else?</p>
            <br />
            <div className="flex flex-col gap-4 sm:w-1/2 w-full">
            <Button>
                Back to home page
            </Button>
            </div>
        </div>
        </>
    )
}