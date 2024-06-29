"use client"
import { useState } from "react"
import { auth } from "@/auth"
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { motion } from "framer-motion"
import { createOrganization } from "@/server-actions/organization/createOrganization";
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

export function CreateOrganization() {
    const [ name, setName ] = useState<string>("");
    const [ slug, setSlug ] = useState<string>("");
    const [ website, setWebsite ] = useState<string>("");
    const [ step, setStep ] = useState<number>(1);
    const [ loading, setLoading ] = useState<Boolean>(false);
    const createOrg = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        const response = await createOrganization({name, slug, website});
        if(response?.error) {
            toast("" + response?.error);
        } else {
            toast("Organization Created Successfully")
        }
        setLoading(false);
        console.log(response);
    }
    return (
        <>
        <div className="grid gap-4">
              <div className="-mt-1">
                <Separator />
              </div>
              <form onSubmit={createOrg}>
                    <motion.div 
                    className="w-full grid gap-4"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    >
                    <Label>Name</Label>
                    <Input placeholder="Jobspire" required value={name} onChange={((e) => {setName(e.target.value)})}/>
                    <Label>Slug</Label>
                    <Input placeholder="Jobspire" required value={slug} onChange={((e) => {setSlug(e.target.value)})}/>
                    {
                        loading
                        ? <Button><Loader2 className="mr-2 h-4 w-4 animate-spin" />Create</Button>
                        : <Button>Create</Button>
                    }
                    </motion.div>
              </form>
            </div>
        </>
    )
}