import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden font-sans">
      {/* Programmer Ornaments / Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>

      {/* Decorative Orbs */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="relative z-10 animate-in fade-in duration-1000">
        <Hero />
        <Features />
      </main>
    </div>
  );
}