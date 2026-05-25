"use client";

import { useState, useEffect } from "react";

import {
    CheckCircle2,
    Clock,
    Briefcase,
    ArrowRight,
    Plus,
    TrendingUp,
    Zap,
    CalendarDays,
    CircleDashed,
    PlayCircle
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    PieChart,
    Pie,
} from 'recharts';

const taskData = [
    { day: 'Sen', tasks: 12 },
    { day: 'Sel', tasks: 18 },
    { day: 'Rab', tasks: 15 },
    { day: 'Kam', tasks: 25 },
    { day: 'Jum', tasks: 20 },
    { day: 'Sab', tasks: 8 },
    { day: 'Min', tasks: 5 },
];

const projectDistribution = [
    { name: 'Desain', value: 45, color: '#A855F7' },
    { name: 'Sistem', value: 25, color: '#0A0A0A' },
    { name: 'Konten', value: 20, color: '#6366F1' },
    { name: 'Lainnya', value: 10, color: '#9CA3AF' },
];

export default function DashboardPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">

            {/* Simple Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 py-4 border-b border-black/5">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Ringkasan Hari Ini</h2>
                    <p className="text-[#6B7280] font-medium text-sm">Berfokuslah pada tugas yang paling penting sekarang.</p>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/dashboard/tasks/new">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded-sm text-xs font-black hover:bg-accent transition-all shadow-[4px_4px_0_0_rgba(168,85,247,0.3)] active:scale-95">
                            <Plus size={16} />
                            TUGAS BARU
                        </button>
                    </Link>
                </div>
            </div>

            {/* Top Metrics - Super Clean */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <MiniStat label="Selesai" value="128" color="text-emerald-600" />
                <MiniStat label="Proses" value="15" color="text-blue-600" />
                <MiniStat label="Antrean" value="24" color="text-orange-600" />
                <MiniStat label="Proyek" value="4" color="text-accent" />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                <div className="xl:col-span-8 space-y-8">

                    {/* Activity Chart */}
                    <div className="bg-white border border-black/[0.08] p-8 rounded-sm shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#0A0A0A]">Produktivitas Mingguan</h3>
                            <div className="text-emerald-500 font-bold text-[10px] flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-sm">
                                <TrendingUp size={12} /> +12%
                            </div>
                        </div>
                        <div className="h-[240px] w-full min-h-0 min-w-0">
                            {isMounted && (
                                <ResponsiveContainer width="100%" height="100%" minHeight={0} minWidth={0}>
                                    <BarChart data={taskData}>
                                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontWeight: 'bold', fontSize: 10 }} dy={10} />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(168,85,247,0.05)' }}
                                            contentStyle={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '10px', fontWeight: '900' }}
                                        />
                                        <Bar dataKey="tasks" barSize={32} radius={[4, 4, 0, 0]}>
                                            {taskData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 4 ? '#A855F7' : '#0A0A0A'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                    </div>

                    {/* Task List - Simplified */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#0A0A0A]">Prioritas Utama</h3>
                            <Link href="/dashboard/tasks" className="text-[10px] font-black text-accent hover:underline">LIHAT SEMUA</Link>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <SimpleTaskCard title="Audit Sistem Numpux" project="Sistem" priority="Mendesak" />
                            <SimpleTaskCard title="Desain Aplikasi Mobile" project="Desain" priority="Tinggi" />
                            <SimpleTaskCard title="Update Database Server" project="Sistem" priority="Tinggi" />
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="xl:col-span-4 space-y-8">

                    {/* Project Dist - Smaller */}
                    <div className="bg-white border border-black/[0.08] p-8 rounded-sm shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-xs font-black uppercase tracking-widest mb-6">Fokus Proyek</h3>
                        <div className="h-[140px] w-full mb-6 min-h-0 min-w-0">
                            {isMounted && (
                                <ResponsiveContainer width="100%" height="100%" minHeight={0} minWidth={0}>
                                    <PieChart>
                                        <Pie
                                            data={projectDistribution}
                                            innerRadius={40}
                                            outerRadius={55}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {projectDistribution.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                            {projectDistribution.map((item) => (
                                <div key={item.name} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-[10px] font-black uppercase text-[#6B7280]">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dedlines - High Impact but Simple */}
                    <div className="bg-[#0A0A0A] text-white p-8 rounded-sm shadow-[4px_4px_0_0_rgba(168,85,247,0.3)]">
                        <div className="flex items-center gap-3 mb-8">
                            <CalendarDays size={18} className="text-accent" />
                            <h3 className="text-xs font-black uppercase tracking-widest text-white/90">Penting</h3>
                        </div>
                        <div className="space-y-6">
                            <SimpleDeadline title="Pitch Deck Final" date="Besok, 09:00" />
                            <SimpleDeadline title="QC Testing" date="26 Mei, 14:00" />
                        </div>
                    </div>

                    {/* Progress Bar - Minimalist */}
                    <div className="bg-white border border-black/[0.08] p-8 rounded-sm shadow-sm">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-xs font-black uppercase">Level 12</span>
                            <span className="text-[10px] font-bold text-[#6B7280]">XP: 8,420</span>
                        </div>
                        <div className="h-4 bg-[#FAFAFA] border border-black/[0.1] rounded-full p-0.5 overflow-hidden">
                            <div className="h-full bg-accent rounded-full w-[72%] transition-all" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function MiniStat({ label, value, color }: { label: string, value: string, color: string }) {
    return (
        <div className="bg-white border border-black/[0.08] p-6 rounded-sm shadow-sm hover:border-accent hover:shadow-[4px_4px_0_0_rgba(168,85,247,0.05)] transition-all group">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF] mb-1 group-hover:text-accent transition-colors">{label}</p>
            <span className={`text-3xl font-black tracking-tighter ${color}`}>{value}</span>
        </div>
    );
}

function SimpleTaskCard({ title, project, priority }: { title: string, project: string, priority: string }) {
    return (
        <div className="bg-white border border-black/[0.08] p-5 rounded-sm flex items-center justify-between group hover:border-accent hover:shadow-sm transition-all cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-6 h-6 border-2 border-black/[0.1] rounded-sm flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                    <CheckCircle2 size={12} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-[#0A0A0A] leading-none mb-1.5 group-hover:text-accent transition-colors">{title}</h4>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#9CA3AF]">{project}</span>
                </div>
            </div>
            <span className={`text-[8px] font-black uppercase px-2 py-0.5 border-2 rounded-sm ${priority === 'Mendesak' ? 'border-red-500 text-red-600 bg-red-50' : 'border-blue-500 text-blue-600 bg-blue-50'
                }`}>{priority}</span>
        </div>
    );
}

function SimpleDeadline({ title, date }: { title: string, date: string }) {
    return (
        <div className="space-y-1 group cursor-pointer">
            <p className="text-sm font-black tracking-tight group-hover:underline">{title}</p>
            <p className="text-[9px] font-bold text-white/60 uppercase">{date}</p>
        </div>
    );
}
