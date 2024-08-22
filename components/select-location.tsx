"use client"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"  
import { redirect } from "next/navigation";

export function SelectLocation({locations}: { locations: Array<string>}) {
    return (
        <Select onValueChange={(e) => redirect(`?location=${location || ''}&type=${e}`)}>
        <SelectTrigger className="bg-inherit w-full">
        <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent className="bg-black">
          <SelectGroup>
            {
              locations.map((location) => {
                return (
                  <>
                  <SelectItem value={location}>{location}</SelectItem>
                  </>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
        </Select>
    )
}