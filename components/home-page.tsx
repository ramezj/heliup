"use client"
import { motion } from "framer-motion";
// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import WordPullUp from "@/components/magicui/word-pull-up";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "./ui/button";
import { Alert } from "./main-alert";
import { LandingPageJobCard } from "./job-card";

// Asset imports
import Placeholder from "@/public/dashboard.webp";

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Button asChild className="mb-6 w-fit bg-inherit px-12" size={"sm"} variant={"outline"}>
            <Link className="not-prose" href="/">
                Introducing Heliup <ArrowUpRight className="w-4 ml-2" />
            </Link>
          </Button>
          <h1 className="sm:text-6xl text-3xl font-light">
            <Balancer>
                Create Stunning Career Pages.
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground sm:text-lg text-sm mt-2 font-thin text-balance">
            <Balancer>
            Create stunning career pages, create jobs, receive applicants & start the hiring process. All in one place.
            </Balancer>
          </h3>
          <div className="flex flex-row w-full max-w-fit items-center justify-center gap-4 mt-6">
            <Button variant={"default"} className="font-medium" asChild>
                <Link href='/auth'>
                Start Hiring
                </Link>
            </Button>
            <Button asChild className="font-medium bg-inherit" variant={"outline"}>
                <Link href="https://demo.heliup.xyz" target="_blank">
                See Demo
                <ArrowUpRight className="w-4 ml-2" />
                </Link>
                </Button>
            </div>
          <div className="not-prose my-8 h-96 w-full overflow-hidden space-y-4">
            <LandingPageJobCard title="Operations Manager" type="Full-Time" location="Cairo, EG" age="about 1 month ago" />
            <LandingPageJobCard title="Backend Engineer" type="Full-Time" location="Cairo, EG" age="about 1 month ago" />
            <LandingPageJobCard title="Software Engineer" type="Full-Time" location="Cairo, EG" age="about 1 month ago" />
          </div>
        </div>
      </Container>
    </Section>
  );
};


