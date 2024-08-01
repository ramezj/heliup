"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "./ui/button"
  import { Trash, Loader2 } from "lucide-react"
  import { useState } from "react"
  import { deleteJob } from "@/server-actions/jobs/delete-job"
  import { useRouter } from "next/navigation"

  export default function DeleteJobModal({jobId}: { jobId: string}) {
    const router = useRouter();
    const [ loading, setLoading ] = useState<boolean>(false);
    const deleteTheJob = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await deleteJob(jobId);
        if(res.ok) {
            setLoading(false);
            router.push('/jobs')
        }
        else {
            setLoading(false);
            console.error(res.message);
        }
    }
    return (
        <>
        <Dialog>
        <DialogTrigger asChild>
        <Button variant={"outline"} size={"sm"}>
            <Trash className="w-4 h-4" />
        </Button>
        </DialogTrigger>
        <DialogContent className="text-left w-[90%] rounded-md">
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your job.
            </DialogDescription>
            </DialogHeader>
            {
                loading
                ?  
                <Button disabled variant={"destructive"}>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting
                </Button>
                :
                <Button onClick={deleteTheJob} variant={"destructive"}>Delete</Button>
            }
        </DialogContent>
        </Dialog>
        </>
    )
  }