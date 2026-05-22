import Image from "next/image";
import Link from "next/link";
import { Highlighter } from "@/components/highlighter";


interface SiteFooterProps {
  author: string;
}

export function SiteFooter({ author }: SiteFooterProps) {
  return (
    <footer className="py-10 bg-white border-t border-black/5">
      <div className="container max-w-5xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group relative">
          <Image src="/logo.png" alt="Numpux Logo" width={24} height={24} />
          <span className="text-xl font-black tracking-tight text-[#0A0A0A] relative z-10">
            {author.replace(" Team", "")}
            <Highlighter variant={1} className="text-primary/15 -bottom-1" />
          </span>
        </Link>




        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-xs font-black text-muted-foreground hover:text-black transition-colors tracking-widest">Fitur</Link>
          <Link href="#pricing" className="text-xs font-black text-muted-foreground hover:text-black transition-colors tracking-widest">Harga</Link>
          <Link href="#" className="text-xs font-black text-muted-foreground hover:text-black transition-colors tracking-widest">Privasi</Link>
        </nav>

        <p className="text-[11px] font-bold text-muted-foreground/50">
          © {new Date().getFullYear()} {author}
        </p>
      </div>
    </footer>
  );
}
