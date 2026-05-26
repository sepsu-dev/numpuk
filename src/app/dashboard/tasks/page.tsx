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
import { cn } from "@/lib/utils";


export default function TasksPage() {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("Semua");

    const tasks = [
        { id: 1, title: "Audit Arsitektur Sistem", project: "Numpux Engine", priority: "Tinggi", date: "Hari ini", status: "Proses" },
        { id: 2, title: "Desain Navigasi Utama", project: "Marketing Site", priority: "Sedang", date: "Besok", status: "Belum Mulai" },
        { id: 3, title: "Perbaikan Bug Login", project: "Numpux App", priority: "Mendesak", date: "24 Mei", status: "Selesai" },
        { id: 4, title: "Implementasi Dark Mode", project: "Numpux App", priority: "Rendah", date: "25 Mei", status: "Peninjauan" },
    ];

    const filteredTasks = tasks.filter(task =>
        (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.project.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (statusFilter === "Semua" || task.status === statusFilter)
    );

    const handleDelete = () => {
        toast.error("Tugas berhasil dihapus!");
        setIsDeleteDialogOpen(false);
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between gap-8 pb-8">
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Daftar Tugas</h2>
                    <p className="text-[#9CA3AF] text-sm font-medium mt-1">Kelola pekerjaan harian Anda.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-slate-50 p-1 rounded-sm flex border border-black/[0.04]">
                        <button className="p-2 bg-white text-accent rounded-sm shadow-sm border border-black/[0.08]">
                            <List size={16} />
                        </button>
                        <Link href="/dashboard/tasks/kanban">
                            <button className="p-2 text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors rounded-sm">
                                <LayoutGrid size={16} />
                            </button>
                        </Link>
                    </div>
                    <Link href="/dashboard/tasks/new">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded-sm text-[11px] font-black hover:bg-black transition-all shadow-sm active:scale-95">
                            <Plus size={16} />
                            TUGAS BARU
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
                        placeholder="Cari tugas atau proyek..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-6 py-3.5 bg-white border border-black/[0.1] rounded-sm text-sm focus:outline-none focus:border-accent shadow-sm transition-all"
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 px-6 py-3.5 bg-white border border-black/[0.1] rounded-sm text-xs font-black text-[#0A0A0A] hover:bg-[#FAFAFA] transition-all shadow-sm">
                            <Filter size={16} />
                            Filter Status: {statusFilter}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 p-2 rounded-sm border border-black/[0.04] font-sans shadow-xl">
                        {["Semua", "Proses", "Selesai", "Belum Mulai", "Peninjauan"].map((s) => (
                            <DropdownMenuItem
                                key={s}
                                onClick={() => setStatusFilter(s)}
                                className={cn("cursor-pointer rounded-sm hover:bg-slate-50", statusFilter === s && "bg-slate-50 text-accent font-black")}
                            >
                                {s}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* List Tugas */}
            <div className="grid grid-cols-1 gap-6">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <div key={task.id} className="bg-white border border-black/[0.04] p-6 rounded-sm shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-10 h-10 rounded-sm border border-black/[0.05] bg-[#FAFAFA] flex items-center justify-center group-hover:text-accent transition-colors">
                                    <CheckCircle2 size={18} className="text-[#E5E7EB] group-hover:text-accent" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[15px] font-black text-[#0A0A0A] tracking-tight group-hover:text-accent transition-colors">{task.title}</h3>
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF]">{task.project}</span>
                                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-sm bg-slate-100 text-[#0A0A0A] uppercase ${task.priority === 'Mendesak' ? 'bg-red-50 text-red-500' : ''}`}>
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
                    ))
                ) : (
                    <div className="py-20 text-center bg-white border border-dashed border-black/[0.1] rounded-sm">
                        <p className="text-sm font-black text-[#9CA3AF] uppercase tracking-widest">Tidak ada tugas yang ditemukan.</p>
                    </div>
                )}
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
