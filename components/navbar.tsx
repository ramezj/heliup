'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Toggle } from "./toggle"
import { usePathname } from "next/navigation"
import { Home, BriefcaseBusiness, Users, SparklesIcon, DollarSignIcon, Laptop, StarIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "./ui/icons"

function useLastPathSegment() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  return segments[segments.length - 1];  // Returns the last segment of the path
}

export function Navigation(props:any) {
  const path = useLastPathSegment();
  return (
    <div className="flex w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-3 z-50">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/" className="flex items-center text-lg font-bold">
          <BriefcaseBusiness className="size-4 mr-2 " />
          hirehollo
          </Link>
          <Link href="/" className="text-foreground transition-colors hover:text-foreground font-semibold">
            Features
          </Link>
          <Link href="/" className="text-foreground transition-colors hover:text-foreground font-semibold">
            Demo
          </Link>
          <Link href="/" className="text-foreground transition-colors hover:text-foreground font-semibold">
            Pricing
          </Link>
        </nav>
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
                <Link href={`/dashboard`} className={`${path == 'dashboard' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                <SparklesIcon className="h-4 w-4" />
                Features
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href={`/jobs`} className={`${path == 'jobs' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                <Laptop className="h-4 w-4" />
                Demo
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link href='/applicants' className={`${path == 'applicants' ? 'bg-muted/50 text-foreground' : ' text-muted-foreground'} flex items-center gap-3 rounded-lg px-2 py-2 text-primary transition-all hover:text-primary hover:bg-muted/50 duration-200`}>
                <DollarSignIcon className="h-4 w-4" />
                  Pricing
                </Link>
                </SheetClose>
              </nav>
            </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-3 md:ml-auto">
          <div className="ml-auto flex-1 sm:flex-initial">
          </div>
          {/* <Toggle /> */}
          {
            props.session 
            ? 
            <>
                <Button variant="default" asChild>
                  <Link href='/dashboard'>
                  Dashboard
                  </Link>
                  </Button>
            </>
            :
            <>
                  <Button variant="default" asChild className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link href='/auth'>
                  Sign In
                  </Link>
                  </Button>
            </>
          }
        </div>
      </header>
    </div>
  )
}