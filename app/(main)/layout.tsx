import LayoutNav from "@/components/layout-nav"
import { auth } from "@/auth"
import { Session } from "next-auth";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function DashboardLayout({children, params, req} : any) {
  const session = await auth();
  return (
      <LayoutNav session={session as Session}>
        {/* <SidebarProvider>
        <AppSidebar />
        </SidebarProvider> */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </LayoutNav>
  )
}