import Image from "next/image";
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Metadata } from "next";
import WordPullUp from "@/components/magicui/word-pull-up";

export const metadata:Metadata = {
  title: "HireHollo",
  description: "Jobspire, Your one-stop platform for creating and managing custom job boards."
}

export default async function Page() {
  const session = await auth();
  return (
   <>
   <Navigation session={session}/>
   <div className="w-full text-center p-8">
   <WordPullUp
      className="text-4xl font-bold tracking-[-0.05em] text-black dark:text-white md:text-5xl md:leading-[5rem]"
      words="Hiring, for startups & small teams."
    />
   </div>
   </>
  );
}
