import HeaderComponent from "@/ui/components/HeaderComponent/HeaderComponent";
import FooterComponent from "@/ui/components/FooterComponent/FooterComponent";

export default function UserPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>
        <HeaderComponent />
        {children}
        <FooterComponent />
    </>);
}