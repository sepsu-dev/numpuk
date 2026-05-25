"use client";

import {
    CheckCircle2,
    Clock,
    Briefcase,
    ArrowRight,
    MoreHorizontal,
    Plus,
    TrendingUp,
    Target,
    Zap,
    CalendarDays,
    Star,
    Award,
    CircleDashed,
    PlayCircle
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
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
    const handleAction = (action: string) => {
        toast.info(`Fitur ${action} segera datang!`);
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-accent/10 text-accent font-black text-[10px] uppercase tracking-widest border border-accent/20">
                        <Zap size={14} fill="currentColor" />
                        Aktivitas Hari Ini
                    </div>
                    <h2 className="text-4xl font-black text-[#0A0A0A] tracking-tighter">Halo, Administrator</h2>
                    <p className="text-[#6B7280] font-medium">Berikut adalah rangkuman semua rencana dan tugas Anda.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-2 rounded-sm border-2 border-black">
                    <StatusStat label="SELESAI" value="128" icon={<CheckCircle2 size={16} />} color="text-emerald-500" bgColor="bg-emerald-50" />
                    <StatusStat label="PROSES" value="15" icon={<PlayCircle size={16} />} color="text-blue-500" bgColor="bg-blue-50" />
                    <StatusStat label="ANTREAN" value="24" icon={<CircleDashed size={16} />} color="text-orange-500" bgColor="bg-orange-50" />
                    <StatusStat label="PROYEK" value="4" icon={<Briefcase size={16} />} color="text-accent" bgColor="bg-purple-50" />
                </div>
            </div>

            {/* Grid Konten */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 text-black">

                <div className="xl:col-span-8 space-y-10">

                    {/* Grafik */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 bg-white border-2 border-black p-10 rounded-sm shadow-[8px_8px_0_0_rgba(0,0,0,1)] group hover:shadow-none transition-all">
                            <div className="flex items-center justify-between mb-10">
                                <div className="space-y-1">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9CA3AF]">Statistik Tugas</h3>
                                    <p className="text-2xl font-black text-[#0A0A0A]">Performa Mingguan</p>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs bg-emerald-50 px-3 py-1.5 rounded-sm border border-emerald-500/20">
                                    <TrendingUp size={14} />
                                    <span>Naik 12%</span>
                                </div>
                            </div>
                            <div className="h-[280px] w-full font-sans text-[10px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={taskData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#0A0A0A', fontWeight: '900' }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontWeight: '700' }} />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                                            contentStyle={{ border: '2px solid black', borderRadius: '0px', boxShadow: '4px 4px 0_0_rgba(0,0,0,1)', fontWeight: '900' }}
                                        />
                                        <Bar dataKey="tasks" radius={[0, 0, 0, 0]} barSize={35}>
                                            {taskData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 3 ? '#A855F7' : '#0A0A0A'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Distribusi */}
                        <div className="bg-white border-2 border-black p-10 rounded-sm shadow-[8px_8px_0_0_rgba(0,0,0,1)] group hover:shadow-none transition-all flex flex-col justify-between">
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9CA3AF] mb-1">Distribusi</h3>
                                <p className="text-sm font-black text-[#0A0A0A]">Fokus Proyek</p>
                            </div>
                            <div className="h-[180px] w-full my-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={projectDistribution}
                                            innerRadius={50}
                                            outerRadius={75}
                                            paddingAngle={4}
                                            dataKey="value"
                                            cornerRadius={0}
                                        >
                                            {projectDistribution.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} stroke="#000" strokeWidth={2} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="space-y-3">
                                {projectDistribution.slice(0, 3).map((item) => (
                                    <div key={item.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 rounded-sm border border-black" style={{ backgroundColor: item.color }} />
                                            <span className="text-[10px] font-black uppercase text-[#9CA3AF] leading-none">{item.name}</span>
                                        </div>
                                        <span className="text-[10px] font-black leading-none">{item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Daftar Tugas Pelat */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between px-4">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#9CA3AF]">Tugas Utama</h3>
                            <Link href="/dashboard/tasks" className="text-[10px] font-black text-accent hover:underline flex items-center gap-1">
                                SEMUANYA <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <TaskCard title="Audit Sistem Numpux" project="Sistem" priority="Mendesak" />
                            <TaskCard title="Desain Aplikasi Mobile" project="Desain" priority="Tinggi" />
                            <TaskCard title="Update Database Server" project="Sistem" priority="Tinggi" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 space-y-10">

                    {/* Jadwal */}
                    <div className="bg-[#0A0A0A] text-white p-10 rounded-sm border-2 border-black shadow-[8px_8px_0_0_rgba(168,85,247,0.3)]">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-sm bg-accent/20 flex items-center justify-center border border-accent/40">
                                <CalendarDays size={20} className="text-accent" />
                            </div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em]">Tenggat Waktu</h3>
                        </div>
                        <div className="space-y-8">
                            <DeadlineItem title="Pitch Deck Final" date="Besok, 09:00" />
                            <DeadlineItem title="QA Testing Server" date="26 Mei, 14:00" />
                            <DeadlineItem title="Weekly Sync" date="Setiap Senin" />
                        </div>
                        <button className="w-full mt-12 py-4 bg-white text-[#0A0A0A] text-[11px] font-black uppercase rounded-sm border-2 border-black hover:bg-accent hover:text-white transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none">Buka Kalender</button>
                    </div>

                    {/* Pencapaian */}
                    <div className="bg-white border-2 border-black p-10 rounded-sm shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative overflow-hidden group">
                        <div className="relative z-10 space-y-5">
                            <div className="flex items-center gap-2">
                                <Award size={20} className="text-accent" />
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">Pencapaian</h3>
                            </div>
                            <p className="text-2xl font-black text-[#0A0A0A]">Level 12</p>
                            <div className="h-3 bg-[#F3F4F6] rounded-sm overflow-hidden border border-black p-0.5">
                                <div className="h-full bg-accent w-[72%] transition-all duration-1000" />
                            </div>
                            <p className="text-[10px] font-medium text-[#6B7280]">1,240 XP lagi</p>
                        </div>
                        <Star size={100} className="absolute -bottom-10 -right-10 text-[#FAFAFA] group-hover:text-accent/10 transition-colors -rotate-12" />
                    </div>

                    <button
                        onClick={() => handleAction("Tambah Tugas")}
                        className="w-full flex items-center justify-center gap-3 py-5 bg-[#0A0A0A] text-white rounded-sm border-2 border-black text-sm font-black hover:bg-accent transition-all shadow-[8px_8px_0_0_rgba(168,85,247,0.4)] hover:shadow-none"
                    >
                        <Plus size={20} />
                        TAMBAH TUGAS
                    </button>
                </div>
            </div>
        </div>
    );
}

// Subkomponen

function StatusStat({ label, value, icon, color, bgColor }: { label: string, value: string, icon: React.ReactNode, color: string, bgColor: string }) {
    return (
        <div className={`flex flex-col items-center justify-center py-6 px-4 rounded-sm bg-white border border-transparent hover:border-black transition-all group`}>
            <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-2 ${color}`}>
                <div className={`w-8 h-8 rounded-sm ${bgColor} flex items-center justify-center border border-black/10 group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                {label}
            </div>
            <span className={`text-4xl font-black tracking-tighter text-[#0A0A0A]`}>{value}</span>
        </div>
    );
}

function TaskCard({ title, project, priority }: { title: string, project: string, priority: string }) {
    return (
        <div className="bg-white border-2 border-black p-8 rounded-sm flex items-center justify-between group hover:shadow-[4px_4px_0_0_rgba(168,85,247,0.1)] transition-all">
            <div className="flex items-center gap-8">
                <div className="w-8 h-8 rounded-sm border-2 border-black flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all cursor-pointer">
                    <CheckCircle2 size={16} />
                </div>
                <div className="space-y-1.5">
                    <h4 className="text-[17px] font-black text-[#0A0A0A] tracking-tight leading-tight">{title}</h4>
                    <div className="flex items-center gap-4">
                        <span className="text-[11px] font-black uppercase text-[#9CA3AF] tracking-[0.2em]">{project}</span>
                        <div className="w-1.5 h-1.5 bg-black/5 rounded-sm" />
                        <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-sm border border-black bg-[#F3F4F6] text-[#0A0A0A]`}>{priority}</span>
                    </div>
                </div>
            </div>
            <button className="p-3 bg-[#FAFAFA] rounded-sm text-[#9CA3AF] hover:text-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-all border-2 border-black">
                <MoreHorizontal size={20} />
            </button>
        </div>
    );
}

function DeadlineItem({ title, date }: { title: string, date: string }) {
    return (
        <div className="flex items-center gap-6 group">
            <div className="w-4 h-4 rounded-sm bg-accent border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] group-hover:translate-x-1 transition-transform" />
            <div>
                <p className="text-[15px] font-black tracking-tight leading-none mb-2">{title}</p>
                <div className="flex items-center gap-2 text-[#9CA3AF]">
                    <Clock size={12} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{date}</span>
                </div>
            </div>
        </div>
    );
}
