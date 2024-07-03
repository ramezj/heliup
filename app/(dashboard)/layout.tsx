'use client'
import Link from "next/link"
import {
  XIcon,
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  BriefcaseBusiness,
  Settings,
  CreditCard,
  MessageCircle,
  Lightbulb,
  BanIcon,
  Radio,
  MenuIcon,
  Settings2,
  Settings2Icon,
  Banknote
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Metadata } from "next"
import { useState } from "react"
import { usePathname } from "next/navigation"

function useLastPathSegment() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  return segments[segments.length - 1];  // Returns the last segment of the path
}

export default function DashboardLayout({children, params, req} : any) {
  const path = useLastPathSegment();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
      <div className="hidden border-r md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-16 items-center border-b px-4 lg:h-16 text-center justify-center">
          <Link href='/'>
            <span className="font-bold text-lg">hirehollo</span>
          </Link>
          </div>
          <div className="flex-1 ">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2 mt-1">
              <Link href={`/dashboard`} className={`${path == 'dashboard' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                <Home className="h-4 w-4" />
                Board
              </Link>
              <Link href={`/jobs`} className={`${path == 'jobs' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                <BriefcaseBusiness className="h-4 w-4" />
                Jobs
              </Link>
              <Link href='/applicants' className={`${path == 'applicants' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
              <Users className="h-4 w-4" />
                Applicants
              </Link>
              <Link href='/billing' className={`${path == 'billing' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
              <Banknote className="h-4 w-4" />
                Billing
              </Link>
              <Link href='/settings' className={`${path == 'settings' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
              <Settings2 className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col sticky">
        <header className="flex h-16 items-center gap-4 border-b px-3 lg:h-16 sticky z-1 top-0 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <SheetClose asChild>
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                  hirehollo
                </Link>
                </SheetClose>
              <nav className="grid gap-3 text-lg font-medium mt-1">
                <SheetClose asChild>
                <Link href={`/dashboard`} className={`${path == 'dashboard' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                <Home className="h-4 w-4" />
                Dashboard
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href={`/jobs`} className={`${path == 'jobs' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                <BriefcaseBusiness className="h-4 w-4" />
                Jobs
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href='/applicants' className={`${path == 'applicants' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                <Users className="h-4 w-4" />
                  Applicants
                </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
        </main>
      </div>
    </div>
  )
}