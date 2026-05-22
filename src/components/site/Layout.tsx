import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "sonner";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
