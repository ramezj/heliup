"use client"
import { motion } from "framer-motion";
// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "./ui/button";
import { Alert } from "./main-alert";
import { LandingPageJobCard } from "./job-card";

// Asset imports
import Placeholder from "@/public/dashboard.webp";

const HeroSection = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit bg-inherit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="/">
                Introducing Heliup <ArrowUpRight className="w-4 ml-2" />
            </Link>
          </Button>
          <h1 className="text-5xl font-thin">
            <Balancer>
                Create sexy career pages, effortlessly.
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground text-xl mt-2 font-thin">
            <Balancer>
            Create sexy career pages, receive applicants & start the hiring process. All in one place.
            </Balancer>
          </h3>
          <div className="flex flex-row w-full max-w-fit items-center justify-center gap-4 mt-6">
            <Button variant={"expandIcon"} className="font-medium" asChild>
                <Link href='/auth'>
                Start Hiring
                </Link>
            </Button>
            <Button asChild className="font-medium bg-inherit" variant={"outline"}>
                <Link href={`https://demo.${process.env.NEXT_URL}`} target="_blank">
                See Demo
                <ArrowUpRight className="w-4 ml-2" />
                </Link>
                </Button>
            </div>
          <div className="not-prose my-8 h-96 w-full overflow-hidden space-y-4">
          <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1}}
            transition={{ duration: 0.3, delay: 0.2}}>
            <LandingPageJobCard title="Operations Manager" type="Full-Time" location="Cairo, EG" age="about 1 month ago" />
            </motion.div>
            <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1}}
            transition={{ duration: 0.3, delay: 0.4}}>
            <LandingPageJobCard title="Backend Engineer" type="Full-Time" location="Cairo, EG" age="about 1 month ago" />
            </motion.div>
            <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1}}
            transition={{ duration: 0.3, delay: 0.6}}>
            <LandingPageJobCard title="Software Engineer" type="Full-Time" location="Cairo, EG" age="about 1 month ago" />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;