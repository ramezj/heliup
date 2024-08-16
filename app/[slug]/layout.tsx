import { Toggle } from "@/components/toggle"

export default function Layout({children, params, req} : any) {
    return (
        <>
        <div className="w-full border-b border-0 h-16 sticky text-center justify-between flex items-center px-6">
        <div className="flex">
            <h1>website</h1>
        </div>
        <div className="flex">
            <h1>website 2</h1>
        </div>
        </div>
        {children}
        </>
    )
}