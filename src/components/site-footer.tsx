import Link from "next/link";

interface SiteFooterProps {
  author: string;
}

export function SiteFooter({ author }: SiteFooterProps) {
  return (
    <footer className="py-20 bg-[#F9FAFB] border-t border-border/40">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-[6px] border-primary" />
            <span className="text-2xl font-black tracking-tight text-[#121212]">Numpuk</span>
          </div>

          <p className="text-muted-foreground font-medium max-w-sm mx-auto leading-relaxed">
            Kelola produktivitas pribadi maupun tim tanpa stres. <br /> Didesain untuk para kreator, tersedia gratis selamanya.
          </p>

          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <Link href="#" className="text-sm font-bold text-[#121212] hover:text-primary transition-colors uppercase tracking-widest">Twitter</Link>
            <Link href="#fitur" className="text-sm font-bold text-[#121212] hover:text-primary transition-colors uppercase tracking-widest">Fitur</Link>
            <Link href="#" className="text-sm font-bold text-[#121212] hover:text-primary transition-colors uppercase tracking-widest">Bantuan</Link>
            <Link href="#" className="text-sm font-bold text-[#121212] hover:text-primary transition-colors uppercase tracking-widest">Privasi</Link>
          </nav>

          <div className="h-px w-20 bg-muted/20" />

          <div className="text-[13px] font-bold text-muted-foreground/60 tracking-tight">
            © {new Date().getFullYear()} {author} — Dibuat dengan penuh semangat di Jakarta.
          </div>
        </div>
      </div>
    </footer>
  );
}
