"use client"
import { useState } from "react"
import { auth } from "@/auth"
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { motion } from "framer-motion"
import { createOrganization } from "@/server-actions/team/create-team";
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export function CreateTeam() {
    const router = useRouter();
    const [ name, setName ] = useState<string>("");
    const [ slug, setSlug ] = useState<string>("");
    const [ website, setWebsite ] = useState<string>("");
    const [ step, setStep ] = useState<number>(1);
    const [ loading, setLoading ] = useState<Boolean>(false);
    const createOrg = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        const response = await createOrganization({name, slug, website});
        setLoading(false);
        if(response.ok) {
            router.push("/dashboard");
        } else {
            toast(response?.error);
        }
    }
    return (
        <>
        <div className="grid gap-4">
              <div className="-mt-1">
                <Separator />
              </div>
              <form onSubmit={createOrg}>
                    <div 
                    className="w-full grid gap-4"
                    >
                    <Label>Name</Label>
                    <Input className="bg-inherit" placeholder="Microsoft" required value={name} onChange={((e) => {setName(e.target.value)})}/>
                    <Label>Slug</Label>
                    <Input className="bg-inherit" placeholder="microsoft" required value={slug} onChange={((e) => {setSlug(e.target.value)})}/>
                    {
                        loading
                        ? <Button size={"sm"} variant={"outline"} disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Create</Button>
                        : <Button size={"sm"} variant={"outline"}>Create </Button>
                    }
                    </div>
              </form>
            </div>
        </>
    )
}