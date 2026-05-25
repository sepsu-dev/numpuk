import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Bricolage_Grotesque } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "@/app/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export function generateMetadata(): Metadata {
  return {
    title: {
      default: "Numpux",
      template: `%s — Numpux`,
    },
    description: "Numpux",
  };
}

import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${outfit.variable} ${bricolage.variable}`} data-scroll-behavior="smooth">
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
