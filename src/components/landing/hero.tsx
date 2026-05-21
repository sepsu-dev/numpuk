"use client";

import { ArrowRight, CheckCircle2, Star, Users } from "lucide-react";
import { Highlighter } from "@/components/highlighter";

function Users_Avatars() {
    return (
        <div className="flex -space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-blue-400 overflow-hidden" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-orange-400 overflow-hidden" />
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-[10px] font-bold">2+</div>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative pt-32 pb-40 overflow-hidden bg-[#FEFEFE]">
            <div className="container px-8 md:px-16 lg:px-24 mx-auto relative z-10">
                <div className="max-w-5xl mx-auto text-center relative">

                    {/* Floating 'Asset' Card Left */}
                    <div className="absolute -left-60 top-40 hidden 2xl:block animate-in fade-in slide-in-from-left-20 duration-1000 delay-300 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-[32px] border border-white shadow-2xl -rotate-6 w-64">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white shadow-sm" />
                                    <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white shadow-sm" />
                                </div>
                                <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">Asset Proyek</div>
                            </div>
                            <h4 className="text-md font-black text-left mb-2">Gaya Visual Brand</h4>
                            <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-extrabold uppercase">
                                <Users className="w-3.5 h-3.5 text-black" />
                                <span>5 Tim Aktif</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating 'Animasi UI' Card Right */}
                    <div className="absolute -right-60 top-24 hidden 2xl:block animate-in fade-in slide-in-from-right-20 duration-1000 delay-500 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-[32px] border border-white shadow-2xl rotate-3 w-64">
                            <div className="flex justify-between items-center mb-6 text-left">
                                <div className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">Update Terakhir</div>
                            </div>
                            <h4 className="text-md font-black text-left mb-2">Animasi UI Dashboard</h4>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-5 h-5 rounded-lg bg-primary opacity-20" />
                                <div className="h-2.5 w-full bg-muted/40 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-primary" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-[11px] font-extrabold text-muted-foreground uppercase text-left">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                    Selesai 10 Nov
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#121212] leading-[1.1]">
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 mb-6">
                            <span>Kuasai</span>
                            <div className="inline-flex items-center align-middle h-10 md:h-14 px-3 bg-[#F3F4F6] rounded-full border-2 border-white shadow-lg"><Users_Avatars /></div>
                            <span>Alur Kerja</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                            <div className="inline-flex items-center gap-3 px-5 py-3 border-[2px] border-black/5 rounded-[24px] bg-white/80 backdrop-blur-xl shadow-xl -rotate-1">
                                <div className="w-5 h-5 rounded-full border-[2px] border-primary" />
                                <div className="text-left font-black text-[16px] md:text-[20px] leading-none text-black">Strategi Utama</div>
                            </div>
                            <span className="text-primary font-black italic bg-primary/5 px-4 py-1.5 rounded-2xl border border-primary/10">Tanpa Batas</span>
                        </div>
                    </h1>

                    <p className="text-md md:text-xl text-muted-foreground/75 mb-12 max-w-3xl mx-auto leading-relaxed font-bold mt-12">
                        Transformasi produktivitas Anda. Kelola proyek pribadi hingga kolaborasi tim dalam satu ekosistem yang cerdas, elegan, dan sepenuhnya gratis.
                    </p>

                    <div className="flex flex-col items-center gap-6 mb-16">
                        <button className="px-10 py-5 rounded-full bg-accent text-white font-black text-xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95 flex items-center gap-4">
                            Mulai Perjalanan Anda — Gratis
                        </button>
                        <div className="flex items-center gap-2 text-[13px] font-bold text-muted-foreground uppercase tracking-widest">
                            <CheckCircle2 className="w-4 h-4 text-black" />
                            <span>Fitur Premium, Tanpa Biaya Berlangganan</span>
                        </div>
                    </div>
                </div>

                {/* Improved Dashboard Preview */}
                <div className="mt-12 relative max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 px-4">
                    <div className="absolute -top-12 -left-12 -z-10 w-40 h-20 bg-primary/20 blur-3xl opacity-50 rotate-12" />
                    <div className="absolute -bottom-12 -right-12 -z-10 w-40 h-20 bg-accent/20 blur-3xl opacity-50 -rotate-12" />

                    <div className="bg-white rounded-[40px] border-4 border-[#F3F4F6] shadow-2xl overflow-hidden aspect-[16/9] lg:aspect-[16/8] flex">
                        {/* Dashboard Sidebar Mockup */}
                        <div className="w-[220px] h-full bg-[#FCFCFC] border-r border-[#F3F4F6] p-8 hidden md:block">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-10 h-10 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-xl">S</div>
                                <div className="text-left">
                                    <div className="text-sm font-black">Sadek Hosen</div>
                                    <div className="w-12 h-1 bg-muted rounded-full" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 w-full bg-muted/50 rounded-full" />
                                <div className="h-2 w-3/4 bg-muted/50 rounded-full" />
                                <div className="h-2 w-full bg-muted/50 rounded-full" />
                            </div>
                        </div>
                        {/* Main Content Mockup */}
                        <div className="flex-1 p-8 md:p-12 text-left bg-white">
                            <div className="flex justify-between items-center mb-10">
                                <div className="h-1.5 w-32 bg-muted rounded-full" />
                                <div className="flex -space-x-2 items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" />
                                    <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white" />
                                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">+5</div>
                                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-[18px] ml-4 font-black transition-transform hover:rotate-12 cursor-pointer">+</div>
                                </div>
                            </div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Desain Web</div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Landing Page Numpuk</h2>

                            <div className="grid grid-cols-2 gap-12 mt-auto">
                                <div>
                                    <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-2">Perusahaan</div>
                                    <div className="text-2xl font-black">NUMPUK</div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-2">Tanggal Mulai</div>
                                    <div className="text-2xl font-black">21 Mei 2026</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
