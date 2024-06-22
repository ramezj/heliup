import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Job } from "@prisma/client"
import { Badge } from "./ui/badge"
import { Briefcase, Navigation, ArrowUpRight } from "lucide-react"

export function JobCard(job:Job) {
    return (
        <div className="w-full flex border border-white/10 rounded-lg items-center duration-300">
        <div className="m-5 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         {job.title}     
        </p>
        <div className="mt-3 -mb-2 flex gap-1">
        <Badge className="rounded-sm cursor-default"><Briefcase className="w-3 h-3 mr-1" />{job.type}</Badge>
        </div>
        </div>
        <div className="m-5 ml-auto">
        <Button asChild className="gap-1" size="sm">
          <Link target="_blank" href={`/job/${job.id}`}>
            <ArrowUpRight className="h-4 w-4"/>
          </Link>
        </Button>
        </div>
        </div>
      )
}