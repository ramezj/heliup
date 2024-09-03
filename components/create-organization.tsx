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
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export function CreateOrganization() {
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
                    <Input placeholder="Microsoft" required value={name} onChange={((e) => {setName(e.target.value)})}/>
                    <Label>Slug</Label>
                    <Input placeholder="microsoft" required value={slug} onChange={((e) => {setSlug(e.target.value)})}/>
                    {
                        loading
                        ? <Button size={"sm"} className="bg-blue-600 text-white hover:bg-blue-700 duration-200" disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Create</Button>
                        : <Button size={"sm"} variant={"expandIcon"} iconPlacement="right" Icon={Plus} className="">Create </Button>
                    }
                    </div>
              </form>
            </div>
        </>
    )
}