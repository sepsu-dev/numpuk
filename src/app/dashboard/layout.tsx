"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import {
    ChevronRight,
    Search,
    Plus,
    Briefcase,
    Calendar,
    LayoutDashboard,
    CheckSquare,
    Bell,
    Settings,
    Archive,
    LogOut,
    CheckCircle2,
    TrendingUp,
    Users,
    MessageSquare,
    Filter,
    ChevronDown,
    MoreHorizontal
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SidebarNav } from "@/components/dashboard/sidebar-nav";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-[#FEFEFE] font-sans text-[#1A1A1A]">
                <Sidebar collapsible="icon" className="border-r border-black/[0.08] bg-white">
                    <SidebarNav />
                </Sidebar>

                <SidebarInset className="flex-1 flex flex-col min-w-0 bg-[#FEFEFE]">
                    {/* Top Nav / Header */}
                    <header className="h-20 border-b border-black/[0.04] bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-20">
                        <div className="flex items-center gap-4 flex-1">
                            <SidebarTrigger className="text-[#4B5563] hover:bg-slate-50 transition-all active:scale-95" />
                            <div className="h-4 w-[1px] bg-black/[0.05]"></div>
                            <div className="flex items-center gap-2 text-[11px] font-bold text-[#9CA3AF]">
                                <span className="uppercase tracking-widest opacity-50">Sistem</span>
                                <ChevronRight size={12} className="opacity-30" />
                                <span className="text-[#6B7280]">Dashboard</span>
                                {pathname !== "/dashboard" && (
                                    <>
                                        <ChevronRight size={12} className="opacity-30" />
                                        <span className="capitalize text-accent/80">
                                            {pathname.includes("kanban") ? "Papan Kanban" :
                                                pathname.includes("tasks") ? "Daftar Tugas" :
                                                    pathname.includes("projects") ? "Proyek" :
                                                        pathname.includes("calendar") ? "Kalender" :
                                                            pathname.split("/").pop()}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Actions Group */}
                            <div className="flex items-center gap-2 p-1 bg-slate-100/50 border border-black/[0.03] rounded-sm">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="relative flex items-center justify-center w-9 h-9 text-[#9CA3AF] hover:text-[#0A0A0A] hover:bg-white rounded-sm transition-all">
                                            <Bell size={18} />
                                            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-80 p-0 rounded-sm border border-black/[0.04] shadow-2xl overflow-hidden">
                                        <div className="p-4 border-b border-black/[0.02] bg-[#FAFAFA]">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A]">Pemberitahuan</p>
                                        </div>
                                        <div className="max-h-[300px] overflow-y-auto">
                                            {[
                                                { title: "Tugas Baru", desc: "Anda ditugaskan di proyek Numpux", time: "2 menit lalu", icon: <CheckSquare size={12} className="text-emerald-500" /> },
                                                { title: "Deadline Dekat", desc: "Project Landing Page berakhir besok", time: "1 jam lalu", icon: <Calendar size={12} className="text-orange-500" /> }
                                            ].map((n, i) => (
                                                <div key={i} className="p-4 flex gap-3 hover:bg-slate-50 cursor-pointer border-b border-black/[0.01]">
                                                    <div className="w-8 h-8 rounded-sm bg-slate-100 flex items-center justify-center shrink-0">
                                                        {n.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-[11px] font-black text-[#0A0A0A]">{n.title}</p>
                                                        <p className="text-[10px] text-[#9CA3AF] leading-tight mt-0.5">{n.desc}</p>
                                                        <p className="text-[8px] font-bold text-accent mt-1.5 uppercase">{n.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-3 text-center border-t border-black/[0.02]">
                                            <button className="text-[9px] font-black uppercase tracking-widest text-accent hover:underline">Lihat Semua</button>
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <button className="flex items-center justify-center w-9 h-9 text-[#9CA3AF] hover:text-[#0A0A0A] hover:bg-white rounded-sm transition-all">
                                    <Settings size={18} />
                                </button>
                            </div>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center justify-center w-10 h-10 bg-[#0A0A0A] text-white rounded-sm hover:bg-black transition-all shadow-[5px_5px_0_0_rgba(168,85,247,0.2)] active:scale-95">
                                        <Plus size={18} />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56 p-2 rounded-sm border border-black/[0.04] font-sans shadow-xl">
                                    <div className="px-2 py-2 mb-1 border-b border-black/[0.02]">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">Aksi Cepat</p>
                                    </div>
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard/tasks/new" className="flex items-center gap-2 py-3 px-3 cursor-pointer rounded-sm hover:bg-slate-50">
                                            <div className="w-6 h-6 rounded-sm bg-blue-50 text-blue-500 flex items-center justify-center">
                                                <Plus size={14} />
                                            </div>
                                            <span className="text-sm font-bold">Tugas Baru</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard/projects/new" className="flex items-center gap-2 py-3 px-3 cursor-pointer rounded-sm hover:bg-slate-50">
                                            <div className="w-6 h-6 rounded-sm bg-purple-50 text-purple-500 flex items-center justify-center">
                                                <Briefcase size={14} />
                                            </div>
                                            <span className="text-sm font-bold">Proyek Baru</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>

                    <div className="p-10 max-w-[1440px] mx-auto w-full">
                        {children}
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
