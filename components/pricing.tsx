
import { ArrowRightIcon, SquareArrowOutUpRight, CheckIcon, XIcon, CircleCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import ShineBorder from "./magicui/shine-border";
import { Separator } from "./ui/separator";

export function FreeCard() {
    return (
        <>
        <Card className="w-[350px] bg-background">
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'>Free</CardTitle>
        <CardDescription className="text-left">Free forever</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <h2 className="flex text-2xl font-semibold -mt-3">
            $0/mo
          </h2>
          <Separator />
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="text-muted-foreground"/>
                    1 Organization
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="text-muted-foreground"/>
                    3 Jobs
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="text-muted-foreground"/>
                    25 Total Applicants
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="text-muted-foreground"/>
                    Heliup Branding
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                <XIcon className="text-muted-foreground"/>
                    Candidate CV Upload
                    </h2>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='w-full font-bold' variant={"default"}>
              Start Hiring
        </Button>
      </CardFooter>
    </Card>
        </>
    )
}

export function PaidCard() {
    return (
        <>
        <Card className="w-[350px] bg-background">
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'>Professional</CardTitle>
        <CardDescription className="text-left">Monthly Subscription</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <h2 className="flex text-2xl font-semibold -mt-3">
            $30/mo
          </h2>
          <Separator />
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="text-muted-foreground"/>
                    1 Organization
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="text-muted-foreground"/>
                    Unlimited Jobs
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="text-muted-foreground"/>
                    Unlimited Applicants
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="text-muted-foreground"/>
                    Candidate CV Upload
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2 text-muted-foreground">
                    <XIcon className="text-muted-foreground"/>
                    Heliup Branding
                    </h2>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='w-full font-bold' variant={"default"}>
              Start Hiring
        </Button>
      </CardFooter>
    </Card>
        </>
    )
}