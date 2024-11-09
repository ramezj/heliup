"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Job, Organization } from "@prisma/client"
import { Badge } from "./ui/badge"
import { Briefcase, Navigation, ArrowUpRight, SquareArrowOutUpRight, MapPin, Pin, Settings, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Skeleton } from "./ui/skeleton"
import ShineBorder from "./magicui/shine-border"
import { useRouter } from "next/navigation"
import { Prisma } from "@prisma/client"
import { UsersRound, Users } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

type JobWithApplicants = Prisma.JobGetPayload<{
  include: {
    applicants: true
  }
}>

export function JobCard({ job }: { job: Job }) {
  const formatJobType = (type:any) => {
    switch (type) {
        case 'FULLTIME':
            return 'Full-Time';
        case 'CONTRACT':
            return 'Contract';
        case 'INTERNSHIP':
            return 'Internship';
        case 'PARTTIME':
            return 'Part-Time';
        default:
            return type;
    }
  };
    return (
      <Link href={`/${job.id}`} target="_blank">
      <div 
      className="w-full flex border border-foreground/20 hover:border-foreground/30 rounded-lg items-center duration-300 pt-3 pb-3">
      <div className="mx-5 my-3 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         {job.title}     
        </p>
        <div className="mt-1 flex">
        <p className="text-xs text-muted-foreground">{formatDistanceToNow(job.createdAt)} ago</p>
        </div>
        </div>
        <div className="ml-auto mr-5">
          <Button size={"icon"} variant={"outline"} className="rounded-lg bg-inherit border border-foreground/20">
            <ArrowRight className="size-4" />
          </Button>
        </div>
        </div>
        </Link>
      )
}

export function LoadingJob() {
  return (
      <div
      className="w-full flex border dark:border-white/10 border-black/10 rounded-lg items-center duration-300">
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

export function JobCardForDashboard({ job }: { job: JobWithApplicants}) {
  const formatJobType = (type:any) => {
    switch (type) {
        case 'FULLTIME':
            return 'Full-Time';
        case 'CONTRACT':
            return 'Contract';
        case 'INTERNSHIP':
            return 'Internship';
        case 'PARTTIME':
            return 'Part-Time';
        default:
            return type;
    }
  };
  const router = useRouter();
  const handleApplicantsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`jobs/${job.id}/applicants`);
  };

  const handleCardClick = () => {
    router.push(`jobs/${job.id}/edit`);
  };
  return (
    <div onClick={handleCardClick}>
    <div className="w-full flex border border-foreground/20 hover:border-foreground/30 rounded-lg items-center duration-300 pt-3 pb-3 cursor-pointer">
    <div className="mx-5 my-3 flex flex-col items-start text-left">
      <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
       {job.title}     
      </p>
      <div className="mt-1 flex">
        <p className="text-xs text-muted-foreground">{formatDistanceToNow(job.createdAt)} ago</p>
        </div>
      </div>
      <div className="mr-5 ml-auto">
      <Button size={"sm"} variant={"outline"} className="rounded-lg bg-inherit border border-foreground/20">
        <Settings className="size-4"/>
      </Button>
      </div>
      </div>
      </div>
    )
}

export function JobCardForApplicants({ job }: { job: JobWithApplicants}) {
  const formatJobType = (type:any) => {
    switch (type) {
        case 'FULLTIME':
            return 'Full-Time';
        case 'CONTRACT':
            return 'Contract';
        case 'INTERNSHIP':
            return 'Internship';
        case 'PARTTIME':
            return 'Part-Time';
        default:
            return type;
    }
  };
  const router = useRouter();
  const handleApplicantsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`jobs/${job.id}/applicants`);
  };

  const handleCardClick = () => {
    router.push(`applicants/${job.id}`);
  };
  return (
    <div onClick={handleCardClick}>
    <div
    className="w-full flex border border-foreground/20 hover:border-foreground/30 rounded-lg items-center duration-300 pt-3 pb-3 cursor-pointer">
    <div className="mx-5 my-3 flex flex-col items-start text-left">
      <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
       {job.title}     
      </p>
      <div className="mt-1 flex">
        <p className="text-xs text-muted-foreground">{formatDistanceToNow(job.createdAt)} ago</p>
      </div>
      </div>
      <div className="ml-auto mr-5">
      <Button size={"sm"} variant={"outline"} onClick={handleApplicantsClick} className="rounded-lg bg-inherit border border-foreground/20">
        <Users className="size-4 mr-2" />
        {job.applicants.length} 
      </Button>
      </div>
      </div>
      </div>
    )
}

export function LandingPageJobCard({ title, type, location, age }: { title: string, type: string, location: string, age:string }) {
  return (
      <div color={"white"}
      className="w-full flex border border-foreground/20 hover:border-foreground/30 rounded-lg items-center duration-300 pt-3 pb-3 cursor-pointer">
      <div className="mx-5 my-3 flex flex-col items-start text-left">
      <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
       {title}     
      </p>
      <div className="mt-1 flex">
        <p className="text-xs text-muted-foreground">{age}</p>
      </div>
      </div>
      <div className="ml-auto mr-5">
      <Button className="rounded-lg bg-inherit border border-foreground/20" variant={"outline"} size={"icon"}>
        <ArrowRight className="size-4" />
      </Button>
      </div>
      </div>
    )
}