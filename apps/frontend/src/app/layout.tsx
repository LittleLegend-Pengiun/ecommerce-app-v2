import type { Metadata } from "next";
import AppLayout from "@/layout/AppLayout";

export const metadata: Metadata = {
    title: "Ecommerce app v2",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AppLayout>
                {children}
            </AppLayout>
        </html>
    );
}