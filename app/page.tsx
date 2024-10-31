import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { LandingPageJobCard } from "@/components/job-card";
import Link from "next/link";
import { Alert } from "@/components/main-alert";
import { BentoDemo } from "@/components/feature";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/home-page";
import { Features } from "@/components/features";
import CTA from "@/components/cta";
import Balancer from "react-wrap-balancer";
import { ArrowUpRight } from "lucide-react";

export const metadata:Metadata = {
  title: "Heliup",
  description: "Heliup, Build Career Pages Effortlessly.",
  applicationName: "Heliup"

}
export default async function Page() {
  const session = await auth();
  return (
  <>
  <div className="top-0 z-10 sticky">
  <Navigation session={session}/>
  </div>
  <div className="-mt-6 sm:-mt-10">
  <HeroSection />
  {/* <div className="sm:-mt-48 -mt-44">
  <Features />
  </div> */}
  </div>
 {/* <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl">
          Build Career Pages, Effortlessly
        </h1>
        <p className="mt-4 text-lg text-center text-muted-foreground">
          Build career pages effortlessly, create jobs, receive applicants & start the hiring process. All in one place.
        </p>
        <div className="flex flex-row w-full max-w-fit items-center justify-center gap-4 mt-6">
            <Button variant={"default"} className="font-medium w-60" asChild>
                <Link href='/auth'>
                Start Hiring
                </Link>
            </Button>
            
            <Button asChild className="font-medium bg-inherit w-60" variant={"outline"}>
                <Link href="https://demo.heliup.xyz" target="_blank">
                See Demo
                <ArrowUpRight className="w-4 ml-2" />
                </Link>
                </Button>
            </div>
      </div> */}
  </>
  );
}

