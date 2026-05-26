"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import {
    LayoutDashboard,
    CheckSquare,
    Briefcase,
    Calendar,
    LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavItem {
    href: string;
    icon: any;
    label: string;
    count?: number;
}

const mainNav: NavItem[] = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Beranda" },
    { href: "/dashboard/tasks", icon: CheckSquare, label: "Daftar Tugas", count: 5 },
    { href: "/dashboard/projects", icon: Briefcase, label: "Manajemen Proyek" },
];

const productivityNav: NavItem[] = [
    { href: "/dashboard/calendar", icon: Calendar, label: "Jadwal Kalender" },
];

export function SidebarNav() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        toast.success("Berhasil keluar!");
        router.push("/login");
    };

    return (
        <>
            <SidebarHeader className="p-4 h-20 flex items-center border-b border-black/[0.04]">
                <Link href="/dashboard" className="flex items-center gap-3 group px-2">
                    <div className="w-8 h-8 rounded-sm bg-[#0A0A0A] flex items-center justify-center p-1.5 transition-transform group-hover:scale-110">
                        <Image
                            src="/logo.png"
                            alt="Numpux Logo"
                            width={24}
                            height={24}
                            className="invert"
                        />
                    </div>
                    <span className="font-black text-[16px] tracking-tighter text-[#0A0A0A] group-data-[collapsible=icon]:hidden">Numpux</span>
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
                                        "h-10 px-4 rounded-sm transition-all duration-200 group/menu-button",
                                        "group-data-[collapsible=icon]:!h-9 group-data-[collapsible=icon]:!w-9 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:justify-center",
                                        pathname === item.href
                                            ? "bg-accent/10 text-accent font-black shadow-none border-none"
                                            : "text-[#9CA3AF] hover:bg-slate-50 hover:text-[#0A0A0A]"
                                    )}
                                >
                                    <Link href={item.href} className="flex items-center w-full group-data-[collapsible=icon]:justify-center">
                                        <item.icon size={16} className={cn("transition-colors", pathname === item.href ? "text-accent" : "text-[#E5E7EB] group-hover/menu-button:text-[#0A0A0A]")} />
                                        <span className="ml-3 text-[13px] group-data-[collapsible=icon]:hidden">{item.label}</span>
                                        {item.count && (
                                            <span className={cn(
                                                "ml-auto text-[10px] px-1.5 py-0.5 rounded-sm font-black group-data-[collapsible=icon]:hidden",
                                                pathname === item.href ? "bg-accent text-white" : "text-[#9CA3AF] bg-slate-100"
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
                                        "h-10 px-4 rounded-sm transition-all duration-200 group/menu-button",
                                        "group-data-[collapsible=icon]:!h-9 group-data-[collapsible=icon]:!w-9 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:justify-center",
                                        pathname === item.href
                                            ? "bg-accent/10 text-accent font-black"
                                            : "text-[#9CA3AF] hover:bg-slate-50 hover:text-[#0A0A0A]"
                                    )}
                                >
                                    <Link href={item.href} className="flex items-center w-full group-data-[collapsible=icon]:justify-center">
                                        <item.icon size={16} className={cn("transition-colors", pathname === item.href ? "text-accent" : "text-[#E5E7EB] group-hover/menu-button:text-[#0A0A0A]")} />
                                        <span className="ml-3 text-[13px] group-data-[collapsible=icon]:hidden">{item.label}</span>
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
                                tooltip="Profil"
                                className={cn(
                                    "h-12 px-3 rounded-sm border border-transparent transition-all duration-200",
                                    "hover:bg-white hover:border-black/[0.08] hover:shadow-sm"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-sm bg-black border border-black/[0.08] flex items-center justify-center text-[10px] font-black text-white flex-shrink-0">
                                        AD
                                    </div>
                                    <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                                        <p className="text-[11px] font-black text-[#0A0A0A] truncate">Administrator</p>
                                        <p className="text-[9px] font-bold text-[#9CA3AF] truncate">admin@numpux.com</p>
                                    </div>
                                </div>
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
        </>
    );
}
