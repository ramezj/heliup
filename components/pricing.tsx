
import { ArrowRightIcon, SquareArrowOutUpRight, CheckIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import ShineBorder from "./magicui/shine-border";

export function FreeCard() {
    return (
        <>
        <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'>Trial</CardTitle>
        <CardDescription>Free for 14 days</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <h2 className="flex text-2xl font-semibold -mt-3">
            Free
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
                    15 Applicants
                    </h2>
            </div>
            <div className="flex flex-col space-y-1.5">
                <h2 className="flex gap-2">
                    <CheckIcon className="text-green-500"/>
                    Subdomain
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
        <Card className="w-[350px] ">
        <ShineBorder color={"dark" ? "white" : "black"}>
      <CardHeader>
        <CardTitle className='flex gap-2 font-bold tracking-normal'>Premium</CardTitle>
        <CardDescription>Free for 14 days</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <h2 className="flex text-2xl font-semibold -mt-3">
            $15
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
                    <CheckIcon className="text-green-500"/>
                    Subdomain
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