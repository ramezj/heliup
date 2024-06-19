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

export function CreateJobButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button> <Plus className="w-4 h-4 mr-2"/> Create new Job</Button>
      </DialogTrigger>
      <DialogContent className="text-left w-[90%] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-left text-xl">Create Job</DialogTitle>
          <DialogDescription className="text-left">
          Complete your job listing & start hiring immediately
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-2">
          <div className="grid items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Name"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="">Create Job</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
