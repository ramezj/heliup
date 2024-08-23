"use client"
import { useState } from "react"
import { Organization } from "@prisma/client"
import { Prisma } from "@prisma/client"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"  
import { SelectLocation } from "./select-location" 
import { Job } from "@prisma/client"
import { JobCard } from "./job-card"
import { motion } from "framer-motion"

type OrganizationWithJobs = Prisma.OrganizationGetPayload<{
    include: {
        jobs: true
    }
}>
  
export function ViewSlug({ organization, locations } : { organization:OrganizationWithJobs, locations:Array<string>}) {
    const [ originalJobs, setOriginalJobs ] = useState<Array<Job>>(organization.jobs);
    const [ jobs, setJobs ] = useState<Array<Job>>(organization.jobs);
    const filterJobs = (location : string) => {
        if (location === "All") {
            setJobs(originalJobs);
        } else {
            const updateItems = originalJobs.filter((job) => job.location === location);
            setJobs(updateItems);
        }
    }
    return (
    <div className="w-full flex flex-col items-center text-center p-4 space-y-1 overflow-hidden">
    <h1 className="font-bold text-3xl pt-4">{organization?.name}</h1>
    <p className="text-muted-foreground max-w-3xl">{organization?.description}</p>
    <div className="flex sm:flex-row flex-col gap-4 sm:w-1/2 w-full pt-2 justify-center">
    <div className="w-full">
    {/* <SelectLocation locations={locations as Array<string>} /> */}
    <Select onValueChange={((e) => {filterJobs(e);})}>
        <SelectTrigger className="bg-inherit w-full">
        <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent className="bg-black">
          <SelectGroup>
            <SelectItem value="All">All</SelectItem>
            {
              locations.map((location, index) => {
                return (
                  <>
                  <SelectItem key={index} value={location}>{location}</SelectItem>
                  </>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
    </Select>
    </div>
    <div className="w-full">
    <Select>
      <SelectTrigger className="bg-inherit w-full">
      <SelectValue placeholder="Employment" />
      </SelectTrigger>
      <SelectContent className="bg-black">
        <SelectGroup>
          <SelectItem value="FULLTIME">Full-Time</SelectItem>
          <SelectItem value="PARTTIME">Part-Time</SelectItem>
          <SelectItem value="INTERNSHIP">Internship</SelectItem>
          <SelectItem value="CONTRACT">Contract</SelectItem>
        </SelectGroup>
      </SelectContent>
      </Select>
    </div>
    </div>
    <div className="flex flex-col gap-4 lg:w-1/2 w-full pt-2">
    {jobs.map((job:Job, index) => {
        return (
            <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1}}
            transition={{ duration: 0.3, delay: index * 0.2}}
            key={job.id} className="relative">
            <JobCard job={job} organization={organization} />
            </motion.div>
        )
    })}
    </div>
</div>
    )
}