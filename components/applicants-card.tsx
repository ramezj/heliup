"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Applicant, Job, Organization } from "@prisma/client"
import { Badge } from "./ui/badge"
import { Briefcase, Navigation, ArrowUpRight, SquareArrowOutUpRight, MapPin, Pin } from "lucide-react"
import { motion } from "framer-motion"
import { Skeleton } from "./ui/skeleton"
import ShineBorder from "./magicui/shine-border"
import { useRouter } from "next/navigation"
import { Status } from "@prisma/client"
import { formatApplicantType } from "@/utils/format"

export function ApplicantCard({ applicant }: { applicant: Applicant }) {
  const router = useRouter();
  const redirectToApplicant = () => {
    router.push(`/applicants/${applicant.jobId}/${applicant.id}`)
  }
    return (
      <div onClick={redirectToApplicant}>
      <ShineBorder color={"dark" ? "white" : "black"}
      className="w-full flex border rounded-lg items-center duration-300 cursor-pointer">
      <div className="m-5 flex flex-col items-start text-left">
        <p className='sm:text-lg text-md font-bold text-left text-black dark:text-white'>
         {applicant.first_name} {applicant.last_name}   
        </p>
        <div className="mt-3 -mb-2 flex gap-1">
        <Badge className="rounded-sm">{formatApplicantType(applicant.status)}</Badge>
        </div>
        </div>
        <div className="m-5 ml-auto">
        <Button variant={"outline"} size={"sm"}>
        View
        </Button>
        </div>
        </ShineBorder>
        </div>
      )
}
