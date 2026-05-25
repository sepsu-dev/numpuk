"use client";

import { useState } from "react";
import {
    Plus,
    MoreHorizontal,
    Calendar,
    Users,
    Briefcase,
    Edit,
    Trash2,
    ArrowUpRight,
    TrendingUp
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

export default function ProjectsPage() {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const projects = [
        { id: 1, title: "Numpux Engine", description: "Sistem inti untuk manajemen tugas real-time.", status: "Aktif", tasks: 12, progress: 75, category: "Sistem" },
        { id: 2, title: "Situs Marketing", description: "Halaman utama dan dokumentasi publik.", status: "Perencanaan", tasks: 8, progress: 32, category: "Konten" },
        { id: 3, title: "Aplikasi Numpux", description: "Aplikasi mobile dan desktop untuk pengguna.", status: "Aktif", tasks: 24, progress: 58, category: "Produk" },
    ];

    const handleDelete = () => {
        toast.error("Proyek berhasil dihapus!");
        setIsDeleteDialogOpen(false);
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Proyek</h2>
                    <p className="text-[#6B7280] font-medium mt-1">Kelola visi besar dan proyek jangka panjang Anda.</p>
                </div>

                <Link href="/dashboard/projects/new">
                    <button className="flex items-center gap-2 px-8 py-3.5 bg-[#0A0A0A] text-white rounded-sm text-sm font-black hover:bg-accent transition-all shadow-[4px_4px_0_0_rgba(168,85,247,0.3)] active:scale-95">
                        <Plus size={18} />
                        Proyek Baru
                    </button>
                </Link>
            </div>

            {/* Grid Kartu Proyek */}
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 text-black">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white border border-black/[0.08] p-10 rounded-sm shadow-sm group hover:border-accent hover:shadow-md transition-all flex flex-col justify-between min-h-[340px]"
                    >
                        <div className="space-y-8">
                            <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-sm bg-[#0A0A0A] border border-black flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                                    <Briefcase size={24} />
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-3 bg-white border border-black/[0.1] rounded-sm text-[#0A0A0A] hover:bg-[#FAFAFA] transition-all shadow-sm">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="rounded-sm border border-black/[0.08] font-sans font-bold shadow-lg">
                                        <DropdownMenuItem asChild>
                                            <Link href={`/dashboard/projects/edit/${project.id}`} className="cursor-pointer">
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

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">{project.category}</span>
                                    <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-500/20 text-[9px] font-black">
                                        <TrendingUp size={10} />
                                        Lancar
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-[#0A0A0A] tracking-tighter group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-sm font-medium text-[#6B7280] leading-relaxed line-clamp-2">{project.description}</p>
                            </div>
                        </div>

                        <div className="mt-10 space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-black text-[#0A0A0A] uppercase tracking-widest">{project.tasks} Tugas</span>
                                <span className="text-xs font-black">{project.progress}%</span>
                            </div>
                            <div className="h-3 bg-[#F3F4F6] rounded-full border border-black/[0.05] overflow-hidden p-0.5">
                                <div
                                    className="h-full bg-[#0A0A0A] group-hover:bg-accent rounded-full transition-all duration-1000"
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Tambah Proyek */}
                <Link href="/dashboard/projects/new" className="group h-full">
                    <div className="h-full min-h-[340px] border border-dashed border-black/[0.1] rounded-sm flex flex-col items-center justify-center gap-4 hover:border-accent hover:bg-accent/[0.02] transition-all hover:shadow-sm">
                        <div className="w-16 h-16 rounded-sm border border-black/[0.1] bg-white flex items-center justify-center text-[#9CA3AF] group-hover:text-accent group-hover:border-accent transition-all shadow-sm">
                            <Plus size={32} />
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-black text-[#0A0A0A] tracking-tight">Proyek Baru</h4>
                            <p className="text-xs font-medium text-[#9CA3AF]">Mulai rencana besar Anda.</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Dialog Hapus */}
            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent className="rounded-sm border border-black/[0.1] p-12 font-sans shadow-2xl max-w-lg">
                    <DialogHeader className="space-y-4">
                        <div className="w-20 h-20 rounded-sm border border-red-500/20 bg-red-50 flex items-center justify-center text-red-500 mb-2">
                            <Trash2 size={40} />
                        </div>
                        <DialogTitle className="text-3xl font-black text-[#0A0A0A] tracking-tighter leading-tight">Hapus Proyek?</DialogTitle>
                        <DialogDescription className="text-base font-medium text-[#6B7280]">
                            Semua data di dalam proyek ini akan hilang selamanya. Anda yakin ingin menghapusnya?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-12 flex gap-4">
                        <Button variant="outline" className="font-bold text-[#6B7280] flex-1 h-14 rounded-sm border border-black/[0.1]" onClick={() => setIsDeleteDialogOpen(false)}>Batal</Button>
                        <Button className="bg-red-500 hover:bg-red-600 text-white font-black flex-1 h-14 rounded-sm shadow-sm" onClick={handleDelete}>Ya, Hapus</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
