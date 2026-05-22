import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Shield, Sparkles, HeartHandshake, KeyRound, ChevronRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { properties } from "@/data/properties";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magnífico Imóveis · Endereços Extraordinários" },
      { name: "description", content: "Curadoria de imóveis de alto padrão para venda e locação. Atendimento exclusivo, confiança familiar e excelência há mais de duas décadas." },
      { property: "og:title", content: "Magnífico Imóveis · Endereços Extraordinários" },
      { property: "og:description", content: "Curadoria de imóveis de alto padrão para venda e locação." },
    ],
  }),
  component: Home,
});

function Home() {
  const saleFeatured = properties.filter((p) => p.featured && p.purpose === "venda");
  const rentFeatured = properties.filter((p) => p.featured && p.purpose === "locacao");

  return (
    <Layout>
      {/* HERO */}
      <section className="relative -mt-20 flex min-h-[100svh] items-center overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="container relative z-10 mx-auto px-6 pt-32 text-white">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.5em] text-gold">
            Magnífico Imóveis · Desde 2002
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            Endereços que <span className="gradient-gold-text">narram histórias</span> extraordinárias.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-xl text-lg text-white/80">
            Curadoria exclusiva de imóveis de alto padrão para venda e locação em São Paulo. Confiança familiar, atendimento sob medida.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
            <Link
              to="/imoveis"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-gold px-8 text-sm font-semibold uppercase tracking-wider text-gold-foreground shadow-gold transition-transform hover:scale-105"
            >
              Explorar imóveis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contato"
              className="inline-flex h-14 items-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition-all hover:border-gold hover:bg-white/10"
            >
              Atendimento exclusivo
            </Link>
          </div>

          <div className="reveal reveal-delay-4 mt-20 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-4 md:max-w-3xl">
            {[
              ["20+", "Anos de história"],
              ["R$ 2bi+", "Em transações"],
              ["1.200+", "Famílias atendidas"],
              ["98%", "Indicação espontânea"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-display text-3xl text-gold sm:text-4xl">{k}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/60">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENDA */}
      <section className="container mx-auto px-6 py-28">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Para Venda" title="Imóveis em destaque" description="Selecionados pessoalmente pela nossa equipe de curadoria." />
          <Link to="/imoveis" className="hidden items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all md:inline-flex">
            Ver vitrine completa <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {saleFeatured.map((p, i) => <PropertyCard key={p.id} p={p} index={i} />)}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-y border-border bg-secondary/40 py-28">
        <div className="container mx-auto px-6">
          <SectionHeading eyebrow="Por que Magnífico" title="Excelência em cada detalhe" center />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Award, t: "Curadoria Premium", d: "Apenas imóveis aprovados em nossa rigorosa avaliação técnica e estética." },
              { Icon: Shield, t: "Segurança Jurídica", d: "Equipe própria de análise documental e contratual em cada negociação." },
              { Icon: HeartHandshake, t: "Atendimento Familiar", d: "Relacionamento próximo, transparente e construído para a vida toda." },
              { Icon: Sparkles, t: "Marketing de Luxo", d: "Fotografia, vídeo e tour virtual cinematográficos para cada propriedade." },
            ].map(({ Icon, t, d }, i) => (
              <div
                key={t}
                className="reveal group rounded-2xl border border-border bg-card p-8 transition-all hover:border-gold hover:shadow-gold"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold shadow-gold transition-transform group-hover:rotate-6">
                  <Icon className="h-6 w-6 text-gold-foreground" />
                </div>
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAÇÃO */}
      <section className="container mx-auto px-6 py-28">
        <SectionHeading eyebrow="Para Locação" title="Morar com sofisticação" description="Imóveis prontos para receber você, com a tranquilidade de quem é cuidado pela Magnífico." />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rentFeatured.length > 0 ? (
            rentFeatured.map((p, i) => <PropertyCard key={p.id} p={p} index={i} />)
          ) : (
            properties.slice(0, 3).map((p, i) => <PropertyCard key={p.id} p={p} index={i} />)
          )}
        </div>
      </section>

      {/* COMO TRABALHAMOS */}
      <section className="relative overflow-hidden bg-[oklch(0.1_0.005_80)] py-28 text-white">
        <div className="absolute inset-0 opacity-10" style={{ background: "var(--gradient-gold)" }} />
        <div className="container relative mx-auto px-6">
          <SectionHeading eyebrow="Nossa Jornada" title="Como conduzimos cada negócio" />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              { n: "01", t: "Escuta e Curadoria", d: "Entendemos seu sonho e selecionamos imóveis que se alinhem ao seu estilo de vida." },
              { n: "02", t: "Visitas Exclusivas", d: "Agendamentos privativos com nossos consultores especialistas em cada região." },
              { n: "03", t: "Negociação e Entrega", d: "Conduzimos toda a documentação, financiamento e entrega das chaves com segurança." },
            ].map((s, i) => (
              <div key={s.n} className="reveal" style={{ animationDelay: `${i * 0.15}s` }}>
                <p className="font-display text-7xl text-gold/60">{s.n}</p>
                <div className="gold-divider my-6 max-w-[60px]" />
                <h3 className="font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/como-trabalhamos" className="inline-flex items-center gap-3 text-gold hover:gap-4 transition-all">
              <KeyRound className="h-4 w-4" /> Conheça nosso processo completo
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center shadow-luxe md:p-20">
          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.4em] text-gold">Pronto para o próximo capítulo?</p>
          <h2 className="relative mt-6 font-display text-4xl sm:text-6xl">
            Vamos encontrar o seu <span className="gradient-gold-text">endereço magnífico</span>.
          </h2>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contato" className="inline-flex h-14 items-center gap-3 rounded-full bg-gradient-gold px-8 text-sm font-semibold uppercase tracking-wider text-gold-foreground shadow-gold transition-transform hover:scale-105">
              Falar com a Magnífico <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/anuncie-seu-imovel" className="inline-flex h-14 items-center gap-3 rounded-full border border-border bg-background px-8 text-sm font-semibold uppercase tracking-wider transition-all hover:border-gold">
              Anunciar meu imóvel
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
