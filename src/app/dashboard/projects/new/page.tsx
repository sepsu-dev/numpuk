"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";

export default function NewProjectPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1000)),
            {
                loading: 'Sedang membuat proyek...',
                success: 'Proyek baru berhasil dibuat!',
                error: 'Gagal membuat proyek.',
            }
        );
        setTimeout(() => router.push("/dashboard/projects"), 1500);
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-6">
                <Link href="/dashboard/projects" className="p-3 hover:bg-[#FAFAFA] rounded-sm text-[#0A0A0A] transition-all border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white active:shadow-none">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Proyek Baru</h2>
                    <p className="text-[#6B7280] font-medium mt-1">Mulai rencanakan visi besar Anda di sini.</p>
                </div>
            </div>

            <div className="bg-white border-2 border-black rounded-sm p-10 shadow-[10px_10px_0_0_rgba(0,0,0,1)] max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-8">
                        <div className="grid gap-3">
                            <Label htmlFor="title" className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Nama Proyek</Label>
                            <Input
                                id="title"
                                placeholder="Misal: Aplikasi Numpux"
                                className="h-14 text-lg rounded-sm border-2 border-black focus:border-accent font-bold px-6 bg-white transition-all text-[#0A0A0A] shadow-[4px_4px_0_0_rgba(0,0,0,0.05)]"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="grid gap-3">
                                <Label htmlFor="category" className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Kategori</Label>
                                <Input
                                    id="category"
                                    placeholder="Produk, Desain, dll..."
                                    className="h-14 rounded-sm border-2 border-black focus:border-accent font-bold px-6 bg-white transition-all text-[#0A0A0A] shadow-[4px_4px_0_0_rgba(0,0,0,0.05)]"
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Tipe</Label>
                                <div className="flex bg-white border-2 border-black p-1 rounded-sm shadow-[4px_4px_0_0_rgba(0,0,0,0.05)]">
                                    <button type="button" className="flex-1 py-3 text-[10px] font-black uppercase rounded-sm bg-[#0A0A0A] text-white">Pribadi</button>
                                    <button type="button" className="flex-1 py-3 text-[10px] font-black uppercase rounded-sm text-[#9CA3AF] hover:text-[#0A0A0A]">Publik</button>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="description" className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">Deskripsi Proyek</Label>
                            <Textarea
                                id="description"
                                placeholder="Apa tujuan dari proyek ini?"
                                className="min-h-[160px] rounded-sm border-2 border-black focus:border-accent resize-none p-6 font-medium text-base bg-white transition-all text-[#0A0A0A] shadow-[4px_4px_0_0_rgba(0,0,0,0.05)]"
                            />
                        </div>
                    </div>

                    <div className="pt-10 border-t-2 border-black/5 flex items-center justify-end gap-6">
                        <Button type="button" variant="outline" onClick={() => router.back()} className="font-bold text-[#0A0A0A] border-2 border-black h-14 px-8 rounded-sm">Batal</Button>
                        <Button type="submit" className="bg-[#0A0A0A] hover:bg-accent text-white font-black px-12 h-14 rounded-sm border-2 border-black shadow-[6px_6px_0_0_rgba(168,85,247,0.3)] hover:shadow-none transition-all">
                            Buat Proyek
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
