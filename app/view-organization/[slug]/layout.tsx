import { ThemeProvider } from "@/components/theme-provider";

export default function Layout({ children }: any) {
    return (
        <>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <body className="bg-background">
            {children}
            </body>
        </ThemeProvider>
        </>
    )
}