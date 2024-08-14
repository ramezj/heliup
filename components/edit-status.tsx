"use client"

import { Applicant, Status } from "@prisma/client"
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { EditApplicantStatusById } from "@/server-actions/applicants/edit-applicant-status"
import { formatApplicantType } from "@/utils/format"

export function EditStatus({applicant}: {applicant:Applicant}) {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ newStatus, setNewStatus ] = useState<Status>(applicant.status);
    return (
        <>
        <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline">
        Edit Status
      </Button>
      </DialogTrigger>
      <DialogContent onOpenAutoFocus={((e) => {e.preventDefault()})} className="text-left w-[90%] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-left">Edit Applicant's Status</DialogTitle>
          <DialogDescription className="text-left">
          Edit applicant's status, submitted, accepted, rejected, etc.
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-2">
          <div className="grid items-center gap-4">
            <Label className="text-left">
              Status
            </Label>
            <form id="form">
            <Select defaultValue={newStatus} onValueChange={((e) => {console.log(e); setNewStatus(e as Status)})} >
              <SelectTrigger className="">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="SUBMITTED">Submitted</SelectItem>
                  <SelectItem value="UNDERREVIEW">Under Review</SelectItem>
                  <SelectItem value="INTERVIEW">Interview</SelectItem>
                  <SelectItem value="OFFER">Offer</SelectItem>
                  <SelectItem value="REJECTED">Rejected</SelectItem>
                  <SelectItem value="HIRED">Hired</SelectItem>
                </SelectGroup>
              </SelectContent>
              </Select>
            </form>
          </div>
        </div>
        <DialogFooter>
          {
            loading
            ? 
            <>
            <Button size={"sm"} disabled form="form" type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 duration-200"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Save Status</Button>
            </>
            : 
            <>
            <Button size={"sm"} form="form" type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 duration-200">Save Status</Button>
            </>
          }
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </>
    )
}