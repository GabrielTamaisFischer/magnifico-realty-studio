import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import hero from "@/assets/prop-4.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre · Magnífico Imóveis" },
      { name: "description", content: "Há mais de duas décadas conectando famílias aos seus endereços extraordinários. Conheça a história, missão e valores da Magnífico Imóveis." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <Layout>
      <section className="container mx-auto grid gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Nossa história</p>
          <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
            Uma imobiliária <span className="gradient-gold-text">familiar</span>, feita para a vida toda.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A Magnífico Imóveis nasceu em 2002 do sonho de uma família apaixonada por arquitetura e pelo poder transformador do lar. Desde então, fomos cuidadosamente construindo uma reputação que se sustenta em curadoria criteriosa, transparência absoluta e relacionamentos que atravessam gerações.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Hoje, somos referência em imóveis de alto padrão em São Paulo, com um portfólio selecionado a dedo e uma equipe que entende que cada negócio é, antes de tudo, uma história de vida.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-luxe">
          <img src={hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="font-display text-4xl">22+</p>
            <p className="text-sm uppercase tracking-widest text-gold">anos de tradição</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-24">
        <div className="container mx-auto px-6">
          <SectionHeading eyebrow="Nossos pilares" title="Missão, visão e valores" center />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { Icon: Heart, t: "Missão", d: "Conectar pessoas a endereços que representem verdadeiramente a essência de suas vidas." },
              { Icon: Sparkles, t: "Visão", d: "Ser referência nacional em curadoria imobiliária de alto padrão e atendimento humanizado." },
              { Icon: Award, t: "Valores", d: "Confiança · Transparência · Excelência · Cuidado familiar em cada detalhe." },
            ].map(({ Icon, t, d }, i) => (
              <div key={t} className="reveal rounded-2xl border border-border bg-card p-8 hover-gold-glow" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold shadow-gold">
                  <Icon className="h-6 w-6 text-gold-foreground" />
                </div>
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <SectionHeading eyebrow="A equipe" title="Atendimento que conhece você pelo nome" />
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {["Sócio-fundador", "Diretora Comercial", "Consultor sênior", "Consultora sênior"].map((role, i) => (
            <div key={role} className="reveal rounded-2xl border border-border bg-card p-8 text-center hover-gold-glow" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <Users className="h-10 w-10 text-gold-foreground" />
              </div>
              <p className="mt-6 font-display text-xl">Equipe Magnífico</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gold">{role}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/contato" className="inline-flex h-14 items-center gap-3 rounded-full bg-gradient-gold px-8 text-sm font-semibold uppercase tracking-wider text-gold-foreground shadow-gold transition-transform hover:scale-105">
            Conversar com a Magnífico
          </Link>
        </div>
      </section>
    </Layout>
  );
}
