"use client"
  import { useEditor, EditorContent } from "@tiptap/react"
  import StarterKit from "@tiptap/starter-kit"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "./ui/button"
  import { toast } from "sonner"
  import { Loader2 } from "lucide-react"
  import { Job, Organization } from "@prisma/client"
  import { useState } from "react"
  import RichTextEditor from "./rich-text-editor"
  import { motion } from "framer-motion"
  import { editJob } from "@/server-actions/jobs/edit-job"
  import { Textarea } from "./ui/textarea"
  import { editOrganization } from "@/server-actions/organization/edit-organization"

export default function EditOrganization({ organization } : { organization:Organization}) {
    const [ currentOrganization, setCurrentOrganization ] = useState<Organization>(organization);
    const [ loading, setLoading ] = useState<Boolean>(false);
    const editOrg = async (e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await editOrganization(currentOrganization);
        toast(res.message);
        setLoading(false);
    }
    return (
        <>
        <form onSubmit={editOrg}>
        <div className="space-y-4 w-full">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input className="bg-inherit" required placeholder="Microsoft" value={currentOrganization.name!} onChange={((e) => {setCurrentOrganization((prevOrg) => ({ ...prevOrg, name: e.target.value }))})}/>
              <div className="space-y-2"> 
              <Label htmlFor="name">Slug</Label>
              <Input className="bg-inherit" required placeholder="microsoft.jobspire.co" value={currentOrganization.slug!} onChange={((e) => {setCurrentOrganization((prevOrg) => ({ ...prevOrg, slug:e.target.value}))})}/>
              </div>
              <div className="space-y-2">
              <Label htmlFor="name">Slogan</Label>
              <Textarea className="bg-inherit" placeholder="I'm Lovin' it!" value={currentOrganization.description!} onChange={((e) => {setCurrentOrganization((prevOrg) => ({...prevOrg, description: e.target.value}))})} rows={4} />  
              </div>
              <div className="space-y-2">
              <Label htmlFor="website">Website URL</Label>
              {/* <Input className="bg-inherit" placeholder="https://heliup.xyz" value={currentOrganization.website!} onChange={((e) => {setCurrentOrganization((prevOrg) => ({ ...prevOrg, website: e.target.value }))})}/> */}
              <div className="flex rounded-lg shadow-sm shadow-black/5">
                <span className="-z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
                  https://
                </span>
                <Input
                  id="input-14"
                  className="-ms-px rounded-s-none shadow-none bg-inherit"
                  placeholder="heliup.xyz"
                  value={currentOrganization.website!}
                  onChange={((e) => {setCurrentOrganization((prevOrg) => ({ ...prevOrg, website: e.target.value }))})}
                  type="text"
                />
              </div>
              </div>
              <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input className="bg-inherit" placeholder="Handle" value={organization.twitter!} onChange={((e) => {setCurrentOrganization((prevOrg) => ({ ...prevOrg, twitter: e.target.value }))})}/>
              </div>
              
              </div>
            {
              loading
              ? <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving Changes
                </Button>
              : <Button type="submit">Save Changes</Button>
            }
          </div>
          </form>
        </>
    )
}