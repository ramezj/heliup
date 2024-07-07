import { Separator } from "@/components/ui/separator"

export default function Page() {
    return (
        <>
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight">Billing</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className=""/>
        </>
    )
}