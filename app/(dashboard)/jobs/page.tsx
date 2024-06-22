import { auth } from "@/auth"
import { getUserJobs } from "@/server-actions/jobs/get-user-jobs";
import { redirect } from "next/navigation";
import { JobsTable } from "@/components/jobs-table";
import { Job } from "@prisma/client";
import { toast } from "sonner";

export default async function Page() {
  const session = await auth();
  if(!session) { redirect('/auth') }
  const jobs = await getUserJobs();
  if(jobs?.ok === false) { toast(jobs.message) }
  return (
    <>
    <JobsTable jobs={jobs?.jobs as Job[]} />
    </>
  )
}