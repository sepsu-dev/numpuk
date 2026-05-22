"use client";

import {
    Zap,
    Shield,
    Layers,
    Users,
    BarChart3
} from "lucide-react";

export function Features() {
    return (
        <section id="features" className="py-40 bg-[#F9FAFB] relative overflow-hidden">
            <div className="container px-8 md:px-16 lg:px-24 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black mb-6 uppercase tracking-widest">
                        Ekosistem Fitur
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.2] tracking-tighter text-[#121212]">
                        Instrumen Lengkap untuk <br className="hidden md:block" /> <span className="text-primary italic">Produktivitas Maksimal.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl font-bold leading-relaxed">
                        Numpuk menyatukan instrumen kelas dunia dalam satu antarmuka yang intuitif. Dirancang khusus untuk mendukung ritme kerja yang dinamis dan terstruktur.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Visual Kanban",
                            desc: "Pantau progres proyek secara visual dengan sistem drag-and-drop yang sangat responsif.",
                            icon: Layers,
                            color: "text-primary",
                            bg: "bg-primary/10"
                        },
                        {
                            title: "Agenda Terintegrasi",
                            desc: "Sinkronkan jadwal dan tenggat waktu dalam satu tampilan kalender yang presisi.",
                            icon: BarChart3,
                            color: "text-accent",
                            bg: "bg-accent/10"
                        },
                        {
                            title: "Daftar Tugas Mikro",
                            desc: "Urai kompleksitas proyek dengan sistem sub-tugas dan daftar periksa yang terorganisir.",
                            icon: Zap,
                            color: "text-primary",
                            bg: "bg-primary/10"
                        },
                        {
                            title: "Sinergi Kolaborasi",
                            desc: "Berbagi proyek dan komunikasikan tugas secara real-time antar anggota tim tanpa hambatan.",
                            icon: Users,
                            color: "text-accent",
                            bg: "bg-accent/10"
                        },
                        {
                            title: "Notifikasi Proaktif",
                            desc: "Sistem pengingat cerdas yang menjaga fokus Anda tetap pada prioritas utama.",
                            icon: Zap,
                            color: "text-primary",
                            bg: "bg-primary/10"
                        },
                        {
                            title: "Penyimpanan Aset",
                            desc: "Kelola dokumen dan lampiran penting secara aman di dalam setiap kartu tugas.",
                            icon: Shield,
                            color: "text-accent",
                            bg: "bg-accent/10"
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-[32px] border-2 border-transparent bg-white hover:border-black shadow-lg hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-500 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-sm`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-black mb-3 text-[#121212] tracking-tight">{feature.title}</h3>
                            <p className="text-sm md:text-base text-muted-foreground font-bold leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
