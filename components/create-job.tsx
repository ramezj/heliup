"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { PartyPopper } from "lucide-react"
import { createJob } from "@/server-actions/jobs/create-job"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

export function CreateJobButton() {
  const [ loading, setLoading ] = useState<Boolean>(false);
  const [ name, setName ] = useState<string>("");
  const CreateNewJob = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    const res = await createJob(name);
    if(res?.ok) {
      toast("Job Created Successfully")
    } else {
      toast("Something went wrong")
    }
    setLoading(false);
  }  
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button size={"sm"}> <Plus className="w-4 h-4 mr-2"/> Create Job</Button>
      </DialogTrigger>
      <DialogContent className="text-left w-[90%] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-left">Create Job</DialogTitle>
          <DialogDescription className="text-left">
          Complete your job listing & start hiring immediately
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-2">
          <div className="grid items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <form id="form" onSubmit={CreateNewJob}>
            <Input
              type="text"
              required
              id="name"
              value={name}
              onChange={((e) => {setName(e.target.value)})}
              placeholder="Name"
              className="col-span-3"
            />
            </form>
          </div>
        </div>
        <DialogFooter>
          {
            loading
            ? 
            <>
            <Button size={"sm"} disabled form="form" type="submit" className="w-full"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Create Job</Button>
            </>
            : 
            <>
            <Button size={"sm"} form="form" type="submit" className="w-full">Create Job</Button>
            </>
          }
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
