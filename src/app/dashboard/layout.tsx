"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import {
    LayoutDashboard,
    CheckSquare,
    Calendar,
    Settings,
    LogOut,
    Plus,
    Search,
    Bell,
    ChevronRight,
    TrendingUp,
    Users,
    Briefcase,
    MessageSquare,
    Filter,
    ChevronDown,
    MoreHorizontal
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        toast.success("Berhasil keluar!");
        router.push("/login");
    };

    interface NavItem {
        href: string;
        icon: any;
        label: string;
        count?: number;
    }

    const mainNav: NavItem[] = [
        { href: "/dashboard", icon: LayoutDashboard, label: "Beranda" },
        { href: "/dashboard/tasks", icon: CheckSquare, label: "Tugas", count: 5 },
        { href: "/dashboard/projects", icon: Briefcase, label: "Proyek" },
    ];

    const productivityNav: NavItem[] = [
        { href: "/dashboard/calendar", icon: Calendar, label: "Kalender" },
    ];

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-[#FAFAFA] font-sans text-[#1A1A1A]">
                {/* Shadcn Sidebar */}
                <Sidebar collapsible="icon" className="border-r border-black/[0.08] bg-white">
                    <SidebarHeader className="p-4 h-20 flex items-center justify-center border-b border-black/[0.08]">
                        <Link href="/dashboard" className="flex items-center gap-3 group px-2">
                            <Image
                                src="/logo.png"
                                alt="Numpux Logo"
                                width={32}
                                height={32}
                                className="group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                                <span className="font-black text-lg tracking-tighter text-[#0A0A0A] leading-none">Numpux</span>
                            </div>
                        </Link>
                    </SidebarHeader>

                    <SidebarContent className="py-6 px-2 space-y-4">
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9CA3AF] px-4 mb-2 group-data-[collapsible=icon]:hidden">
                                Utama
                            </SidebarGroupLabel>
                            <SidebarMenu>
                                {mainNav.map((item) => (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={pathname === item.href}
                                            tooltip={item.label}
                                            className={cn(
                                                "h-10 px-4 rounded-sm transition-all duration-200 group/menu-button border border-transparent",
                                                "group-data-[collapsible=icon]:!h-9 group-data-[collapsible=icon]:!w-9 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:justify-center",
                                                pathname === item.href
                                                    ? "bg-[#0A0A0A] text-white shadow-sm"
                                                    : "text-[#6B7280] hover:bg-white hover:text-[#0A0A0A] hover:border-black/[0.08] hover:shadow-sm"
                                            )}
                                        >
                                            <Link href={item.href} className="flex items-center w-full group-data-[collapsible=icon]:justify-center">
                                                <item.icon size={20} className={cn("transition-colors", pathname === item.href ? "text-purple-400" : "text-[#9CA3AF] group-hover/menu-button:text-[#0A0A0A]")} />
                                                <span className="ml-3 font-bold group-data-[collapsible=icon]:hidden">{item.label}</span>
                                                {item.count && (
                                                    <span className={cn(
                                                        "ml-auto text-[10px] px-2 py-0.5 rounded-sm font-black group-data-[collapsible=icon]:hidden",
                                                        pathname === item.href ? "bg-accent text-white" : "bg-[#F3F4F6] text-[#6B7280]"
                                                    )}>
                                                        {item.count}
                                                    </span>
                                                )}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroup>

                        <SidebarGroup>
                            <SidebarGroupLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9CA3AF] px-4 mb-2 group-data-[collapsible=icon]:hidden">
                                Produktivitas
                            </SidebarGroupLabel>
                            <SidebarMenu>
                                {productivityNav.map((item) => (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={pathname === item.href}
                                            tooltip={item.label}
                                            className={cn(
                                                "h-10 px-4 rounded-sm transition-all duration-200 group/menu-button border border-transparent",
                                                "group-data-[collapsible=icon]:!h-9 group-data-[collapsible=icon]:!w-9 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:justify-center",
                                                pathname === item.href
                                                    ? "bg-[#0A0A0A] text-white shadow-sm"
                                                    : "text-[#6B7280] hover:bg-white hover:text-[#0A0A0A] hover:border-black/[0.08] hover:shadow-sm"
                                            )}
                                        >
                                            <Link href={item.href} className="flex items-center w-full group-data-[collapsible=icon]:justify-center">
                                                <item.icon size={20} className={cn("transition-colors", pathname === item.href ? "text-purple-400" : "text-[#9CA3AF] group-hover/menu-button:text-[#0A0A0A]")} />
                                                <span className="ml-3 font-bold group-data-[collapsible=icon]:hidden">{item.label}</span>
                                                {item.count && (
                                                    <span className={cn(
                                                        "ml-auto text-[10px] px-2 py-0.5 rounded-sm font-black group-data-[collapsible=icon]:hidden",
                                                        pathname === item.href ? "bg-accent text-white" : "bg-[#F3F4F6] text-[#6B7280]"
                                                    )}>
                                                        {item.count}
                                                    </span>
                                                )}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter className="p-4 border-t border-black/[0.08]">
                        <div className="flex flex-col gap-2">
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip="Pengaturan"
                                        className={cn(
                                            "h-12 px-3 rounded-sm border border-transparent transition-all duration-200",
                                            pathname === "/dashboard/settings"
                                                ? "bg-white border-black/[0.08] shadow-sm"
                                                : "hover:bg-white hover:border-black/[0.08] hover:shadow-sm"
                                        )}
                                    >
                                        <Link href="/dashboard/settings" className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-sm bg-[#F3F4F6] border border-black/[0.08] flex items-center justify-center text-[10px] font-black text-[#0A0A0A] flex-shrink-0 shadow-[2px_2px_0_0_rgba(0,0,0,0.1)]">
                                                AD
                                            </div>
                                            <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                                                <p className="text-xs font-black text-[#0A0A0A] truncate">Administrator</p>
                                                <p className="text-[10px] font-bold text-[#6B7280] truncate">admin@numpux.com</p>
                                            </div>
                                            <Settings size={14} className="text-[#9CA3AF] group-data-[collapsible=icon]:hidden" />
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-3 py-2 text-[11px] font-black text-red-500 bg-transparent hover:bg-red-50 border border-transparent hover:border-red-500/10 rounded-sm transition-all group-data-[collapsible=icon]:justify-center"
                            >
                                <LogOut size={16} />
                                <span className="group-data-[collapsible=icon]:hidden uppercase tracking-wider">Keluar</span>
                            </button>
                        </div>
                    </SidebarFooter>
                </Sidebar>

                <SidebarInset className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA]">
                    {/* Top Nav / Header */}
                    <header className="h-20 border-b border-black/[0.08] bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-20">
                        <div className="flex items-center gap-4 flex-1">
                            <SidebarTrigger className="text-[#0A0A0A] hover:bg-white hover:border-black/[0.08] border border-transparent transition-all hover:shadow-sm active:scale-90" />
                            <div className="h-6 w-[1px] bg-black/[0.08]"></div>
                            <div className="flex items-center gap-2 text-xs font-bold text-[#9CA3AF]">
                                <span>Workspace</span>
                                <ChevronRight size={14} />
                                <span className="text-[#0A0A0A]">Utama</span>
                                {pathname !== "/dashboard" && (
                                    <>
                                        <ChevronRight size={14} />
                                        <span className="capitalize text-accent">{pathname.split("/").pop()}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="relative max-w-xs w-full hidden md:block">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                                <input
                                    type="text"
                                    placeholder="Cari sesuatu..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-[#FAFAFA] border border-black/[0.1] text-xs focus:outline-none focus:border-accent/40 focus:bg-white transition-all"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <IconButton icon={<Plus size={18} />} label="Tambah" className="bg-[#0A0A0A] text-white hover:bg-accent shadow-[3px_3px_0_0_rgba(168,85,247,0.2)] hover:shadow-none" />
                                <IconButton icon={<Bell size={18} />} dot />
                            </div>
                        </div>
                    </header>

                    <div className="p-10 max-w-[1440px] mx-auto w-full">
                        {children}
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}

function IconButton({ icon, label, className, dot }: { icon: React.ReactNode, label?: string, className?: string, dot?: boolean }) {
    return (
        <button className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-sm border border-black/[0.08] transition-all relative font-sans focus:outline-none active:scale-95",
            className || 'bg-white hover:bg-white hover:shadow-sm hover:border-black/[0.1]'
        )}>
            {icon}
            {label && <span className="text-[10px] font-black tracking-tight uppercase">{label}</span>}
            {dot && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>}
        </button>
    );
}
