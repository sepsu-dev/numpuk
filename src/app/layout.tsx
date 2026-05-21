import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/tooltip";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "@/app/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export function generateMetadata(): Metadata {
  return {
    title: {
      default: "Numpuk — Kelola Tugas Tanpa Beban",
      template: `%s — Numpuk`,
    },
    description: "Aplikasi task management gratis yang membantu Anda menyusun tugas lebih rapi dan produktif.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased font-sans min-h-screen bg-background text-foreground">
        <NextTopLoader showSpinner={false} color="#6366f1" />
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
