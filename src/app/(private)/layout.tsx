import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "UniPlan | Dashboard",
  description: "Seu planner universitário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Sidebar />
        <div className="sm:pl-14">{children}</div>
      </body>
    </html>
  );
}
