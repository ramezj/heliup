import { Metadata } from "next"
import { Button } from "@/components/ui/button";
import { LoadingJob } from "@/components/job-card";
import { Plus, Loader2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Loading",
    description: "Generated by create next app",
};

export default function Loading() {
    return (
        <> 
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl tracking-tight">Applicants</h1>
        </div>
        <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader2 className="size-8 animate-spin dark:text-white text-black" />
        </div>
      </>
    )
}