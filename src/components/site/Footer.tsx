import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-[oklch(0.1_0.005_80)] text-[oklch(0.96_0.005_80)]">
      <div className="gold-divider absolute inset-x-0 top-0" />
      <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl">
            <span className="text-gold">M</span>agnífico
          </h3>
          <p className="mt-3 text-xs uppercase tracking-[0.4em] text-gold/80">Imóveis</p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Curadoria, confiança e excelência no mercado imobiliário de alto padrão. Há mais de duas
            décadas conectando famílias aos seus endereços extraordinários.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Navegação</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/" className="hover:text-gold">Início</Link></li>
            <li><Link to="/imoveis" className="hover:text-gold">Imóveis</Link></li>
            <li><Link to="/sobre" className="hover:text-gold">Sobre nós</Link></li>
            <li><Link to="/como-trabalhamos" className="hover:text-gold">Como Trabalhamos</Link></li>
            <li><Link to="/anuncie-seu-imovel" className="hover:text-gold">Anuncie seu imóvel</Link></li>
            <li><Link to="/contato" className="hover:text-gold">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Contato</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Rua Oscar Freire, 1200<br />Jardins · São Paulo</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> (11) 99999-9999</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> contato@magnificoimoveis.com.br</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Newsletter</h4>
          <p className="text-sm text-white/60">Receba lançamentos exclusivos e oportunidades antes de todos.</p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              className="h-11 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <button className="h-11 rounded-full bg-gradient-gold px-5 text-sm font-semibold text-gold-foreground shadow-gold">
              Assinar
            </button>
          </form>
          <div className="mt-6 space-y-2 text-xs text-white/50">
            <Link to="/termos" className="block hover:text-gold">Termos de Uso</Link>
            <Link to="/politica-de-privacidade" className="block hover:text-gold">Política de Privacidade</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Magnífico Imóveis · CRECI 00000-J · Todos os direitos reservados
      </div>
    </footer>
  );
}
