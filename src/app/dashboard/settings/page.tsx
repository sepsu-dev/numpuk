"use client";

import { useState } from "react";
import {
    User,
    Bell,
    Shield,
    AppWindow,
    Camera,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Profil berhasil diperbarui!");
    };

    const tabs = [
        { id: "profile", label: "Profil", icon: User },
        { id: "notifications", label: "Notifikasi", icon: Bell },
        { id: "security", label: "Keamanan", icon: Shield },
        { id: "appearance", label: "Tampilan", icon: AppWindow },
    ];

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-1">
                <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Pengaturan</h2>
                <p className="text-[#6B7280] font-medium mt-1">Atur profil dan preferensi aplikasi Anda di sini.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
                {/* Navigasi Sidebar */}
                <div className="xl:col-span-1 space-y-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-sm text-sm font-black transition-all border ${activeTab === tab.id
                                ? "bg-[#0A0A0A] text-white border-black shadow-sm"
                                : "text-[#6B7280] border-transparent hover:border-black/[0.1] hover:bg-[#FAFAFA]"
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Konten Utama */}
                <div className="xl:col-span-3 bg-white border border-black/[0.08] rounded-sm p-10 shadow-sm">
                    {activeTab === 'profile' && (
                        <form onSubmit={handleSave} className="space-y-10">
                            <div className="flex flex-col md:flex-row md:items-center gap-10">
                                <div className="relative group mx-auto md:mx-0">
                                    <div className="w-32 h-32 rounded-sm bg-[#FAFAFA] border-2 border-dashed border-black/[0.2] flex items-center justify-center text-[#9CA3AF] group-hover:border-accent transition-all overflow-hidden shadow-inner">
                                        <User size={56} className="group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <button type="button" className="absolute -bottom-2 -right-2 bg-[#0A0A0A] text-white p-3 rounded-sm border border-white shadow-md hover:bg-accent transition-all">
                                        <Camera size={16} />
                                    </button>
                                </div>
                                <div className="text-center md:text-left space-y-2">
                                    <h3 className="text-2xl font-black text-[#0A0A0A] tracking-tighter">Foto Profil</h3>
                                    <p className="text-xs text-[#6B7280] font-medium leading-relaxed max-w-[200px]">Gunakan format JPG atau PNG (Maksimal 2MB).</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormInput label="Nama Lengkap" id="name" value="Administrator" />
                                <FormInput label="Email" id="email" value="admin@numpux.com" />
                                <FormInput label="Pekerjaan" id="job" placeholder="Software Engineer" />
                                <FormInput label="Bio" id="bio" placeholder="Deskripsi singkat diri Anda..." />
                            </div>

                            <div className="pt-10 border-t border-black/[0.05] flex flex-col md:flex-row justify-end gap-4">
                                <Button type="button" variant="outline" className="font-bold text-[#6B7280] border border-black/[0.1] h-14 px-8 rounded-sm hover:bg-[#FAFAFA]">Batal</Button>
                                <Button type="submit" className="bg-[#0A0A0A] hover:bg-accent font-black rounded-sm shadow-sm transition-all px-12 h-14 text-white">
                                    Simpan Perubahan
                                </Button>
                            </div>
                        </form>
                    )}

                    {activeTab !== 'profile' && (
                        <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                            <div className="w-24 h-24 rounded-sm bg-[#FAFAFA] border border-black/[0.1] flex items-center justify-center text-accent shadow-sm">
                                <AppWindow size={40} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-[#0A0A0A] tracking-tighter">Segera Datang</h3>
                                <p className="text-sm font-medium text-[#6B7280] max-w-sm mx-auto leading-relaxed">
                                    Halaman <span className="text-[#0A0A0A] font-black">{tabs.find(t => t.id === activeTab)?.label}</span> masih dalam tahap pengembangan.
                                </p>
                            </div>
                            <button onClick={() => setActiveTab("profile")} className="text-xs font-black uppercase text-accent hover:underline flex items-center gap-2">
                                KEMBALI KE PROFIL <ArrowRight size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function FormInput({ label, id, value, placeholder }: { label: string, id: string, value?: string, placeholder?: string }) {
    return (
        <div className="grid gap-3">
            <Label htmlFor={id} className="font-black text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF] px-1">{label}</Label>
            <Input
                id={id}
                defaultValue={value}
                placeholder={placeholder}
                className="rounded-sm border border-black/[0.1] focus:border-accent h-14 bg-white transition-all pl-6 font-bold text-[#0A0A0A] shadow-sm"
            />
        </div>
    );
}
