"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Job, Organization } from "@prisma/client"
import { Badge } from "./ui/badge"
import { Briefcase, Navigation, ArrowUpRight, SquareArrowOutUpRight, MapPin, Pin } from "lucide-react"
import { motion } from "framer-motion"
import { Skeleton } from "./ui/skeleton"
import ShineBorder from "./magicui/shine-border"

export function JobCard({ job, organization }: { job: Job, organization:Organization }) {
    return (
        <Link href={`/${job.id}`} 
        className="w-full flex border dark:border-white/10 border-black/10 dark:hover:border-white/20 hover:border-black/30 rounded-lg items-center duration-300">
        <div className="m-5 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         {job.title}     
        </p>
        <div className="mt-3 -mb-2 flex gap-1">
        <Badge variant={"outline"} className="rounded-sm"><MapPin className="size-3 mr-1" />Cairo, EG</Badge>
        </div>
        </div>
        <div className="m-5 ml-auto">
        <Button variant={"outline"} size={"sm"}>
        View
        </Button>
        </div>
        </Link>
      )
}

export function LoadingJob() {
  return (
      <div
      className="w-full flex border dark:border-white/10 border-black/10 dark:hover:border-white/20 hover:border-black/30 rounded-lg items-center duration-300">
      <div className="m-5 flex flex-col items-start text-left">
      <Skeleton className="h-4 w-[100px]" />
      <div className="mt-3 -mb-2 flex gap-1">
      <Skeleton className="h-4 w-[125px]" />
      </div>
      </div>
      <div className="m-5 ml-auto">
      <Skeleton className="h-4 w-[75px]"/>
      </div>
      </div>
    )
}

export function JobCardForDashboard({ job }: { job: Job}) {
  return (
      <Link href={`jobs/${job.id}/edit`}
      className="w-full flex border dark:border-white/10 border-black/10 dark:hover:border-white/20 hover:border-black/30 rounded-lg items-center duration-300 cursor-pointer">
      <div className="m-5 flex flex-col items-start text-left">
      <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
       {job.title}     
      </p>
      <div className="mt-3 -mb-2 flex gap-1">
      <Badge className="rounded-sm cursor-default"><Briefcase className="w-3 h-3 mr-1" />{job.type}</Badge>
      </div>
      </div>
      <div className="m-5 ml-auto flex gap-2">
      <Button size={"sm"} variant={"outline"} asChild className="gap-1">
        <Link href={`jobs/${job.id}/applicants`}>
         View Applicants
        </Link>
      </Button>
      </div>
      </Link>
    )
}

export function LandingPageJobCard({ title, type }: { title: string, type: string }) {
  return (
      <ShineBorder color={"dark" ? "white" : "black"}
      className="w-full flex border rounded-lg items-center duration-300">
      <div className="m-5 flex flex-col items-start text-left">
      <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
       {title}     
      </p>
      <div className="mt-3 -mb-2 flex gap-1">
      <Badge variant={"outline"} className="rounded-sm"><MapPin className="size-3 mr-1" />Los Angeles, CA</Badge>
      </div>
      </div>
      <div className="m-5 ml-auto">
      <Button variant={"outline"} size={"sm"}>
        View
        </Button>
      </div>
      </ShineBorder>
    )
}