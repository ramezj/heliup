import { Card, CardContent } from "./ui/card"
import { Label } from "./ui/label"
import ShineBorder from "./magicui/shine-border"
import { Skeleton } from "./ui/skeleton"
import { Loader2 } from "lucide-react"

export function StatisticalCard({ name, number} : { name: string, number: number}) {
    return (
        <>
        <ShineBorder color={"dark" ? "white" : "black"} >
        <Card className="w-full bg-inherit">
        <CardContent className="pt-6">
        <div className="space-y-2">
          <Label className="font-bold text-lg">
            {name}
          </Label>
          <p className="font-bold text-lg">{number}</p>
        </div>
      </CardContent>
    </Card>
    </ShineBorder>
        </>
    )
}

export function LoadingStatisticalCard({ name} : { name: string}) {
  return (
      <>
      <Card className="w-full relative">
      <ShineBorder color={"dark" ? "white" : "black"}>
      <CardContent className="pt-6">
      <div className="space-y-2">
        <Label className="font-bold text-lg">
          {name}
        </Label>
        {/* <Skeleton className="h-4 w-[75px]" /> */}
        <p className="text-lg">loading</p>
      </div>
    </CardContent>
    </ShineBorder>
  </Card>
      </>
  )
}