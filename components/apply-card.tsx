"use client"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import React, { useState } from "react"
import { applyToJob } from "@/server-actions/applicants/apply-to-job"
import { Loader2, Upload } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"


export default function ApplyCard({ jobId }: { jobId: string}) {
    const [ firstName, setFirstName ] = useState<string>();
    const [ lastName, setLastName ] = useState<string>();
    const [ emailAddress, setEmailAddress ] = useState<string>();
    const [ phoneNumber, setPhoneNumber ] = useState<number>();
    const [ file, setFile ] = useState<File | null>();
    const [ motivation, setMotivation ] = useState<string>();
    const [ loading, setLoading ] = useState<boolean>(false);
    const apply = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file!);
        setLoading(true);
        const res = await applyToJob(jobId, firstName!, lastName!, emailAddress!, phoneNumber!, motivation!, formData);
        setLoading(false);
        if(res.ok != true) {
            toast(res.message)
        }
        console.log(res);
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        console.log(file);
      };
    return (
        <>
            <div className="lg:w-1/2 w-full rounded-lg border border-white/10 p-7 text-left">
            <form onSubmit={apply} className="space-y-4">
            <div className="space-y-2">
            <h1 className="text-2xl font-bold text-center">Apply to job</h1>
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
            <Label htmlFor="name">Upload Resume ( max 5mb )</Label>
            <div>
            <Input required type="file" id="file" name="file" accept=".pdf" onChange={handleFileChange} />
            </div>
            </div>
            <div className="space-y-2"> 
            <Label htmlFor="motivation">Motivation</Label>
            <Textarea required value={motivation} onChange={((e) => {setMotivation(e.target.value)})} placeholder="Tell us why you're the best candidate for this position" />
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