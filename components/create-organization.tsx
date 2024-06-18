"use client"
import { useState } from "react"
import { auth } from "@/auth"
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function CreateOrganization() {
    const [ name, setName ] = useState<string>();
    return (
        <>
        <div className="grid gap-4">
              <div className="-mt-1">
                <Separator />
              </div>
                <Label>Organization Name</Label>
                <Input placeholder="Jobspire"/>
                <Label>Organization Slug</Label>
                <Input placeholder="jobspire.astralics.com"/>
              <Button type="submit">Create</Button>
            </div>
        </>
    )
}