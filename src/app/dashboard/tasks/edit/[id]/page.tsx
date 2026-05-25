"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";

export default function EditTaskPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.info(`Perubahan pada tugas #${id} berhasil disimpan!`);
        router.push("/dashboard/tasks");
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/tasks" className="p-2 hover:bg-[#FAFAFA] rounded-sm text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors border border-black/[0.05]">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Edit Tugas #{id}</h2>
                    <p className="text-[#6B7280] font-medium">Perbarui status dan detail rencana Anda.</p>
                </div>
            </div>

            <div className="bg-white border border-black/[0.08] rounded-sm p-10 shadow-sm max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="title" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Judul Tugas</Label>
                            <Input
                                id="title"
                                defaultValue="Refactor API Gateway"
                                className="h-12 text-base rounded-sm border-black/[0.1] focus:border-accent font-medium text-[#0A0A0A]"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="project" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Proyek</Label>
                                <Input
                                    id="project"
                                    defaultValue="Numpux Engine"
                                    className="rounded-sm border-black/[0.1] focus:border-accent font-medium text-[#0A0A0A]"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="date" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Tenggat Waktu</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    defaultValue="2026-05-25"
                                    className="rounded-sm border-black/[0.1] focus:border-accent font-medium text-[#0A0A0A]"
                                />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="priority" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Prioritas</Label>
                            <div className="flex gap-4">
                                {['Low', 'Medium', 'High', 'Critical'].map((p) => (
                                    <label key={p} className="flex-1 cursor-pointer">
                                        <input type="radio" name="priority" className="sr-only peer" defaultChecked={p === 'High'} />
                                        <div className="flex items-center justify-center p-3 text-[10px] font-black uppercase border-2 border-black/[0.05] rounded-sm peer-checked:border-accent peer-checked:bg-accent/5 peer-checked:text-accent transition-all">
                                            {p}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Deskripsi Tugas</Label>
                            <Textarea
                                id="description"
                                defaultValue="Lakukan restrukturisasi pada modul gateway untuk mendukung latency yang lebih rendah."
                                className="min-h-[120px] rounded-sm border-black/[0.1] focus:border-accent resize-none p-4 font-medium text-[#0A0A0A]"
                            />
                        </div>
                    </div>

                    <div className="pt-6 border-t border-black/[0.04] flex items-center justify-end gap-4">
                        <Button type="button" variant="ghost" onClick={() => router.back()} className="font-bold text-[#6B7280]">Batal</Button>
                        <Button type="submit" className="bg-[#0A0A0A] hover:bg-accent text-white font-black px-10 h-12 rounded-sm shadow-[6px_6px_0_0_rgba(168,85,247,0.2)] hover:shadow-none transition-all">
                            Simpan Perubahan
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
