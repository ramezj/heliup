import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export function Feature() {
    return (
        <>
        <Card className="bg-inherit">
            <CardHeader>
                <CardTitle>Custom Domain</CardTitle>
                <CardDescription>Bring your own custom domain.</CardDescription>
            </CardHeader>
        </Card>
        </>
    )
}