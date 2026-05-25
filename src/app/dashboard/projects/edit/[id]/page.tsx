"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";

export default function EditProjectPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success(`Proyek #${id} berhasil diperbarui!`);
        router.push("/dashboard/projects");
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/projects" className="p-2 hover:bg-[#FAFAFA] rounded-sm text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors border border-black/[0.05]">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Edit Proyek #{id}</h2>
                    <p className="text-[#6B7280] font-medium">Sesuaikan detail visi proyek Anda.</p>
                </div>
            </div>

            <div className="bg-white border border-black/[0.08] rounded-sm p-10 shadow-sm max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="p-title" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Nama Proyek</Label>
                            <Input
                                id="p-title"
                                defaultValue="Numpux Engine"
                                className="h-12 text-base rounded-sm border-black/[0.1] focus:border-accent font-medium text-[#0A0A0A]"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="p-status" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Status</Label>
                                <select id="p-status" defaultValue="Active" className="h-10 w-full rounded-sm border border-black/[0.1] bg-transparent px-3 text-sm focus:border-accent focus:outline-none font-bold text-[#0A0A0A]">
                                    <option>Active</option>
                                    <option>Planning</option>
                                    <option>On Hold</option>
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="p-category" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Kategori</Label>
                                <Input
                                    id="p-category"
                                    defaultValue="Backend Engine"
                                    className="rounded-sm border-black/[0.1] focus:border-accent font-medium text-[#0A0A0A]"
                                />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="p-desc" className="font-black text-[11px] uppercase tracking-widest text-[#9CA3AF]">Deskripsi Proyek</Label>
                            <Textarea
                                id="p-desc"
                                defaultValue="Sistem inti untuk manajemen task real-time yang menggunakan arsitektur event-driven."
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
