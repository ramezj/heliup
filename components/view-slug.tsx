"use client"
import { useState } from "react"
import { Organization } from "@prisma/client"
import { Prisma } from "@prisma/client"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"  
import { SelectLocation } from "./select-location" 
import { Job } from "@prisma/client"
import { JobCard } from "./job-card"
import { motion } from "framer-motion"
import { formatJobType } from "@/utils/format"
import Balancer from "react-wrap-balancer"

type OrganizationWithJobs = Prisma.OrganizationGetPayload<{
    include: {
        jobs: true
    }
}>
  
export function ViewSlug({ organization, locations, types } : { organization:OrganizationWithJobs, locations:Array<string>, types:Array<string>}) {
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
    <h1 className="font-medium text-4xl pt-6">Jobs at {organization?.name}</h1>
    {
      organization.description 
      ? 
      <>
      <Balancer>
      <p className="text-muted-foreground max-w-3xl text-sm pt-3 pb-3">{organization?.description}</p>
      </Balancer>
      </>
      :  <div className="p-3"></div>
    }
    <div className="flex sm:flex-row flex-col gap-4 lg:w-1/2 w-full pt-2 justify-center">
    <div className="w-full">
    <Select
      onValueChange={(loc) => {
      setSelectedLocation(loc); 
      filterJobs(loc, selectedEmploymentType); 
      }}>
        <SelectTrigger className="dark:bg-black bg-white border-foreground/20 w-full">
        <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent className="dark:bg-black bg-white">
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
      <SelectTrigger className="dark:bg-black bg-white border-foreground/20 w-full">
      <SelectValue placeholder="All Employment" />
      </SelectTrigger>
      <SelectContent className="dark:bg-black bg-white">
        <SelectGroup key={"Items2"}>
          <SelectItem key={"All"} value="All">All Employment</SelectItem>
          {
              types.map((type, index) => {
                return (
                  <>
                  <SelectItem key={index} value={type}>{formatJobType(type)}</SelectItem>
                  </>
                )
              })
            }
        </SelectGroup>
      </SelectContent>
      </Select>
    </div>
    </div>
    <div className="flex flex-col gap-4 lg:w-1/2 w-full pt-6">
    {jobs.map((job:Job, index) => {
        return (
            <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1}}
            transition={{ duration: 0.3, delay: index * 0.2}}
            key={job.id} 
            className="relative">
            <JobCard key={index} job={job} organization={organization} />
            </motion.div>
        )
    })}
    </div>
</div>
    )
}