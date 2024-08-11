import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import WordPullUp from "@/components/magicui/word-pull-up";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { JobCard, LandingPageJobCard } from "@/components/job-card";
import Link from "next/link";
import { MainAlert } from "@/components/main-alert";
import { Alert } from "@/components/main-alert";
import { ArrowRightIcon, SquareArrowOutUpRight } from "lucide-react";

export const metadata:Metadata = {
  title: "Pricing | HireHollo",
  description: "HireHollo, Your one-stop platform for creating and managing custom job boards.",
  applicationName: "HireHollo"

}

export default async function Page() {
  const session = await auth();
  return (
   <>
   <Navigation session={session}/>
   </>
  );
}
