import { Card, CardContent } from "./ui/card"
import { Label } from "./ui/label"
import ShineBorder from "./magicui/shine-border"

export function StatisticalCard({ name, number} : { name: string, number: number}) {
    return (
        <>
        <Card className="w-full relative">
        <ShineBorder color={"dark" ? "white" : "black"}>
        <CardContent className="pt-6">
        <div className="space-y-2">
          <Label className="font-bold text-lg">
            {name}
          </Label>
          <p className="font-bold text-lg">{number}</p>
        </div>
      </CardContent>
      </ShineBorder>
    </Card>
        </>
    )
}