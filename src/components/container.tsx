import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <main className="w-full min-h-screen p-5 flex flex-col gap-5">
      {children}
    </main>
  );
}
