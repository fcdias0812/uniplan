import type { Metadata } from "next";
import { Header } from "@/components/header";
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
        <Header />
        {children}
      </body>
    </html>
  );
}
