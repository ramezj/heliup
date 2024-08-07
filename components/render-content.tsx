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
    useEffect(() => {
        if (!editor) {
        return undefined
    }
        editor.setEditable(editable)
    }, [editor, editable])
    if (!editor) {
        return null
    }
    return (
        <>
        <EditorContent editor={editor!} />
        </>
    )
}