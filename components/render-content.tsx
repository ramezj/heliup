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
        extensions: [StarterKit],
  })
  if (!editor) {
    return (
        <div className='flex flex-col gap-3'>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        </div>
    )
  }
    return (
        <>
        <EditorContent editor={editor!} />
        </>
    )
}