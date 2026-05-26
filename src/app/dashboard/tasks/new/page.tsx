"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function NewTaskPage() {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState("Pilih Proyek");

    const projects = [
        "Numpux Engine",
        "Situs Marketing",
        "Aplikasi Numpux",
        "Internal Dev"
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedProject === "Pilih Proyek") {
            toast.error("Silakan pilih proyek terlebih dahulu!");
            return;
        }
        toast.success("Tugas berhasil disimpan!");
        router.push("/dashboard/tasks");
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-6">
                <Link href="/dashboard/tasks" className="p-2 hover:bg-[#FAFAFA] rounded-sm text-[#0A0A0A] transition-all border border-black/[0.1] bg-white active:scale-95 shadow-sm">
                    <ArrowLeft size={16} />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Tambah Tugas</h2>
                    <p className="text-[#9CA3AF] text-sm font-medium mt-1">Buat detail rencana kerja Anda.</p>
                </div>
            </div>

            <div className="bg-white border border-black/[0.04] rounded-sm p-10 shadow-sm hover:shadow-md hover:border-accent/20 transition-all max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-8">
                        <div className="grid gap-3">
                            <Label htmlFor="title" className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A] px-1">Nama Tugas</Label>
                            <Input
                                id="title"
                                placeholder="Misal: Update Dashboard"
                                className="h-14 text-base rounded-sm border border-black/[0.1] focus:border-accent font-bold px-6 bg-white transition-all text-[#0A0A0A] shadow-sm"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="grid gap-3">
                                <Label className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A] px-1">Pilih Proyek</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button
                                            type="button"
                                            className="h-14 w-full flex items-center justify-between rounded-sm border border-black/[0.1] px-6 bg-white hover:border-accent transition-all text-[#0A0A0A] font-bold shadow-sm"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Briefcase size={16} className={selectedProject === "Pilih Proyek" ? "text-[#E5E7EB]" : "text-accent"} />
                                                <span className={selectedProject === "Pilih Proyek" ? "text-[#9CA3AF]" : "text-[#0A0A0A]"}>{selectedProject}</span>
                                            </div>
                                            <ChevronDown size={14} className="text-[#9CA3AF] opacity-50" />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="w-[300px] md:w-[400px] rounded-sm border border-black/[0.04] p-2 font-sans font-bold shadow-xl">
                                        {projects.map((project) => (
                                            <DropdownMenuItem
                                                key={project}
                                                className="h-12 rounded-sm cursor-pointer hover:bg-slate-50 transition-colors pl-4 text-xs"
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                {project}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="date" className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A] px-1">Tenggat Waktu</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    className="h-14 rounded-sm border border-black/[0.1] focus:border-accent font-bold px-6 bg-white transition-all text-[#0A0A0A] shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Prioritas</Label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { id: 'Low', label: 'Rendah' },
                                    { id: 'Medium', label: 'Sedang' },
                                    { id: 'High', label: 'Tinggi' },
                                    { id: 'Critical', label: 'Mendesak' }
                                ].map((p) => (
                                    <label key={p.id} className="cursor-pointer group">
                                        <input type="radio" name="priority" className="sr-only peer" defaultChecked={p.id === 'Medium'} />
                                        <div className="flex items-center justify-center p-4 text-[10px] font-black uppercase border border-black/[0.1] rounded-sm peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white transition-all hover:bg-[#FAFAFA] shadow-sm peer-checked:shadow-none">
                                            {p.label}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="description" className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Deskripsi & Catatan</Label>
                            <Textarea
                                id="description"
                                placeholder="Tulis catatan atau detail tugas..."
                                className="min-h-[160px] rounded-sm border border-black/[0.1] focus:border-accent resize-none p-6 font-medium text-base bg-white transition-all text-[#1F2937] shadow-sm focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div className="pt-10 border-t border-black/5 flex items-center justify-end gap-6">
                        <Button type="button" variant="outline" onClick={() => router.back()} className="font-bold text-[#6B7280] border border-black/[0.1] h-14 px-8 rounded-sm hover:bg-slate-50 transition-all">Batal</Button>
                        <Button type="submit" className="bg-accent/90 hover:bg-accent text-white font-black px-12 h-14 rounded-sm shadow-sm active:scale-95 transition-all">
                            Simpan Tugas
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
