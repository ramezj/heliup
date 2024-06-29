"use client"
  import { useEditor, EditorContent } from "@tiptap/react"
  import StarterKit from "@tiptap/starter-kit"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "./ui/button"
  import { toast } from "sonner"
  import { Loader2 } from "lucide-react"
  import { Job } from "@prisma/client"
  import { useState } from "react"
  import RichTextEditor from "./rich-text-editor"
  import { motion } from "framer-motion"
  import { editJob } from "@/server-actions/jobs/edit-job"

export default function EditOrganization() {
  const [ loading, setLoading ] = useState<Boolean>(false);
    return (
        <>
        <div className="space-y-4 w-full">
            <motion.div 
                    className="space-y-2"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}>
              <Label htmlFor="name">Title</Label>
              <Input placeholder="Product Manager"/>
              </motion.div>
                    <motion.div 
                    className="space-y-2 w-full"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}>
                <Label htmlFor="name">Job Description</Label>
                <Input placeholder="Product Manager"/>  
            </motion.div>
            {
              loading
              ? <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving Changes
                </Button>
              : <Button>Save Changes</Button>
            }
          </div>
        </>
    )
}