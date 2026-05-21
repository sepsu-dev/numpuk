"use client";

import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4 py-20">
            <div className="w-full max-w-[400px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-black text-2xl shadow-xl mb-6 mx-auto">
                        N
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight">Register</h1>
                </div>

                <div className="p-8 rounded-[32px] border border-border bg-card shadow-2xl">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase tracking-wider ml-1 text-muted-foreground">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase tracking-wider ml-1 text-muted-foreground">Email</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase tracking-wider ml-1 text-muted-foreground">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                            />
                        </div>

                        <button className="w-full py-4 rounded-xl bg-primary text-white font-black text-lg hover:scale-[1.02] shadow-xl shadow-primary/20 transition-all active:scale-95 mt-4">
                            Create Account
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center text-sm font-bold text-muted-foreground">
                    Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
                </div>
            </div>
        </div>
    );
}
