"use client";

import { MessageSquare, Plus, Search, MoreHorizontal, Send, Paperclip } from "lucide-react";

export default function DiscussionsPage() {
    const chats = [
        { id: 1, name: "General Stack", lastMsg: "Bagaimana progress API?", time: "10:30", count: 2 },
        { id: 2, name: "Design Feedback", lastMsg: "Logo baru terlihat keren!", time: "09:12", count: 0 },
        { id: 3, name: "Backend Ops", lastMsg: "Server sudah dideploy.", time: "Kemarin", count: 0 },
    ];

    return (
        <div className="h-[calc(100vh-180px)] flex border border-black/[0.08] rounded-sm bg-white overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Chat List */}
            <div className="w-[350px] border-r border-black/[0.08] flex flex-col bg-[#FAFAFA]">
                <div className="p-6 border-b border-black/[0.08] space-y-4 text-[#0A0A0A]">
                    <div className="flex items-center justify-between">
                        <h3 className="font-black text-xl tracking-tight">Diskusi</h3>
                        <button className="p-2 bg-[#0A0A0A] text-white rounded-sm hover:bg-accent transition-colors">
                            <Plus size={16} />
                        </button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                        <input
                            type="text"
                            placeholder="Cari obrolan..."
                            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-black/[0.08] rounded-sm focus:outline-none focus:border-accent/40"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {chats.map((chat) => (
                        <div key={chat.id} className={`p-5 flex items-center justify-between hover:bg-white border-b border-black/[0.04] cursor-pointer transition-colors ${chat.id === 1 ? 'bg-white border-l-4 border-l-accent' : ''}`}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-sm bg-[#F3F4F6] border border-black/[0.08] flex items-center justify-center font-black text-[#6B7280]">
                                    {chat.name[0]}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-sm font-black text-[#0A0A0A] truncate">{chat.name}</h4>
                                    <p className="text-xs text-[#6B7280] font-medium truncate">{chat.lastMsg}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] font-black text-[#9CA3AF] mb-1 block">{chat.time}</span>
                                {chat.count > 0 && (
                                    <span className="bg-accent text-white text-[10px] font-black px-1.5 py-0.5 rounded-sm">
                                        {chat.count}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                <div className="p-6 border-b border-black/[0.08] flex items-center justify-between bg-white text-[#0A0A0A]">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-sm bg-[#0A0A0A] flex items-center justify-center text-white font-black">
                            G
                        </div>
                        <div>
                            <h3 className="font-black text-base">General Stack</h3>
                            <p className="text-xs font-bold text-emerald-500">4 Anggota Online</p>
                        </div>
                    </div>
                    <button className="text-[#9CA3AF] hover:text-[#0A0A0A]">
                        <MoreHorizontal size={20} />
                    </button>
                </div>

                <div className="flex-1 p-8 overflow-y-auto space-y-6 bg-[#FAFAFA]">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-sm bg-gray-200 flex-shrink-0 flex items-center justify-center text-[10px] font-black">S</div>
                        <div className="bg-white border border-black/[0.08] p-4 rounded-sm rounded-tl-none max-w-md shadow-sm">
                            <p className="text-sm text-[#0A0A0A] font-medium leading-relaxed">Halo semuanya, ada yang bisa bantu cek API gateway? Sepertinya ada sedikit kendala di auth.</p>
                            <span className="text-[10px] font-black text-[#9CA3AF] mt-2 block">10:30 AM</span>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-row-reverse">
                        <div className="w-8 h-8 rounded-sm bg-accent flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white">AD</div>
                        <div className="bg-[#0A0A0A] text-white p-4 rounded-sm rounded-tr-none max-w-md shadow-lg shadow-black/10">
                            <p className="text-sm font-medium leading-relaxed">Siap Sarah, saya cek sekarang juga. Standby ya.</p>
                            <span className="text-[10px] font-black text-accent mt-2 block">10:32 AM</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-white border-t border-black/[0.08]">
                    <div className="flex items-center gap-4 bg-[#FAFAFA] border border-black/[0.08] rounded-sm p-2 text-[#0A0A0A]">
                        <button className="p-2 text-[#9CA3AF] hover:text-[#0A0A0A]"><Paperclip size={20} /></button>
                        <input
                            type="text"
                            placeholder="Ketik pesan..."
                            className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium"
                        />
                        <button className="p-3 bg-[#0A0A0A] text-white rounded-sm hover:bg-accent transition-colors shadow-[3px_3px_0_0_rgba(168,85,247,0.3)]">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
