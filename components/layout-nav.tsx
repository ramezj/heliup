'use client'

import Link from "next/link"
import { Home, Users, BriefcaseBusiness, Settings2, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function LayoutNav({children, params, req} : any) {
    const path = usePathname();
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="hidden border-r md:block ">
          <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0 z-50">
            <div className="flex h-16 items-center border-b px-3 lg:h-16 text-center justify-center">
            <Link href='/' className="flex items-center justify-center">
              <BriefcaseBusiness className="size-4 mr-2" />
              <span className="font-bold text-lg">hirehollo</span>
            </Link>
            </div>
            <div className="flex-1 ">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2 mt-1">
                <Link href={`/dashboard`} className={`${path.includes('/dashboard') ? 'dark:bg-muted/50 bg-muted text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary dark:hover:bg-muted/50 hover:bg-muted duration-200`}>
                  <Home className="h-4 w-4" />
                  Board
                </Link>
                <Link href={`/jobs`} className={`${path.includes('/jobs') ? 'dark:bg-muted/50 bg-muted text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary dark:hover:bg-muted/50 hover:bg-muted duration-200`}>
                  <BriefcaseBusiness className="h-4 w-4" />
                  Jobs
                </Link>
                <Link href={`/applicants`} className={`${path.includes('/applicants') ? 'dark:bg-muted/50 bg-muted text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary dark:hover:bg-muted/50 hover:bg-muted duration-200`}>
                  <Users className="h-4 w-4" />
                  Applicants
                </Link>
                <Link href='/billing' className={`${path == '/billing' ? 'dark:bg-muted/50 bg-muted text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary dark:hover:bg-muted/50 hover:bg-muted duration-200`}>
                <Banknote className="h-4 w-4" />
                  Billing
                </Link>
                <Link href='/settings' className={`${path == '/settings' ? 'dark:bg-muted/50 bg-muted text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary dark:hover:bg-muted/50 hover:bg-muted duration-200`}>
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
                  <Link href="/" className="px-2 flex items-center text-lg font-bold">
                  <BriefcaseBusiness className="size-4 mr-2" />
                    hirehollo
                  </Link>
                  </SheetClose>
                <nav className="grid gap-3 text-lg font-medium mt-1">
                  <SheetClose asChild>
                  <Link href="/dashboard" className={`${path.includes('/dashboard') ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                  <Home className="h-4 w-4" />
                  Board
                  </Link>
                  </SheetClose>
                  <SheetClose asChild>
                  <Link href="/jobs" className={`${path.includes('/jobs') ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                  <BriefcaseBusiness className="h-4 w-4" />
                  Jobs
                  </Link>
                  </SheetClose>
                  <SheetClose asChild>
                  <Link href="/applicants" className={`${path.includes('/applicants') ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                  <Users className="h-4 w-4" />
                  Applicants
                  </Link>
                  </SheetClose>
                  <SheetClose asChild>
                  <Link href='/billing' className={`${path == '/billing' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                  <Banknote className="h-4 w-4" />
                    Billing
                  </Link>
                  </SheetClose>
                  <SheetClose asChild>
                  <Link href='/settings' className={`${path == '/settings' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                  <Settings2 className="h-4 w-4" />
                    Settings
                  </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
            </div>
          </header>
              {children}
        </div>
      </div>
    )
}