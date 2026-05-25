"use client";

import { useState } from "react";
import {
    CheckSquare,
    Filter,
    Plus,
    Search,
    MoreHorizontal,
    Calendar,
    Clock,
    Edit,
    Trash2,
    LayoutGrid,
    List,
    CheckCircle2
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";

export default function TasksPage() {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const tasks = [
        { id: 1, title: "Audit Arsitektur Sistem", project: "Numpux Engine", priority: "Tinggi", date: "Hari ini", status: "Proses" },
        { id: 2, title: "Desain Navigasi Utama", project: "Marketing Site", priority: "Sedang", date: "Besok", status: "Belum Mulai" },
        { id: 3, title: "Perbaikan Bug Login", project: "Numpux App", priority: "Mendesak", date: "24 Mei", status: "Selesai" },
        { id: 4, title: "Implementasi Dark Mode", project: "Numpux App", priority: "Rendah", date: "25 Mei", status: "Peninjauan" },
    ];

    const handleDelete = () => {
        toast.error("Tugas berhasil dihapus!");
        setIsDeleteDialogOpen(false);
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Daftar Tugas</h2>
                    <p className="text-[#6B7280] font-medium mt-1">Kelola semua pekerjaan harian Anda di sini.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-white border border-black/[0.08] p-1 rounded-sm flex">
                        <button className="p-2.5 bg-[#0A0A0A] text-white rounded-sm shadow-sm transition-all">
                            <List size={18} />
                        </button>
                        <Link href="/dashboard/tasks/kanban">
                            <button className="p-2.5 text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors rounded-sm">
                                <LayoutGrid size={18} />
                            </button>
                        </Link>
                    </div>
                    <Link href="/dashboard/tasks/new">
                        <button className="flex items-center gap-2 px-8 py-3.5 bg-[#0A0A0A] text-white rounded-sm text-sm font-black hover:bg-accent transition-all shadow-[4px_4px_0_0_rgba(168,85,247,0.3)] active:scale-95">
                            <Plus size={18} />
                            Tugas Baru
                        </button>
                    </Link>
                </div>
            </div>

            {/* Pencarian */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                    <input
                        type="text"
                        placeholder="Cari tugas..."
                        className="w-full pl-12 pr-6 py-3.5 bg-white border border-black/[0.1] rounded-sm text-sm focus:outline-none focus:border-accent shadow-sm transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-3.5 bg-white border border-black/[0.1] rounded-sm text-xs font-black text-[#0A0A0A] hover:bg-[#FAFAFA] transition-all shadow-sm">
                    <Filter size={16} />
                    Filter Status
                </button>
            </div>

            {/* List Tugas */}
            <div className="grid grid-cols-1 gap-6">
                {tasks.map((task) => (
                    <div key={task.id} className="bg-white border border-black/[0.08] p-6 md:p-8 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-accent hover:shadow-md transition-all">
                        <div className="flex items-center gap-6">
                            <div className="w-10 h-10 rounded-sm border border-black/[0.1] flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all cursor-pointer">
                                <CheckCircle2 size={18} />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-black text-[#0A0A0A] tracking-tight group-hover:text-accent transition-colors">{task.title}</h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">{task.project}</span>
                                    <div className="w-1 h-1 bg-black/10 rounded-full hidden md:block" />
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#6B7280]">
                                        <Clock size={12} />
                                        {task.date}
                                    </div>
                                    <span className={`px-3 py-1 rounded-sm border border-black/[0.05] text-[9px] font-black uppercase ${task.priority === 'Mendesak' ? 'bg-red-500 text-white' :
                                        task.priority === 'Tinggi' ? 'bg-[#0A0A0A] text-white' : 'bg-[#F3F4F6] text-[#0A0A0A]'
                                        }`}>
                                        {task.priority}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-black/5">
                            <div className="flex flex-col items-end md:items-end">
                                <span className="text-[9px] font-black text-[#9CA3AF] uppercase tracking-widest leading-none mb-1">Status</span>
                                <span className={`text-[11px] font-black ${task.status === 'Selesai' ? 'text-emerald-500' :
                                    task.status === 'Proses' ? 'text-blue-500' : 'text-[#0A0A0A]'
                                    }`}>{task.status}</span>
                            </div>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="p-3 bg-white rounded-sm text-[#0A0A0A] hover:bg-[#FAFAFA] border border-black/[0.1] transition-all shadow-sm">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="rounded-sm border border-black/[0.08] font-sans font-bold shadow-lg">
                                    <DropdownMenuItem asChild>
                                        <Link href={`/dashboard/tasks/edit/${task.id}`} className="cursor-pointer">
                                            <Edit size={14} className="mr-2" /> Ubah
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="text-red-500 hover:bg-red-50 cursor-pointer"
                                        onClick={() => setIsDeleteDialogOpen(true)}
                                    >
                                        <Trash2 size={14} className="mr-2" /> Hapus
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dialog Hapus */}
            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent className="rounded-sm border border-black/[0.1] p-10 font-sans shadow-2xl">
                    <DialogHeader className="space-y-4">
                        <div className="w-16 h-16 rounded-sm border border-red-500/20 bg-red-50 flex items-center justify-center text-red-500 mb-2">
                            <Trash2 size={32} />
                        </div>
                        <DialogTitle className="text-2xl font-black text-[#0A0A0A] tracking-tighter">Hapus Tugas?</DialogTitle>
                        <DialogDescription className="text-sm font-medium text-[#6B7280]">
                            Data yang dihapus tidak bisa dikembalikan. Apakah Anda yakin?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-10 flex gap-4">
                        <Button variant="outline" className="font-bold text-[#6B7280] flex-1 h-12 rounded-sm border border-black/[0.1]" onClick={() => setIsDeleteDialogOpen(false)}>Batal</Button>
                        <Button className="bg-red-500 hover:bg-red-600 text-white font-black flex-1 h-12 rounded-sm shadow-sm" onClick={handleDelete}>Hapus Sekarang</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
