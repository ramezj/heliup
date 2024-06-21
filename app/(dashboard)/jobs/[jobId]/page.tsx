export default function Page({ params }: { params: { jobId: string } }) {
    return (
        <>
        JOB ID : {params.jobId} PREVIEW
        </>
    )
}