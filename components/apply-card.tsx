"use client"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import React, { useState } from "react"
import { applyToJob } from "@/server-actions/applicants/apply-to-job"
import { Loader2 } from "lucide-react"

export default function ApplyCard({ jobId }: { jobId: string}) {
    const [ firstName, setFirstName ] = useState<string>();
    const [ lastName, setLastName ] = useState<string>();
    const [ emailAddress, setEmailAddress ] = useState<string>();
    const [ phoneNumber, setPhoneNumber ] = useState<number>();
    const [ location, setLocation ] = useState<string>("New Cairo");
    const [ loading, setLoading ] = useState<boolean>(false);
    const apply = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await applyToJob(jobId, firstName!, lastName!, emailAddress!, phoneNumber!, location!)
        setLoading(false);
        console.log(res);
    }
    return (
        <>
            <div className="lg:w-1/2 w-full rounded-lg border border-white/10 p-7 text-left">
            <form onSubmit={apply} className="space-y-4">
            <div className="space-y-2">
            <h1 className="text-2xl font-bold text-center">Application</h1>
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">First Name</Label>
            <Input required placeholder="Joe" value={firstName} onChange={((e) => {setFirstName(e.target.value)})} />
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">Last Name</Label>
            <Input required placeholder="Biden" value={lastName} onChange={((e) => {setLastName(e.target.value)})} />
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">Email Address</Label>
            <Input required placeholder="joebiden@gmail.com" value={emailAddress} onChange={((e) => {setEmailAddress(e.target.value)})} />
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">Phone Number</Label>
            <Input required type="number" placeholder="+20087163518" value={phoneNumber} onChange={((e) => {setPhoneNumber(Number(e.target.value))})} />
            </div>
            <div className="space-y-2">
            <Label htmlFor="name">Location</Label>
            <Input required value={location} onChange={((e) => {setLocation(e.target.value)})} placeholder="Los Angeles, CA"/>
            </div>
            {
                loading 
                ?  
                <Button disabled className="w-full">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Apply Now
                </Button>
                :
                <Button type="submit" className="w-full">
                Apply Now
                </Button>
            }
            </form>
            </div>
        </>
    )
}