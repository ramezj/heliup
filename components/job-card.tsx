import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Job } from "@prisma/client"

export function JobCard(job:Job) {
    return (
        <Link href={`/job/${job.id}`}>
        <Card className="w-[250px]">
            <CardHeader className="">
                <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
            </CardContent>
        </Card>
        </Link>
    )
}