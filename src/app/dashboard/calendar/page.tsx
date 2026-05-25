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

export default function CalendarPage() {
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

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Kalender</h2>
                    <p className="text-[#6B7280] font-medium mt-1">Pantau semua jadwal dan agenda penting Anda.</p>
                </div>
                <button
                    onClick={handleAddEvent}
                    className="flex items-center gap-2 px-8 py-3.5 bg-[#0A0A0A] text-white rounded-sm text-sm font-black hover:bg-accent transition-all shadow-[4px_4px_0_0_rgba(168,85,247,0.3)] active:scale-95"
                >
                    <Plus size={18} />
                    Tambah Agenda
                </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                {/* Kalender Grid */}
                <div className="xl:col-span-2 bg-white border border-black/[0.08] rounded-sm p-8 shadow-sm relative overflow-hidden">
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

                {/* Panel Agenda Harian */}
                <div className="space-y-8">
                    <div className="bg-[#0A0A0A] text-white p-10 rounded-sm shadow-[4px_4px_0_0_rgba(168,85,247,0.2)] h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-sm bg-accent/20 border border-accent/40 flex items-center justify-center">
                                <Bell size={20} className="text-accent" />
                            </div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#9CA3AF]">Agenda Hari Ini</h3>
                        </div>

                        <div className="space-y-8 flex-1">
                            <AgendaItem
                                title="Rapat Mingguan"
                                time="10:00 - 11:30"
                                info="Meeting Online"
                                icon={<CheckCircle2 size={16} className="text-accent" />}
                                accentColor="border-l-accent"
                            />
                            <AgendaItem
                                title="Update Sistem Produksi"
                                time="14:00 - 15:30"
                                info="Server Utama"
                                icon={<Clock size={16} className="text-red-400" />}
                                accentColor="border-l-red-500"
                            />
                        </div>

                        <div className="pt-10 mt-auto border-t border-white/5">
                            <div className="bg-white/5 p-6 rounded-sm border border-white/10 space-y-3">
                                <div className="flex items-center gap-2">
                                    <Target size={14} className="text-accent" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">Target Utama</span>
                                </div>
                                <p className="text-xs font-bold leading-relaxed italic">"Simpelkan semua alur kerja agar lebih efisien."</p>
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
        <div className={`p-6 border border-white/10 rounded-sm bg-white/5 space-y-3 border-l-4 ${accentColor} hover:bg-white/10 transition-all shadow-sm`}>
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">{time}</span>
                {icon}
            </div>
            <h4 className="text-[15px] font-black tracking-tight">{title}</h4>
            <p className="text-[10px] text-[#6B7280] font-medium">{info}</p>
        </div>
    );
}
