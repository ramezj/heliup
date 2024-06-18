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
    const [ slug, setSlug ] = useState<string>();
    const [ website, setWebsite ] = useState<string>();
    const [ step, setStep ] = useState<number>(1);
    console.log(name?.length);
    return (
        <>
        <div className="grid gap-4">
              <div className="-mt-1">
                <Separator />
              </div>
              <form action="">
              {
                step === 1 && (
                    <motion.div 
                    className="w-full grid gap-4"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    >
                    <Label>Name</Label>
                    <Input placeholder="Jobspire" required value={name} onChange={((e) => {setName(e.target.value)})}/>
                    {
                        name?.length as number === 0 || name?.length as number === undefined
                        ? 
                        <>
                        <Button disabled type="submit" onClick={(() => setStep(step + 1))}>Next</Button>
                        </>
                        : 
                        <>
                        <Button type="submit" onClick={(() => setStep(step + 1))}>Next</Button>
                        </>
                    }
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
                    <Label>Slug</Label>
                    <Input placeholder="slug.jobspire.co" required value={slug} onChange={((e) => {setSlug(e.target.value)})}/>
                    <div className="flex gap-3">
                    <Button variant={"outline"} className="w-full" type="submit" onClick={(() => setStep(step - 1))}>Back</Button>
                    {
                        slug?.length as number === 0 || slug?.length as number === undefined
                        ? 
                        <>
                        <Button className="w-full" disabled type="submit" onClick={(() => setStep(step + 1))}>Next</Button>
                        </>
                        : 
                        <>
                        <Button className="w-full" type="submit" onClick={(() => setStep(step + 1))}>Next</Button>
                        </>
                    }
                    </div>
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
                    <Label>Website</Label>
                    <Input placeholder="jobspire.co" required/>
                    <div className="flex gap-3">
                    <Button variant={"outline"} className="w-full" type="submit" onClick={(() => setStep(step - 1))}>Back</Button>
                    <Button className="w-full" type="submit">Create</Button>
                    </div>
                    </motion.div>
                )
              }
              </form>
            </div>
        </>
    )
}