"use client"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"  
import { redirect } from "next/navigation";
import { useState } from "react";

export function SelectLocation({locations}: { locations: Array<string>}) {
    return (
        <Select onValueChange={(e) => redirect(`?location=${e || ''}&type=${e}`)}>
        <SelectTrigger className="bg-inherit w-full">
        <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent className="bg-black">
          <SelectGroup>
            {
              locations.map((location, index) => {
                return (
                  <>
                  <SelectItem key={index} value={location}>{location}</SelectItem>
                  </>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
        </Select>
    )
}