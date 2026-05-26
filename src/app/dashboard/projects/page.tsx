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
            <div className="flex items-center justify-between gap-8 pb-8">
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Proyek</h2>
                    <p className="text-[#9CA3AF] text-sm font-medium mt-1">Kelola visi besar Anda.</p>
                </div>

                <Link href="/dashboard/projects/new">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded-sm text-[11px] font-black hover:bg-black transition-all shadow-sm active:scale-95">
                        <Plus size={16} />
                        PROYEK BARU
                    </button>
                </Link>
            </div>

            {/* Grid Kartu Proyek */}
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 text-black">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white border border-black/[0.04] p-10 rounded-sm shadow-sm group hover:border-accent/20 hover:shadow-md transition-all flex flex-col justify-between min-h-[340px]"
                    >
                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-sm bg-[#FAFAFA] border border-black/[0.04] flex items-center justify-center text-[#9CA3AF] group-hover:text-accent transition-colors">
                                    <Briefcase size={20} />
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-2 bg-white border border-black/[0.08] rounded-sm text-[#0A0A0A] hover:bg-[#FAFAFA] transition-all">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="rounded-sm border border-black/[0.04] font-sans font-bold shadow-lg">
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

                            <div>
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-accent block mb-2">{project.category}</span>
                                <h3 className="text-xl font-black text-[#0A0A0A] tracking-tighter group-hover:text-accent transition-colors mb-1">{project.title}</h3>
                                <p className="text-xs font-bold text-[#9CA3AF] line-clamp-2">{project.description}</p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="text-[9px] font-black text-[#9CA3AF] uppercase tracking-widest">{project.tasks} Tugas</span>
                                <span className="text-[10px] font-black">{project.progress}%</span>
                            </div>
                            <div className="h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
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
