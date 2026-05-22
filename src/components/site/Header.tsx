import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Início" },
  { to: "/imoveis", label: "Imóveis" },
  { to: "/sobre", label: "Sobre" },
  { to: "/como-trabalhamos", label: "Como Trabalhamos" },
  { to: "/anuncie-seu-imovel", label: "Anuncie" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-2xl font-semibold tracking-tight">
            <span className="text-gold">M</span>agnífico
          </span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Imóveis
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511999999999"
            className="hidden h-10 items-center gap-2 rounded-full bg-gradient-gold px-5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105 md:inline-flex"
          >
            <Phone className="h-4 w-4" /> WhatsApp
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass animate-in fade-in slide-in-from-top-4 mx-6 mt-3 rounded-2xl border border-border p-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/90 hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5511999999999"
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 text-sm font-semibold text-gold-foreground"
            >
              <Phone className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
