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

export default function EditJobTabs({ job }: { job: Job }) {
  const [ loading, setLoading ] = useState<Boolean>(false);
  const [ title, setTitle ] = useState<string>(job.title);
  const [ NewJob, setNewJob ] = useState<Job>(job);
  const editTheJob = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    const res = await editJob(NewJob);
    toast(res?.message)
    setLoading(false);
    console.log(res);
  }
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[150px] max-h-[150px] w-full rounded-md rounded-br-none rounded-bl-none border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
        heading: {
          HTMLAttributes: {
            class: "text-xl"
          }
        }
      }),
    ],
    content: NewJob.content,
    onUpdate: ({ editor }) => {
      setNewJob((prevJob) => ({...prevJob, content: editor.getHTML()}));
    },
  });
    return (
        <>
        <div className="space-y-4 w-full">
            <motion.div 
                    className="space-y-2"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}>
              <Label htmlFor="name">Title</Label>
              <Input placeholder="Product Manager" value={title} onChange={((e) => {setTitle(e.target.value)})}/>
              </motion.div>
                    <motion.div 
                    className="space-y-2 w-full"
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}>
                <Label htmlFor="name">Job Description</Label>
              <RichTextEditor editor={editor!}/> 
            </motion.div>
            {
              loading
              ? <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving Changes
                </Button>
              : <Button onClick={editTheJob}>Save Changes</Button>
            }
          </div>
        </>
    )
}