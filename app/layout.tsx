import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolageGrotesque.className}>
      <link rel="icon" href="/logo.jpg?v=2" />
      <body className="bg-background">
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
