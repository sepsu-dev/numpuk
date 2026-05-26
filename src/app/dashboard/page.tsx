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
import { Highlighter } from "@/components/highlighter";
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
            <div className="flex items-center justify-between gap-8 pb-8">
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Ringkasan</h2>
                    <p className="text-[#9CA3AF] text-sm font-medium mt-1">Status terbaru aktivitas Anda hari ini.</p>
                </div>

                <Link href="/dashboard/tasks/new">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded-sm text-[11px] font-black hover:bg-black transition-all shadow-sm active:scale-95">
                        <Plus size={16} />
                        TUGAS BARU
                    </button>
                </Link>
            </div>

            {/* Top Metrics - Landing Page Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <MiniStat
                    label="Selesai"
                    value="128"
                    icon={<CheckCircle2 size={16} />}
                    color="text-emerald-600"
                    bgColor="bg-emerald-50"
                />
                <MiniStat
                    label="Proses"
                    value="15"
                    icon={<PlayCircle size={16} />}
                    color="text-primary"
                    bgColor="bg-primary/10"
                />
                <MiniStat
                    label="Antrean"
                    value="24"
                    icon={<CircleDashed size={16} />}
                    color="text-blue-600"
                    bgColor="bg-blue-50"
                />
                <MiniStat
                    label="Proyek"
                    value="4"
                    icon={<Briefcase size={16} />}
                    color="text-accent"
                    bgColor="bg-accent/10"
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                <div className="xl:col-span-8 space-y-8">

                    {/* Activity Chart */}
                    <div className="bg-white border border-black/[0.04] p-10 rounded-sm shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-slate-50 border border-black/[0.04] rounded-sm">
                                    <TrendingUp size={16} className="text-[#0A0A0A]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]">Efisiensi Mingguan</h3>
                                    <p className="text-[10px] text-[#9CA3AF] font-bold">Volume tugas selesai</p>
                                </div>
                            </div>
                            <div className="text-emerald-500 font-black text-[10px] flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                                +12%
                            </div>
                        </div>
                        <div className="h-[300px] w-full relative">
                            {isMounted && (
                                <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={100}>
                                    <BarChart data={taskData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                        <XAxis
                                            dataKey="day"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#9CA3AF', fontWeight: '900', fontSize: 10 }}
                                            dy={15}
                                        />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(168,85,247,0.05)' }}
                                            contentStyle={{
                                                border: 'none',
                                                borderRadius: '8px',
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                                fontSize: '11px',
                                                fontWeight: '900',
                                                padding: '12px'
                                            }}
                                        />
                                        <Bar dataKey="tasks" barSize={38} radius={[4, 4, 0, 0]}>
                                            {taskData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 3 || index === 4 ? 'var(--primary)' : '#E5E7EB'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                    </div>

                    {/* Task List - Simplified */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={14} className="text-accent" />
                                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0A0A0A]">Prioritas Utama</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <SimpleTaskCard title="Audit Sistem Numpux" project="Sistem" priority="Mendesak" />
                            <SimpleTaskCard title="Desain Aplikasi Mobile" project="Desain" />
                            <SimpleTaskCard title="Update Database Server" project="Sistem" />
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="xl:col-span-4 space-y-8">

                    {/* Project Dist - Smaller */}
                    <div className="bg-white border border-black/[0.04] p-8 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col">
                        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0A0A0A] mb-8">Fokus Proyek</h3>

                        <div className="h-[160px] w-full relative mb-8">
                            {isMounted && (
                                <ResponsiveContainer width="100%" height="100%" minWidth={0} debounce={100}>
                                    <PieChart>
                                        <Pie
                                            data={projectDistribution}
                                            innerRadius={50}
                                            outerRadius={65}
                                            paddingAngle={4}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {projectDistribution.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            )}
                        </div>

                        <div className="space-y-2">
                            {projectDistribution.slice(0, 3).map((item) => (
                                <div key={item.name} className="flex items-center justify-between text-[10px]">
                                    <span className="font-bold text-[#9CA3AF] uppercase tracking-wider">{item.name}</span>
                                    <span className="font-black text-[#0A0A0A]">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dedlines - High Impact but Simple */}
                    <div className="bg-white border border-black/[0.04] p-8 rounded-sm shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center">
                                <CalendarDays size={18} className="text-accent" />
                            </div>
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#0A0A0A]">Prioritas Penting</h3>
                        </div>
                        <div className="space-y-6">
                            <SimpleDeadline title="Pitch Deck Final" date="Besok, 09:00" />
                            <SimpleDeadline title="QC Testing" date="26 Mei, 14:00" />
                        </div>
                    </div>

                    {/* Progress Bar - Minimalist */}
                    <div className="bg-white border border-black/[0.04] p-8 rounded-sm shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                        <div className="flex justify-between items-end mb-4">
                            <div className="space-y-1">
                                <span className="text-[9px] font-black uppercase tracking-widest text-[#9CA3AF]">Level 12</span>
                                <p className="text-sm font-black text-[#0A0A0A]">Master Produktivitas</p>
                            </div>
                            <span className="text-[10px] font-bold text-accent bg-accent/5 px-2 py-0.5 rounded-sm">72%</span>
                        </div>
                        <div className="h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                            <div className="h-full bg-accent rounded-full w-[72%] transition-all duration-1000" />
                        </div>
                        <p className="text-[9px] font-bold text-[#9CA3AF] mt-4 uppercase tracking-tighter">Butuh 1,240 XP lagi untuk naik level</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

function MiniStat({ label, value, icon, color, bgColor }: { label: string, value: string, icon: React.ReactNode, color: string, bgColor: string }) {
    return (
        <div className="bg-white border border-black/[0.04] p-7 rounded-sm shadow-sm hover:shadow-md transition-all group flex items-center justify-between">
            <div className="flex items-center gap-5">
                <div className={`w-11 h-11 ${bgColor} ${color} flex items-center justify-center rounded-sm transition-all border border-black/[0.02]`}>
                    {icon}
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#9CA3AF] mb-0.5">{label}</p>
                    <span className="text-3xl font-black tracking-tighter text-[#0A0A0A]">{value}</span>
                </div>
            </div>
        </div>
    );
}

function SimpleTaskCard({ title, project, priority }: { title: string, project: string, priority?: string }) {
    return (
        <div className="bg-white border border-black/[0.04] p-5 rounded-sm flex items-center justify-between group hover:shadow-md transition-all cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-9 h-9 border border-black/[0.03] rounded-sm flex items-center justify-center bg-[#FAFAFA] text-[#E5E7EB] group-hover:text-accent transition-colors">
                    <CheckCircle2 size={16} />
                </div>
                <div>
                    <h4 className="text-[14px] font-black text-[#0A0A0A] tracking-tight transition-colors group-hover:text-accent">{title}</h4>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#9CA3AF]">{project}</span>
                </div>
            </div>
            {priority && (
                <span className="text-[8px] font-black uppercase px-2 py-1 bg-red-50 text-red-500 rounded-sm border border-red-100">{priority}</span>
            )}
        </div>
    );
}

function SimpleDeadline({ title, date }: { title: string, date: string }) {
    return (
        <div className="space-y-1 group cursor-pointer border-l-2 border-slate-100 pl-4 hover:border-accent transition-colors">
            <p className="text-sm font-black tracking-tight text-[#0A0A0A] group-hover:text-accent transition-colors">{title}</p>
            <p className="text-[9px] font-bold text-[#9CA3AF] uppercase">{date}</p>
        </div>
    );
}
