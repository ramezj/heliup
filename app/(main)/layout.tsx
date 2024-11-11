import LayoutNav from "@/components/layout-nav"
import { auth } from "@/auth"
import { Session } from "next-auth";

export default async function DashboardLayout({children, params, req} : any) {
  const session = await auth();
  console.log("premium : ", session?.user?.isPremium)
  return (
      <LayoutNav session={session as Session}>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </LayoutNav>
  )
}