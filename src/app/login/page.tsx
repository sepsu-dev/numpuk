"use client";

import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4">
            <div className="w-full max-w-[400px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-black text-2xl shadow-xl mb-6">
                        N
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight">Login</h1>
                </div>

                <div className="p-8 rounded-[32px] border border-border bg-card shadow-2xl">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase tracking-wider ml-1 text-muted-foreground">Email</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-black uppercase tracking-wider text-muted-foreground">Password</label>
                                <Link href="#" className="text-[10px] font-black text-primary hover:underline uppercase tracking-wider">Forgot?</Link>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                            />
                        </div>

                        <button className="w-full py-4 rounded-xl bg-black text-white dark:bg-white dark:text-black font-black text-lg hover:scale-[1.02] transition-all active:scale-95 mt-4">
                            Sign In
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center text-sm font-bold text-muted-foreground">
                    New here? <Link href="/register" className="text-primary hover:underline">Create an account</Link>
                </div>
            </div>
        </div>
    );
}
