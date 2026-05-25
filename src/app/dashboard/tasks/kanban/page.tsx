"use client";

import { useState } from "react";
import {
    Plus,
    MoreHorizontal,
    Calendar,
    LayoutGrid,
    List,
    Clock,
    AlertCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function KanbanPage() {
    const [columns, setColumns] = useState([
        {
            id: "todo",
            title: "To Do",
            tasks: [
                { id: 2, title: "Design Sprint: Navigation", project: "Marketing", priority: "Medium", date: "Besok" },
                { id: 5, title: "User Interview Setup", project: "Product", priority: "Medium", date: "28 Mei" },
            ]
        },
        {
            id: "inprogress",
            title: "In Progress",
            tasks: [
                { id: 1, title: "Refactor API Gateway", project: "Numpux Engine", priority: "High", date: "Hari ini" },
            ]
        },
        {
            id: "review",
            title: "Review",
            tasks: [
                { id: 4, title: "Implement Dark Mode", project: "Numpux App", priority: "Low", date: "25 Mei" },
            ]
        },
        {
            id: "done",
            title: "Done",
            tasks: [
                { id: 3, title: "Fix Authentication Bug", project: "Core", priority: "Critical", date: "Kemarin" },
            ]
        }
    ]);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Kanban Board</h2>
                    <p className="text-[#6B7280] font-medium mt-1">Kelola workflow tugas Anda secara visual.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-[#FAFAFA] border border-black/[0.08] p-1 rounded-sm flex">
                        <Link href="/dashboard/tasks">
                            <button className="p-2 text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors rounded-sm">
                                <List size={18} />
                            </button>
                        </Link>
                        <button className="p-2 bg-white text-accent shadow-sm border border-black/[0.05] rounded-sm">
                            <LayoutGrid size={18} />
                        </button>
                    </div>
                    <Link href="/dashboard/tasks/new">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded-sm text-sm font-black hover:bg-accent hover:shadow-none shadow-[4px_4px_0_0_rgba(168,85,247,0.3)] transition-all">
                            <Plus size={18} />
                            Tugas Baru
                        </button>
                    </Link>
                </div>
            </div>

            {/* Kanban Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
                {columns.map((column) => (
                    <div key={column.id} className="bg-[#FAFAFA]/50 border border-black/[0.04] rounded-sm p-4 flex flex-col min-h-[500px]">
                        <div className="flex items-center justify-between mb-6 px-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-black text-[11px] uppercase tracking-widest text-[#0A0A0A]">{column.title}</h3>
                                <span className="text-[10px] bg-black text-white px-1.5 py-0.5 rounded-full font-black">{column.tasks.length}</span>
                            </div>
                            <button className="text-[#9CA3AF] hover:text-[#0A0A0A]">
                                <MoreHorizontal size={14} />
                            </button>
                        </div>

                        <div className="space-y-4 flex-1">
                            {column.tasks.map((task) => (
                                <div key={task.id} className="bg-white border border-black/[0.08] p-4 rounded-sm shadow-sm hover:border-accent hover:shadow-[4px_4px_0_0_rgba(168,85,247,0.05)] transition-all cursor-grab active:cursor-grabbing group">
                                    <div className="flex justify-between items-start mb-3">
                                        <Badge variant="outline" className={`text-[8px] font-black uppercase px-2 py-0 h-5 rounded-sm border-2 ${task.priority === 'Critical' ? 'border-red-500 text-red-600 bg-red-50' :
                                                task.priority === 'High' ? 'border-orange-500 text-orange-600 bg-orange-50' :
                                                    'border-blue-500 text-blue-600 bg-blue-50'
                                            }`}>
                                            {task.priority}
                                        </Badge>
                                        <button className="text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity">
                                            <MoreHorizontal size={14} />
                                        </button>
                                    </div>
                                    <h4 className="text-sm font-bold text-[#0A0A0A] mb-4 group-hover:text-accent transition-colors leading-tight">{task.title}</h4>

                                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.03]">
                                        <span className="text-[9px] font-black uppercase text-[#9CA3AF] tracking-tight">{task.project}</span>
                                        <div className="flex items-center gap-1 text-[9px] font-bold text-[#6B7280]">
                                            <Clock size={10} />
                                            {task.date}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button className="w-full py-3 border-2 border-dashed border-black/[0.05] rounded-sm text-[10px] font-black uppercase text-[#9CA3AF] hover:text-accent hover:border-accent/30 transition-all flex items-center justify-center gap-2 group">
                                <Plus size={14} className="group-hover:scale-110 transition-transform" />
                                TAMBAH TUGAS
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
