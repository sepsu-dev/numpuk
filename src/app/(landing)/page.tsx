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

        {/* Visual Showcase Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container px-8 md:px-16 lg:px-24 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-black mb-8 uppercase tracking-widest">
                  Fleksibilitas Kerja
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.2] tracking-tighter text-[#121212]">
                  Satu Ekosistem, <br /> <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-8">Beragam Perspektif.</span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl font-bold leading-relaxed mb-12">
                  Sesuaikan tampilan alur kerja dengan kebutuhan spesifik Anda. Beralih antar tampilan secara mulus tanpa mengganggu ritme kerja.
                </p>

                <div className="space-y-6">
                  {[
                    { t: "Manajemen Visual Kanban", d: "Optimal untuk pemantauan alur kerja tim yang dinamis." },
                    { t: "Daftar Tugas Berbasis Prioritas", d: "Efisiensi tinggi untuk eksekusi tugas harian yang terfokus." },
                    { t: "Visualisasi Kalender", d: "Perencanaan strategis untuk memantau milestones dan deadline." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-black text-[#121212] mb-1">{item.t}</h4>
                        <p className="text-muted-foreground text-sm font-bold">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-[40px] border-[6px] border-black bg-white overflow-hidden shadow-2xl p-6">
                    <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-orange-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <div className="ml-4 h-6 w-32 bg-gray-100 rounded-lg animate-pulse" />
                    </div>
                    {/* Mockup Content */}
                    <div className="grid grid-cols-3 gap-4 h-64">
                      <div className="bg-gray-50 rounded-2xl p-3 border-2 border-dashed border-gray-200">
                        <div className="h-4 w-full bg-gray-200 rounded-md mb-2" />
                        <div className="h-12 w-full bg-white border border-gray-100 rounded-xl shadow-sm mb-2" />
                        <div className="h-12 w-full bg-white border border-gray-100 rounded-xl shadow-sm" />
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-3 border-2 border-dashed border-gray-200">
                        <div className="h-4 w-full bg-gray-200 rounded-md mb-2" />
                        <div className="h-12 w-full bg-accent/10 border border-accent/20 rounded-xl shadow-sm" />
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-3 border-2 border-dashed border-gray-200">
                        <div className="h-4 w-full bg-gray-200 rounded-md mb-2" />
                        <div className="h-12 w-full bg-white border border-gray-100 rounded-xl shadow-sm mb-2" />
                        <div className="h-12 w-full bg-primary/10 border border-primary/20 rounded-xl shadow-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-[#121212] text-white">
          <div className="container px-8 md:px-16 lg:px-24 mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">Siap Menghidupkan Visi Anda?</h2>
            <p className="text-gray-400 text-lg md:text-xl font-bold max-w-2xl mx-auto mb-12">
              Optimalkan produktivitas tim Anda dengan ekosistem Numpuk. <br className="hidden md:block" /> Akses instan ke fitur premium, selamanya tanpa biaya.
            </p>
            <button className="px-10 py-5 rounded-full bg-primary text-white font-black text-xl hover:scale-105 transition-all shadow-[6px_6px_0_0_rgb(255,255,255)] active:scale-95">
              Mulai Sekarang — 100% Gratis
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}