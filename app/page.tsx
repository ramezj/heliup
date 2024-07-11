import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import WordPullUp from "@/components/magicui/word-pull-up";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { JobCard } from "@/components/job-card";
import { Job, Organization } from "@prisma/client";

export const metadata:Metadata = {
  title: "HireHollo",
  description: "Jobspire, Your one-stop platform for creating and managing custom job boards."
}

export default async function Page() {
  const testJob:Job = ({
    id: "123",
    type:"FULLTIME",
    title: "Product Manager",
    content: "",
    organizationId: "12345"
  })
  const testOrganization:Organization = ({
    id: "456",
    userId:"123",
    name: "HireHollo",
    slug:"hirehollo",
    website: "hirehollo.com",
    description:"description"
  })
  const session = await auth();
  return (
   <>
   <Navigation session={session}/>
   <div className="text-center p-8 w-full">
   <WordPullUp
      className="text-4xl tracking-[-0.05em] text-black dark:text-white md:text-6xl md:leading-[5rem]"
      words="Hiring for startups and small teams."
    />
      <br />
      <div className="w-full items-center flex content-center flex-col">
      <div className="flex flex-col gap-4 sm:w-1/2 w-full">
      <div className="relative">
      <JobCard job={testJob} organization={testOrganization}/>
      <BorderBeam size={125} duration={8} delay={25} />
      </div>
      <div className="relative">
      <JobCard job={testJob} organization={testOrganization}/>
      <BorderBeam size={125} duration={8} delay={50} />
      </div>
      <div className="relative">
      <JobCard job={testJob} organization={testOrganization}/>
      <BorderBeam size={125} duration={8} delay={75} />
      </div>
      </div>
      </div>
   </div>
   </>
  );
}
