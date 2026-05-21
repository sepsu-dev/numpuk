import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader name="Numpuk" />
            <main className="flex-1">
                {children}
            </main>
            <SiteFooter author="Numpuk Team" />
        </div>
    );
}
