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
import { useRouter } from "next/navigation"
import { Prisma } from "@prisma/client"

type JobWithApplicants = Prisma.JobGetPayload<{
  include: {
    applicants: true
  }
}>

export function JobCard({ job, organization }: { job: Job, organization:Organization }) {
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
      <Link href={`/${job.id}`}>
      <ShineBorder color={"dark" ? "white" : "black"}
      className="w-full flex border rounded-lg items-center duration-300">
      <div className="m-5 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         {job.title}     
        </p>
        <div className="mt-3 -mb-2 flex gap-2">
        <Badge className="rounded-sm"><span className="mr-2">💼</span>{formatJobType(job.type)}</Badge>
          {
            job.location 
            ?  <Badge className="rounded-sm"><span className="mr-2">🌎</span>{job.location}</Badge>
            :  <></>
          }
        </div>
        </div>
        {/* <div className="m-5 ml-auto">
        <Button variant={"outline"} size={"sm"}>
        View
        </Button>
        </div> */}
        </ShineBorder>
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
    <ShineBorder color={"dark" ? "white" : "black"}
    className="w-full flex border rounded-lg items-center duration-300 cursor-pointer">
    <div className="m-5 flex flex-col items-start text-left">
      <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
       {job.title}     
      </p>
      <div className="mt-3 -mb-2 flex gap-1">
      <Badge className="rounded-sm"><span className="mr-2">💼</span>{formatJobType(job.type)}</Badge>
      </div>
      </div>
      <div className="m-5 ml-auto flex gap-2">
       <p className="font-medium mr-4">Edit</p>
      </div>
      </ShineBorder>
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
    <ShineBorder color={"dark" ? "white" : "black"}
    className="w-full flex border rounded-lg items-center duration-300 cursor-pointer">
    <div className="m-5 flex flex-col items-start text-left">
      <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
       {job.title}     
      </p>
      <div className="mt-3 -mb-2 flex gap-1">
      <Badge className="rounded-sm"><span className="mr-2">💼</span>{formatJobType(job.type)}</Badge>
      </div>
      </div>
      <div className="m-5 ml-auto flex gap-2">
      <Button size={"sm"} variant={"outline"} onClick={handleApplicantsClick} className="gap-1">
        {job.applicants.length} Applicants
      </Button>
      </div>
      </ShineBorder>
      </div>
    )
}

export function LandingPageJobCard({ title, type, location }: { title: string, type: string, location: string }) {
  return (
      <ShineBorder color={"dark" ? "white" : "black"}
      className="w-full flex border rounded-lg items-center duration-300">
      <div className="m-5 flex flex-col items-start text-left">
      <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
       {title}     
      </p>
      <div className="mt-3 -mb-2 flex gap-1">
      <Badge className="rounded-sm"><MapPin className="size-3 mr-1" />{location}</Badge>
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