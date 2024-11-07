import { Metadata } from "next"
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Loading",
    description: "Generated by create next app",
};

export default function Loading() {
    return (
        <>
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight">Billing</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="-mb-2"/>
        <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader2 className="size-8 animate-spin dark:text-white text-black" />
        </div>
        </>
    )
}