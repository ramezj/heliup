import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Link, Share2Icon, Users } from "lucide-react";
import ShineBorder from "./magicui/shine-border";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import { Input } from "./ui/input";
import { LandingPageJobCard } from "./job-card";

export function BentoDemo() {
  return (
    <BentoGrid>
        <BentoCard key={1} 
        Icon={Link} 
        name="Custom Domain" 
        description="Use your own custom domain and attract more applicants." 
        className="col-span-3 lg:col-span-1"
        href="#"
        cta="Start Hiring"
        background={
        <>
        <Input className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)]  group-hover:scale-105" value={"demo.heliup.xyz"} disabled />
        </>
        }/>

        <BentoCard key={1} 
        Icon={Users} 
        name="Job Board" 
        description="Create stunning career pages & start hiring." 
        className="col-span-3 lg:col-span-2"
        href="#"
        cta="Start Hiring"
        background={
          <div className="gap-2 flex flex-col absolute right-0 top-10 origin-top rounded-md transition-all duration-300 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] ease-out group-hover:scale-105">
          <div className="relative w-full">
          <LandingPageJobCard title="Software Engineer" type="FULLTIME" location="Remote" />
          </div>
          <div className="relative">
          <LandingPageJobCard title="Software Engineer" type="FULLTIME" location="Remote" />
          </div>
          </div>
          }/>

        <BentoCard key={1} 
        Icon={FileTextIcon} 
        name="Review All Resumes" 
        description="Receive & Review all applicant Resumes." 
        className="col-span-3 lg:col-span-2"
        href="#"
        cta="Start Hiring"
        background={
          <>
          <Image src={"/dashboard.png"} width={500} height={500} alt="dashboard" 
          className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" />
          </>
       }/>

        <BentoCard key={1} 
        Icon={Link} 
        name="Custom Domain" 
        description="Use your own custom domain and attract more applicants." 
        className="col-span-3 lg:col-span-1"
        href="#"
        cta="Start Hiring"
        background={
        <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
        />}/>
    </BentoGrid>
  );
}
