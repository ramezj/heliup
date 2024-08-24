
import { ArrowRightIcon, SquareArrowOutUpRight, CheckIcon, XIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import ShineBorder from "./magicui/shine-border";

export function FreeCard() {
    return (
        <>
        <Card className="w-[350px] bg-black ">
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'>Free</CardTitle>
        <CardDescription className="text-left">Free forever</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <h2 className="flex text-2xl font-semibold -mt-3">
            $0/mo
          </h2>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    1 Organization
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    20 Applicants
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    CareerTella Branding
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <XIcon className="text-red-500"/>
                    Custom Domain
                    </h2>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='w-full font-bold' variant={"expandIcon"} Icon={ArrowRightIcon} iconPlacement="right" >
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
        <Card className="w-[350px] bg-black ">
        <ShineBorder color={"white"}>
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'>Premium</CardTitle>
        <CardDescription className="text-left">Monthly Subscription</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <h2 className="flex text-2xl font-semibold -mt-3">
            $20/mo
          </h2>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    1 Organization
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Unlimited Applicants
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <XIcon className="text-red-500"/>
                    CareerTella Branding
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Custom Domain
                    </h2>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='w-full font-bold' variant={"expandIcon"} Icon={ArrowRightIcon} iconPlacement="right" >
              Start Hiring
        </Button>
      </CardFooter>
      </ShineBorder>
    </Card>
        </>
    )
}