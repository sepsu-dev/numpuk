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
                <Link href="/dashboard/tasks" className="p-3 hover:bg-[#FAFAFA] rounded-sm text-[#0A0A0A] transition-all border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white active:shadow-none">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Tambah Tugas</h2>
                    <p className="text-[#6B7280] font-medium mt-1">Buat detail rencana kerja Anda di sini.</p>
                </div>
            </div>

            <div className="bg-white border-2 border-black rounded-sm p-10 shadow-[10px_10px_0_0_rgba(0,0,0,1)] max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-8">
                        <div className="grid gap-3">
                            <Label htmlFor="title" className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Nama Tugas</Label>
                            <Input
                                id="title"
                                placeholder="Misal: Update Dashboard"
                                className="h-14 text-base rounded-sm border-2 border-black focus:border-accent font-bold px-6 bg-white transition-all text-[#0A0A0A] shadow-[4px_4px_0_0_rgba(0,0,0,0.05)]"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="grid gap-3">
                                <Label className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Pilih Proyek</Label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button
                                            type="button"
                                            className="h-14 w-full flex items-center justify-between rounded-sm border-2 border-black px-6 bg-white hover:border-accent transition-all text-[#0A0A0A] font-bold shadow-[4px_4px_0_0_rgba(0,0,0,0.05)]"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Briefcase size={16} className={selectedProject === "Pilih Proyek" ? "text-[#9CA3AF]" : "text-accent"} />
                                                <span className={selectedProject === "Pilih Proyek" ? "text-[#9CA3AF]" : "text-[#0A0A0A]"}>{selectedProject}</span>
                                            </div>
                                            <ChevronDown size={16} className="text-[#9CA3AF]" />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="w-[300px] md:w-[400px] rounded-sm border-2 border-black p-2 font-sans font-bold shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                                        {projects.map((project) => (
                                            <DropdownMenuItem
                                                key={project}
                                                className="h-12 rounded-sm cursor-pointer hover:bg-accent hover:text-white transition-colors pl-4"
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                {project}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="date" className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Tenggat Waktu</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    className="h-14 rounded-sm border-2 border-black focus:border-accent font-bold px-6 bg-white transition-all text-[#0A0A0A] shadow-[4px_4px_0_0_rgba(0,0,0,0.05)]"
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
                                        <div className="flex items-center justify-center p-4 text-[10px] font-black uppercase border-2 border-black rounded-sm peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white transition-all group-hover:bg-[#FAFAFA] shadow-[3px_3px_0_0_rgba(0,0,0,0.1)] peer-checked:shadow-none">
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
                                className="min-h-[160px] rounded-sm border-2 border-black focus:border-accent resize-none p-6 font-medium text-base bg-white transition-all text-[#0A0A0A] shadow-[4px_4px_0_0_rgba(0,0,0,0.05)]"
                            />
                        </div>
                    </div>

                    <div className="pt-10 border-t-2 border-black/5 flex items-center justify-end gap-6">
                        <Button type="button" variant="outline" onClick={() => router.back()} className="font-bold text-[#0A0A0A] border-2 border-black h-14 px-8 rounded-sm">Batal</Button>
                        <Button type="submit" className="bg-[#0A0A0A] hover:bg-accent text-white font-black px-12 h-14 rounded-sm border-2 border-black shadow-[6px_6px_0_0_rgba(168,85,247,0.3)] hover:shadow-none transition-all">
                            Simpan Tugas
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
