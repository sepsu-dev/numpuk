"use client";

import {
    Zap,
    Shield,
    Layers,
    Users,
    BarChart3,
    Infinity
} from "lucide-react";
import { Highlighter } from "@/components/highlighter";

const features = [
    {
        title: "Pribadi & Tim",
        description: "Kelola daftar belanja pribadi hingga proyek kolaborasi tim besar dalam satu tempat.",
        icon: Users,
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        title: "Fokus & Cepat",
        description: "Bekerja lebih cepat tanpa distraksi. Antarmuka ringan yang didesain untuk kecepatan.",
        icon: Zap,
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        title: "Organisir Proyek",
        description: "Gunakan folder dan tag untuk memisahkan urusan kerja, hobi, dan kehidupan pribadi.",
        icon: Layers,
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        title: "Tanpa Biaya",
        description: "Fitur manajemen tugas profesional yang bisa diakses siapa saja secara gratis selamanya.",
        icon: BarChart3,
        color: "text-accent",
        bg: "bg-accent/10",
    },
];

export function Features() {
    return (
        <section id="features" className="py-32 bg-[#F9FAFB]">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-[#121212]">
                        Segalanya yang Anda Butuhkan untuk <span className="text-primary italic">Tetap Teratur.</span>
                    </h2>
                    <p className="text-muted-foreground text-xl font-medium">
                        Numpuk hadir dengan fitur level enterprise yang biasanya berbayar. Kami berikan secara gratis untuk mendukung produktivitas Anda tanpa batas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
