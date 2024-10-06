"use client"
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
import { ShieldCheck, TabletSmartphone } from "lucide-react";
import { motion } from "framer-motion";

export function BentoDemo() {
  return (
    <BentoGrid>
        <BentoCard key={1} 
        Icon={ShieldCheck} 
        name="Custom Branding" 
        description="Bring your own branding" 
        className="col-span-3 lg:col-span-1"
        href="/auth"
        cta="Start Hiring"
        background={
        <>
        <Input className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)]  group-hover:scale-105" value={"demo.heliup.xyz"} disabled />
        </>
        }/>
        <BentoCard key={2} 
        Icon={Users} 
        name="Custom Job Board" 
        description="Create stunning career pages" 
        className="col-span-3 lg:col-span-2"
        href="/auth"
        cta="Start Hiring"
        background={
          <>
          {/* <Image src={"/demo.png"} width={500} height={500} alt="dashboard" 
          className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" /> */}
          </>
          }/>

        <BentoCard key={3} 
        Icon={FileTextIcon} 
        name="Review All Resumes" 
        description="Receive & Review all applicant Resumes." 
        className="col-span-3 lg:col-span-2"
        href="/auth"
        cta="Start Hiring"
        background={
          <>
          {/* <Image src={"/dashboard.png"} width={500} height={500} alt="dashboard" 
          className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105" /> */}
          </>
       }/>

        <BentoCard key={4} 
        Icon={TabletSmartphone} 
        name="Mobile First" 
        description="Mobile first by nature, responsive & friendly." 
        className="col-span-3 lg:col-span-1"
        href="/auth"
        cta="Start Hiring"
        background={
         <>
         </>
        }/>
    </BentoGrid>
  );
}
