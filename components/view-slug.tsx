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
    const [ selectedLocation, setSelectedLocation ] = useState<string>("All");
    const [ selectedEmploymentType, setSelectedEmploymentType ] = useState<string>("All");
    const filterJobs = (location: string, employmentType: string) => {
      let filteredJobs = originalJobs;
      if (location !== "All") {
          filteredJobs = filteredJobs.filter((job) => job.location === location);
      }
      if (employmentType !== "All") {
          filteredJobs = filteredJobs.filter((job) => job.type === employmentType);
      }
      setJobs(filteredJobs);
  };
    return (
    <div className="w-full flex flex-col items-center text-center p-4 space-y-1 overflow-hidden">
    <h1 className="font-bold text-4xl pt-6">{organization?.name}</h1>
    {
      organization.description 
      ?  <p className="text-muted-foreground max-w-2xl text-sm p-3">{organization?.description}</p>
      :  <div className="p-3"></div>
    }
    <div className="flex sm:flex-row flex-col gap-4 lg:w-1/2 w-full pt-2 justify-center">
    <div className="w-full">
    <Select
      onValueChange={(loc) => {
      setSelectedLocation(loc); 
      filterJobs(loc, selectedEmploymentType); 
      }}>
        <SelectTrigger className="bg-inherit w-full">
        <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent className="bg-black">
          <SelectGroup key={"Items"}>
            <SelectItem key={"All"} value="All">All Locations</SelectItem>
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
    <Select 
      onValueChange={(type) => {
      setSelectedEmploymentType(type); 
      filterJobs(selectedLocation, type);
    }}>
      <SelectTrigger className="bg-inherit w-full">
      <SelectValue placeholder="All Types" />
      </SelectTrigger>
      <SelectContent className="bg-black">
        <SelectGroup key={"Items2"}>
          <SelectItem key={"All"} value="All">All Types</SelectItem>
          <SelectItem key={"FULLTIME"} value="FULLTIME">Full-Time</SelectItem>
          <SelectItem key={"PARTTIME"} value="PARTTIME">Part-Time</SelectItem>
          <SelectItem key={"INTERNSHIP"} value="INTERNSHIP">Internship</SelectItem>
          <SelectItem key={"CONTRACT"} value="CONTRACT">Contract</SelectItem>
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
            <JobCard key={index} job={job} organization={organization} />
            </motion.div>
        )
    })}
    </div>
</div>
    )
}