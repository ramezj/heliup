import LayoutNav from "@/components/layout-nav"

export default function DashboardLayout({children, params, req} : any) {
  return (
      <LayoutNav>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </LayoutNav>
  )
}