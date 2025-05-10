import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "UniPlan | Seu planner universitário",
  description: "Seu planner universitário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
