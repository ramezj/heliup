import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export default function Page() {
    return (
        <>
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger>
                trigger
            </SidebarTrigger>
        </SidebarProvider>
        </>
    )
}