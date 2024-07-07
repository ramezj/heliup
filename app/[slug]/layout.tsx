import { Toggle } from "@/components/toggle"

export default function Layout({children, params, req} : any) {
    return (
        <>
        <div className="w-full border-b border-0 h-16">
        </div>
        <div>
        {children}
        </div>
        </>
    )
}