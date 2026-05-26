"use client";

import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Plus,
    Bell,
    CheckCircle2,
    Clock,
    Target
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

export default function CalendarPage() {
    const [viewMode, setViewMode] = useState<"internal" | "google">("google");
    const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const month = "Mei 2026";

    const events = [
        { day: 12, title: "Review Proyek", type: "work" },
        { id: 1, day: 25, title: "Update Sistem", type: "critical" },
        { day: 10, title: "Backup Data", type: "system" },
    ];

    const [currentDay] = useState(25);

    const handleAddEvent = () => {
        toast.info("Fitur tambah agenda segera hadir!");
    };

    const handleSync = () => {
        toast.success("Berhasil sinkronisasi dengan Google Calendar!");
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between gap-8 pb-8">
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Kalender</h2>
                    <p className="text-[#9CA3AF] text-sm font-medium mt-1">Jadwal dan agenda penting Anda.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-slate-50 p-1 rounded-sm flex border border-black/[0.04]">
                        <button
                            onClick={() => setViewMode("internal")}
                            className={cn(
                                "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm transition-all",
                                viewMode === "internal" ? "bg-white text-[#0A0A0A] shadow-sm" : "text-[#9CA3AF] hover:text-[#0A0A0A]"
                            )}
                        >
                            Internal
                        </button>
                        <button
                            onClick={() => setViewMode("google")}
                            className={cn(
                                "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm transition-all",
                                viewMode === "google" ? "bg-white text-[#0A0A0A] shadow-sm" : "text-[#9CA3AF] hover:text-[#0A0A0A]"
                            )}
                        >
                            Google
                        </button>
                    </div>
                    <button
                        onClick={handleAddEvent}
                        className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded-sm text-[11px] font-black hover:bg-black transition-all shadow-sm active:scale-95"
                    >
                        <Plus size={16} />
                        AGENDA BARU
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                {/* Main Calendar Area */}
                <div className="xl:col-span-2">
                    {viewMode === "internal" ? (
                        <div className="bg-white border border-black/[0.04] rounded-sm p-8 shadow-sm hover:shadow-md hover:border-accent/20 transition-all relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-black/[0.05]">
                                <h3 className="text-2xl font-black text-[#0A0A0A] tracking-tighter">{month}</h3>
                                <div className="flex gap-4">
                                    <button className="p-3 bg-white border border-black/[0.08] rounded-sm text-[#0A0A0A] hover:bg-[#FAFAFA] transition-all shadow-sm">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button className="p-3 bg-[#0A0A0A] text-white rounded-sm border border-transparent shadow-[3px_3px_0_0_rgba(168,85,247,0.3)] hover:bg-accent transition-all">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-7 gap-px bg-black/[0.05] border border-black/[0.08] rounded-sm overflow-hidden">
                                {days.map((day) => (
                                    <div key={day} className="py-4 text-center bg-[#FAFAFA] border-b border-black/10">
                                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0A0A0A]">{day}</span>
                                    </div>
                                ))}

                                {Array.from({ length: 31 }).map((_, i) => {
                                    const dayNum = i + 1;
                                    const hasEvent = events.find(e => e.day === dayNum);
                                    const isToday = dayNum === currentDay;

                                    return (
                                        <div key={i} className={`h-24 md:h-32 p-3 bg-white transition-all relative group hover:bg-accent/[0.02] cursor-pointer`}>
                                            <span className={`text-sm font-black w-8 h-8 flex items-center justify-center rounded-sm transition-all border ${isToday
                                                ? 'bg-accent text-white border-accent shadow-sm scale-110 z-10'
                                                : 'border-transparent text-[#6B7280] group-hover:text-[#0A0A0A]'
                                                }`}>
                                                {dayNum}
                                            </span>

                                            {hasEvent && (
                                                <div className={`mt-2 p-1.5 rounded-sm border border-black/[0.05] text-[8px] font-black uppercase tracking-tight truncate shadow-sm ${hasEvent.type === 'critical'
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-accent text-white'
                                                    }`}>
                                                    {hasEvent.title}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white border border-black/[0.04] rounded-sm shadow-sm hover:shadow-md hover:border-accent/20 transition-all overflow-hidden h-[750px] flex flex-col relative animate-in fade-in zoom-in-95 duration-500">
                            <div className="flex-1 w-full bg-white relative">
                                <iframe
                                    src="https://calendar.google.com/calendar/embed?src=en.indonesian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FJakarta"
                                    style={{ border: 0, width: '100%', height: '100%' }}
                                    frameBorder="0"
                                    scrolling="no"
                                    className="opacity-90"
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>

                {/* Panel Agenda Harian */}
                <div className="space-y-8">
                    <div className="bg-white border border-black/[0.04] p-10 rounded-sm shadow-sm hover:shadow-md hover:border-accent/20 transition-all h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-10">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]">Agenda Terdekat</h3>
                        </div>

                        <div className="space-y-8 flex-1">
                            <AgendaItem
                                title="Rapat Mingguan Numpux"
                                time="10:00 - 11:30"
                                info="Google Meet Link"
                                icon={<CheckCircle2 size={16} className="text-accent" />}
                                accentColor="border-l-accent"
                            />
                            <AgendaItem
                                title="Review Arsitektur"
                                time="14:00 - 15:30"
                                info="Kantor Utama"
                                icon={<Clock size={16} className="text-red-400" />}
                                accentColor="border-l-red-500"
                            />
                        </div>

                        <div className="pt-10 mt-auto border-t border-black/[0.05]">
                            <div className="bg-slate-50 p-6 rounded-sm border border-black/[0.05] space-y-3">
                                <div className="flex items-center gap-2">
                                    <Target size={14} className="text-accent" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">Catatan</span>
                                </div>
                                <p className="text-xs font-bold leading-relaxed italic text-[#6B7280]">"Jadwal Google akan disinkronisasi setiap 15 menit secara otomatis."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AgendaItem({ title, time, info, icon, accentColor }: { title: string, time: string, info: string, icon: any, accentColor: string }) {
    return (
        <div className={`p-6 border border-black/[0.04] rounded-sm bg-slate-50/50 space-y-3 border-l-4 ${accentColor} hover:bg-white hover:shadow-md transition-all shadow-sm`}>
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest">{time}</span>
                {icon}
            </div>
            <h4 className="text-[15px] font-black tracking-tight text-[#0A0A0A]">{title}</h4>
            <p className="text-[10px] text-[#9CA3AF] font-bold">{info}</p>
        </div>
    );
}
