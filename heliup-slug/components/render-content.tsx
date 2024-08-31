"use client"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export function RenderContent({ content } : { content: string}) {
    const [editable, setEditable] = useState(false)
    const editor = useEditor({
        editable,
        content: content,
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
  })
  if (!editor) {
    return null;
  }
    return (
        <>
        <EditorContent editor={editor} />
        </>
    )
}