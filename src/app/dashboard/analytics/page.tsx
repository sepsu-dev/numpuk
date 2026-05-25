"use client";

import { TrendingUp, ArrowUpRight, ArrowDownRight, Target, Zap, Clock, Users } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Analytics Performa</h2>
                <p className="text-[#6B7280] font-medium mt-1">Data dan wawasan mendalam tentang produktivitas tim.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Tasks Selesai" value="482" change="+12.5%" isUp icon={<Target className="text-emerald-500" />} />
                <MetricCard title="Waktu Rata-rata" value="4.2h" change="-2.1%" isUp={false} icon={<Clock className="text-blue-500" />} />
                <MetricCard title="Efisiensi Tim" value="94.8%" change="+5.4%" isUp icon={<Zap className="text-accent" />} />
                <MetricCard title="Anggota Aktif" value="12" change="0%" isUp icon={<Users className="text-[#0A0A0A]" />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white border border-black/[0.08] p-8 rounded-sm shadow-sm space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-black text-xl text-[#0A0A0A]">Trend Produktivitas</h3>
                        <TrendingUp size={20} className="text-accent" />
                    </div>
                    <div className="h-[300px] flex items-end justify-between gap-4">
                        {[60, 45, 80, 55, 90, 70, 100, 85, 65, 40, 75, 95].map((h, i) => (
                            <div key={i} className="flex-1 bg-[#0A0A0A] rounded-t-sm hover:bg-accent transition-all cursor-pointer relative group" style={{ height: `${h}%` }}>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-[10px] font-black px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}%
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-black tracking-widest text-[#9CA3AF]">
                        <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MEI</span><span>JUN</span><span>JUL</span><span>AGU</span><span>SEP</span><span>OKT</span><span>NOV</span><span>DES</span>
                    </div>
                </div>

                <div className="bg-[#0A0A0A] text-white p-8 rounded-sm shadow-xl flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute right-0 top-0 p-10 opacity-10">
                        <TrendingUp size={150} />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h3 className="text-[11px] font-black uppercase tracking-widest text-accent">Status Sistem</h3>
                        <h4 className="text-2xl font-black">Luar Biasa</h4>
                        <p className="text-[#6B7280] text-sm font-medium">Tim Anda beroperasi pada kapasitas penuh dengan tingkat kesalahan 0.1%.</p>
                    </div>

                    <div className="space-y-6 mt-12 relative z-10">
                        <AnalyticsProgress label="Respon API" value={98.2} />
                        <AnalyticsProgress label="Uptime Server" value={99.9} />
                        <AnalyticsProgress label="Bandwidth" value={64.5} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetricCard({ title, value, change, isUp, icon }: { title: string, value: string, change: string, isUp: boolean, icon: React.ReactNode }) {
    return (
        <div className="bg-white border border-black/[0.08] p-6 rounded-sm shadow-sm group hover:border-accent transition-all">
            <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#FAFAFA] border border-black/[0.06] flex items-center justify-center">
                    {icon}
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black ${isUp ? 'text-emerald-500' : 'text-red-500'}`}>
                    {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {change}
                </div>
            </div>
            <h4 className="text-[10px] font-black uppercase text-[#9CA3AF] tracking-widest leading-none mb-2">{title}</h4>
            <span className="text-3xl font-black text-[#0A0A0A] leading-none">{value}</span>
        </div>
    );
}

function AnalyticsProgress({ label, value }: { label: string, value: number }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black">
                <span className="text-[#9CA3AF] uppercase tracking-widest">{label}</span>
                <span className="text-white">{value}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${value}%` }}></div>
            </div>
        </div>
    );
}
