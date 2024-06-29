export default function Layout({children, params, req} : any) {
    return (
        <>
        <div className="w-full border-b-2 border-0 h-16">
        </div>
        <div>
        {children}
        </div>
        </>
    )
}