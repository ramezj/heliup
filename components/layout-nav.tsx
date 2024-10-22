'use client'

import Link from "next/link"
import { Home, Users, BriefcaseBusiness, Settings2, Banknote, LogOut, ChevronUp, User2 } from "lucide-react"
import { SidebarMenuItem } from "./ui/sidebar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { Session } from "next-auth"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"
import { Gem } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { SidebarFooter } from "./ui/sidebar"

export default function LayoutNav({ children, session }: { children: React.ReactNode; session: Session }) {
    const path = usePathname();
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="hidden border-r md:block ">
          <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0 z-50">
            <div className="flex h-16 items-center border-b px-3 lg:h-16 text-center justify-center">
            <Link href='/' className="flex items-center justify-center">
              <span className="font-bold text-lg">Heliup</span>
            </Link>
            </div>
            <div className="flex-1 ">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2 mt-1">
                <Link href={`/dashboard`} className={`${path.includes('/dashboard') ? 'dark:bg-muted/50 bg-muted text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary dark:hover:bg-muted/50 hover:bg-muted duration-200`}>
                  <Home className="h-4 w-4" />
                  Home
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
            <div className="p-4 w-full flex gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"} className="w-full dark:bg-black bg-white">
                    {/* <Avatar className="size-5 mr-2 items-center">
                    <AvatarImage src={session?.user?.image!} />
                    <AvatarFallback>{session.user?.name}</AvatarFallback>
                    </Avatar> */}
                    {session.user?.name}
                    <ChevronUp className="ml-auto size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] dark:bg-black bg-white space-y-2"
                >
                  <DropdownMenuItem className="cursor-pointer">
                  <span className="flex align-middle items-center"><Settings2 className="size-4 mr-2" />Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                  <span className="flex align-middle items-center"><Banknote className="size-4 mr-2" />Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={(() => { signOut({ callbackUrl: "/" })})} className="cursor-pointer">
                    <span className="flex align-middle items-center"><LogOut className="size-4 mr-2" />Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            {/* <Button onClick={((e) => { signOut({ callbackUrl: "/" })})} variant={"outline"} size={"icon"} className="bg-inherit w-full"><LogOut className="text-white size-4 mr-2"/>Log out</Button> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col sticky">
          <header className="z-50 flex h-16 items-center gap-4 border-b px-3 lg:h-16 sticky top-0 bg-black">
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
              <SheetContent side="left" className="flex flex-col bg-black">
                <SheetClose asChild>
                  <Link href="/" className="px-2 flex items-center text-lg font-bold justify-center">
                    Heliup
                  </Link>
                  </SheetClose>
                <nav className="grid gap-3 text-lg font-medium mt-1">
                  <SheetClose asChild>
                  <Link href="/dashboard" className={`${path.includes('/dashboard') ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                  <Home className="h-4 w-4" />
                  Home
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
                <div className="w-full flex gap-2 pt-4 bottom-0">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"} className="w-full dark:bg-black bg-white">
                    {session.user?.name}
                    <ChevronUp className="ml-auto size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] dark:bg-black bg-white space-y-2">
                  <DropdownMenuItem className="cursor-pointer">
                  <span className="flex align-middle items-center"><Settings2 className="size-4 mr-2" />Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                  <span className="flex align-middle items-center"><Banknote className="size-4 mr-2" />Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={(() => { signOut({ callbackUrl: "/" })})} className="cursor-pointer">
                    <span className="flex align-middle items-center"><LogOut className="size-4 mr-2" />Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
                {/* <Button onClick={((e) => { signOut({ callbackUrl: "/" })})} variant={"outline"} size={"icon"} className="bg-inherit w-full"><LogOut className="text-white size-4 mr-2"/>Log out</Button> */}
                </div>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
            </div>
            <div className="flex-1"></div> 
            <div className="ml-auto">
              {/* <Button className="bg-inherit" variant={"outline"}><Gem className="size-4 mr-2"/>Upgrade to Premium</Button> */}
            </div>
          </header>
              {children}
        </div>
      </div>
    )
}