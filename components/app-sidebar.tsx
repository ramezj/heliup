"use client"
import * as React from "react"
import { usePathname } from "next/navigation"
import { SearchForm } from "@/components/search-form"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem  } from "./ui/dropdown-menu"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { User2, ChevronUp, Home, Users, BriefcaseBusiness, Settings2, Banknote, LogOut } from "lucide-react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="items-center justify-center">
        <h1 className="text-lg mt-2">Heliup</h1>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={false}>
            <a href='/'>Home</a>
          </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={false}>
            <a href='/'>Jobs</a>
          </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={false}>
            <a href='/'>Applicants</a>
          </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={false}>
            <a href='/'>Billing</a>
          </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={false}>
            <a href='/'>Settings</a>
          </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size={"default"}>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
