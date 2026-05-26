"use client";

import { useState } from "react";
import {
    Plus,
    MoreHorizontal,
    Calendar,
    LayoutGrid,
    List,
    Clock,
    AlertCircle,
    Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useEffect } from "react";

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
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const sourceCol = columns.find(col => col.id === source.droppableId);
        const destCol = columns.find(col => col.id === destination.droppableId);

        if (!sourceCol || !destCol) return;

        if (sourceCol === destCol) {
            const newTasks = Array.from(sourceCol.tasks);
            const [removed] = newTasks.splice(source.index, 1);
            newTasks.splice(destination.index, 0, removed);

            const newColumns = columns.map(col => {
                if (col.id === sourceCol.id) {
                    return { ...col, tasks: newTasks };
                }
                return col;
            });

            setColumns(newColumns);
        } else {
            const sourceTasks = Array.from(sourceCol.tasks);
            const [removed] = sourceTasks.splice(source.index, 1);

            const destTasks = Array.from(destCol.tasks);
            destTasks.splice(destination.index, 0, removed);

            const newColumns = columns.map(col => {
                if (col.id === sourceCol.id) {
                    return { ...col, tasks: sourceTasks };
                }
                if (col.id === destCol.id) {
                    return { ...col, tasks: destTasks };
                }
                return col;
            });

            setColumns(newColumns);
        }
    };

    if (!isMounted) return null;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between gap-8 pb-8">
                <div>
                    <h2 className="text-3xl font-black text-[#0A0A0A] tracking-tighter">Kanban</h2>
                    <p className="text-[#9CA3AF] text-sm font-medium mt-1">Kelola workflow visual Anda.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-slate-50 p-1 rounded-sm flex border border-black/[0.04]">
                        <Link href="/dashboard/tasks">
                            <button className="p-2 text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors rounded-sm">
                                <List size={16} />
                            </button>
                        </Link>
                        <button className="p-2 bg-white text-accent rounded-sm shadow-sm border border-black/[0.08]">
                            <LayoutGrid size={16} />
                        </button>
                    </div>
                    <Link href="/dashboard/tasks/new">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded-sm text-[11px] font-black hover:bg-black transition-all shadow-sm active:scale-95">
                            <Plus size={16} />
                            TUGAS BARU
                        </button>
                    </Link>
                </div>
            </div>

            {/* Kanban Grid */}
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
                    {columns.map((column) => (
                        <div key={column.id} className="bg-slate-50/30 border border-black/[0.03] rounded-sm p-6 flex flex-col min-h-[600px] transition-all">
                            <div className="flex items-center justify-between mb-8 px-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]">{column.title}</h3>
                                    <span className="text-[9px] font-black text-[#9CA3AF] opacity-50">{column.tasks.length}</span>
                                </div>
                            </div>

                            <Droppable droppableId={column.id}>
                                {(provided) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className="space-y-4 flex-1"
                                    >
                                        {column.tasks.map((task, index) => (
                                            <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`bg-white border border-black/[0.04] p-6 rounded-sm transition-all group ${snapshot.isDragging ? 'shadow-xl border-[#A855F7]/30 scale-105 z-50' : 'shadow-sm hover:shadow-md hover:border-[#A855F7]/20'} cursor-grab active:cursor-grabbing`}
                                                    >
                                                        <div className="flex justify-between items-start mb-5">
                                                            <div className={`px-2.5 py-0.5 text-[8px] font-black uppercase rounded-full border ${task.priority === 'Critical' ? 'border-red-100/50 text-red-500/70 bg-red-50/30' :
                                                                task.priority === 'High' ? 'border-orange-100/50 text-orange-500/70 bg-orange-50/30' :
                                                                    'border-blue-100/50 text-blue-500/70 bg-blue-50/30'
                                                                }`}>
                                                                {task.priority}
                                                            </div>
                                                            <button className="text-[#E5E7EB] opacity-0 group-hover:opacity-100 hover:text-[#9CA3AF] transition-all">
                                                                <MoreHorizontal size={14} />
                                                            </button>
                                                        </div>
                                                        <h4 className="text-sm font-black text-[#1F2937] mb-6 transition-colors leading-snug">{task.title}</h4>

                                                        <div className="flex items-center justify-between pt-5 border-t border-black/[0.02]">
                                                            <div className="flex items-center gap-1.5">
                                                                <div className="w-5 h-5 rounded-sm bg-slate-50 flex items-center justify-center border border-black/[0.02]">
                                                                    <Briefcase size={10} className="text-[#9CA3AF]" />
                                                                </div>
                                                                <span className="text-[9px] font-black uppercase text-[#9CA3AF] tracking-tight">{task.project}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#9CA3AF]">
                                                                <Clock size={10} />
                                                                {task.date}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}

                                        <button className="w-full py-3 border-2 border-dashed border-black/[0.05] rounded-sm text-[10px] font-black uppercase text-[#9CA3AF] hover:text-accent hover:border-accent/30 transition-all flex items-center justify-center gap-2 group">
                                            <Plus size={14} className="group-hover:scale-110 transition-transform" />
                                            TAMBAH TUGAS
                                        </button>
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </div>
            </DragDropContext>
        </div>
    );
}
