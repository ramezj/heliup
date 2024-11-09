"use client"
  import { useEditor, EditorContent } from "@tiptap/react"
  import StarterKit from "@tiptap/starter-kit"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "./ui/button"
  import { toast } from "sonner"
  import { Loader2 } from "lucide-react"
  import { Job, Team } from "@prisma/client"
  import { useState } from "react"
  import RichTextEditor from "./rich-text-editor"
  import { motion } from "framer-motion"
  import { editJob } from "@/server-actions/jobs/edit-job"
  import { Textarea } from "./ui/textarea"
import { editOrganization } from "@/server-actions/team/edit-team"

export default function EditOrganization({ team } : { team:Team}) {
    const [ currentTeam, setCurrentTeam ] = useState<Team>(team);
    const [ loading, setLoading ] = useState<Boolean>(false);
    const editOrg = async (e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await editOrganization(team);
        toast(res.message);
        setLoading(false);
    }
    return (
        <>
        <form onSubmit={editOrg}>
        <div className="space-y-4 w-full">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input className="bg-inherit" required placeholder="Microsoft" value={team.name!} onChange={((e) => {setCurrentTeam((prevOrg) => ({ ...prevOrg, name: e.target.value }))})}/>
              <div className="space-y-2"> 
              <Label htmlFor="name">Slug</Label>
              <Input className="bg-inherit" required placeholder="microsoft.jobspire.co" value={team.slug!} onChange={((e) => {setCurrentTeam((prevOrg) => ({ ...prevOrg, slug:e.target.value}))})}/>
              </div>
              <div className="space-y-2">
              <Label htmlFor="name">Slogan</Label>
              <Textarea className="bg-inherit" placeholder="I'm Lovin' it!" value={team.description!} onChange={((e) => {setCurrentTeam((prevOrg) => ({...prevOrg, description: e.target.value}))})} rows={4} />  
              </div>
              <div className="space-y-2">
              <Label htmlFor="website">Website URL</Label>
              <Input className="bg-inherit" placeholder="https://heliup.xyz" value={team.website!} onChange={((e) => {setCurrentTeam((prevOrg) => ({ ...prevOrg, website: e.target.value }))})}/>
              </div>
              <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input className="bg-inherit" placeholder="Handle" value={team.twitter!} onChange={((e) => {setCurrentTeam((prevOrg) => ({ ...prevOrg, twitter: e.target.value }))})}/>
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