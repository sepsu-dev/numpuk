"use client";

import Link from "next/link";
import { Highlighter } from "./highlighter";

interface SiteHeaderProps {
  name: string;
}

export function SiteHeader({ name }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-all duration-300 group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-[6px] border-primary group-hover:scale-110 transition-all duration-300" />
          <span className="text-2xl font-black tracking-tight text-[#121212]">Numpuk</span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center text-[15px] font-black text-[#121212] hover:opacity-70 transition-opacity"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-black text-white font-black text-[15px] shadow-[4px_4px_0_0_rgb(168,85,247)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95 whitespace-nowrap"
          >
            Daftar Gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
