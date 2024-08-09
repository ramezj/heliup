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
import { ArrowRightIcon } from "lucide-react";

export const metadata:Metadata = {
  title: "HireHollo",
  description: "HireHollo, Your one-stop platform for creating and managing custom job boards.",
  applicationName: "HireHollo"

}

export default async function Page() {
  const session = await auth();
  return (
   <>
   <Navigation session={session}/>
   <div className="text-center w-full p-8 flex flex-col gap-2 items-center max-h-fit">
    <div className="relative">
    <Alert />
    </div>
      <WordPullUp
        className="text-4xl tracking-[-0.05em] text-black dark:text-white md:text-6xl md:leading-[5rem]"
        words="Hiring for startups and small teams."
        />
        <div className="flex flex-row w-full max-w-fit items-center justify-center gap-4">
      <Button asChild className="w-52">
        <Link href={`https://hirehollo.${process.env.NEXT_URL}`}>
        See Demo
        </Link>
        </Button>
      <Button variant={"expandIcon"} Icon={ArrowRightIcon} iconPlacement="right" className="w-52 bg-blue-600 text-white hover:bg-blue-700 duration-200" asChild>
        <Link href='/auth'>
        Try Now
        </Link>
      </Button>
        </div>
      <div className="w-full items-center flex content-center flex-col mt-3">
      <div className="flex flex-col gap-4 lg:w-1/2 w-full">
      <div className="relative">
      <LandingPageJobCard title="Product Manager" type="FULLTIME" location="Los Angeles, CA"/>
      </div>
      <div className="relative">
      <LandingPageJobCard title="Operations Manager" type="CONTRACT" location="Austin, TX"/>
      </div>
      <div className="relative">
      <LandingPageJobCard title="Software Engineer" type="INTERNSHIP" location="San Francisco, CA"/>
      </div>
      </div>
      </div>
   </div>
   </>
  );
}
