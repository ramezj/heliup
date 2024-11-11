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
import { ThemeProvider } from "@/components/theme-provider";

export const metadata:Metadata = {
  title: "heliup",
  description: "heliup, build career pages effortlessly.",
  applicationName: "heliup"

}
export default async function Page() {
  const session = await auth();
  return (
  <main>
  <div className="top-0 z-10 sticky">
  <Navigation session={session}/>
  </div>
  <div className="-mt-6 sm:-mt-10">
  <HeroSection />
  {/* <div className="sm:-mt-48 -mt-44">
  <Features />
  </div> */}
  </div>
  </main>
  );
}

