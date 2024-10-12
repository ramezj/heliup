import { ThemeProvider } from "@/components/theme-provider";

export default function Layout({ children }: any) {
    return (
        <>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </>
    )
}