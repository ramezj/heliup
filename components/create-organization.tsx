"use client"
import { useState } from "react"
import { auth } from "@/auth"
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { motion } from "framer-motion"

export function CreateOrganization() {
    const [ name, setName ] = useState<string>();
    const [ step, setStep ] = useState<number>(1);
    return (
        <>
        <div className="grid gap-4">
              <div className="-mt-1">
                <Separator />
              </div>
              {
                step === 1 && (
                    <motion.div 
                    className="w-full grid gap-4"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    >
                    <Label>Organization Name</Label>
                    <Input placeholder="Jobspire"/>
                    <Button type="submit" onClick={(() => setStep(step + 1))}>Next</Button>
                    </motion.div>
                )
              }
              {
                step === 2 && (
                    <motion.div 
                    className="w-full grid gap-4"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    >
                    <Label>Organization Slug</Label>
                    <Input placeholder="slug.jobspire.co"/>
                    <Button className="w-full" type="submit" onClick={(() => setStep(step + 1))}>Next</Button>
                    </motion.div>
                )
              }
               {
                step === 3 && (
                    <motion.div 
                    className="w-full grid gap-4"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    >
                    <Label>Organization Website</Label>
                    <Input placeholder="jobspire.co"/>
                    <Button type="submit">Create</Button>
                    </motion.div>
                )
              }
            </div>
        </>
    )
}