"use client"
  import { useEditor, EditorContent } from "@tiptap/react"
  import StarterKit from "@tiptap/starter-kit"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "./ui/button"
  import { toast } from "sonner"
  import { Loader2 } from "lucide-react"
  import { Job, Type } from "@prisma/client"
  import { useState } from "react"
  import RichTextEditor from "./rich-text-editor"
  import { motion } from "framer-motion"
  import { editJob } from "@/server-actions/jobs/edit-job"
  import { Select,  SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ConfigureJob({ job }: { job: Job }) {
  const [ loading, setLoading ] = useState<Boolean>(false);
  const [ NewJob, setNewJob ] = useState<Job>(job);
  const editTheJob = async (e:React.FormEvent) => {
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
          "min-h-[150px] w-full rounded-md rounded-br-none rounded-bl-none border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
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
            class: "text-2xl"
          }
        },
        
      }),
    ],
    content: NewJob.content,
    onUpdate: ({ editor }) => {
      setNewJob((prevJob) => ({...prevJob, content: editor.getHTML()}));
    },
  });
  if(!editor) {
    return null;
  }
    return (
        <>
        <div className="space-y-4 w-full">
              <motion.div 
              className="space-y-2"
              >
              <Label htmlFor="name">Title</Label>
              <Input className="bg-inherit" placeholder="Product Manager" value={NewJob.title} onChange={((e) => {setNewJob((prev) => ({...prev, title: e.target.value}))})} />
              </motion.div>
              <motion.div 
              className="space-y-2"
              >
              <Label htmlFor="name">Type</Label>
              <Select defaultValue={NewJob.type} onValueChange={(e) => { setNewJob((prev) => ({ ...prev, type: e as Type}))}}>
              <SelectTrigger className="bg-inherit">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-black">
                <SelectGroup>
                  <SelectItem value="FULLTIME">Full-Time</SelectItem>
                  <SelectItem value="PARTTIME">Part-Time</SelectItem>
                  <SelectItem value="INTERNSHIP">Internship</SelectItem>
                  <SelectItem value="CONTRACT">Contract</SelectItem>
                </SelectGroup>
              </SelectContent>
              </Select>
              </motion.div>
              <motion.div 
              className="space-y-2"
              >
              <Label htmlFor="name">Location</Label>
              <Input className="bg-inherit" placeholder="Los Angeles, CA" value={NewJob.location!} onChange={((e) => {setNewJob((prev) => ({...prev, location: e.target.value}))})} />
              </motion.div>
              <motion.div 
              className="space-y-2 w-full"
              >
              <Label htmlFor="name">Job Description</Label>
              <RichTextEditor editor={editor!}/> 
              </motion.div>
            <div className="flex justify-between items-center w-full">
            {
              loading
              ? <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving Changes
                </Button>
              : <Button className="" onClick={editTheJob}>Save Changes</Button>
            }
            </div>
          </div>
        </>
    )
}