import { ThemeProvider } from "@/components/theme-provider";

export default function Layout({ children }: any) {
    return (
        <>
        <ThemeProvider attribute="class" defaultTheme="dark">
            <body className="bg-white dark:bg-black">
            {children}
            </body>
        </ThemeProvider>
        </>
    )
}