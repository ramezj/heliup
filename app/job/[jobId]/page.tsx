export default function Page({ params }: { params: { jobId: string } }) {
    return (
        <>
        Page ID : {params.jobId}
        </>
    )
}