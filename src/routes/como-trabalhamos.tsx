import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Home, Search, Key } from "lucide-react";

export const Route = createFileRoute("/como-trabalhamos")({
  head: () => ({
    meta: [
      { title: "Como Trabalhamos · Magnífico Imóveis" },
      { name: "description", content: "Conheça nosso processo completo para proprietários, compradores e locatários. Excelência em cada etapa." },
    ],
  }),
  component: ComoPage,
});

const flows = [
  {
    Icon: Home,
    title: "Para proprietários",
    color: "from-amber-200 to-amber-400",
    steps: ["Avaliação técnica do imóvel", "Divulgação profissional com fotografia e tour", "Captação qualificada de interessados", "Análise cadastral rigorosa", "Contrato e assinatura digital", "Vistoria e entrega", "Administração da locação"],
  },
  {
    Icon: Search,
    title: "Para compradores",
    color: "from-amber-100 to-amber-300",
    steps: ["Curadoria personalizada de imóveis", "Agendamento de visitas exclusivas", "Apoio especializado na negociação", "Análise documental completa", "Estruturação de financiamento", "Segurança jurídica garantida"],
  },
  {
    Icon: Key,
    title: "Para locatários",
    color: "from-amber-200 to-amber-500",
    steps: ["Busca do imóvel ideal", "Envio de ficha cadastral", "Garantia locatícia simplificada", "Assinatura digital do contrato", "Vistoria de entrada", "Entrega das chaves"],
  },
];

function ComoPage() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 text-center">
        <SectionHeading eyebrow="Nossa metodologia" title="Como conduzimos cada jornada" description="Um processo desenhado para gerar confiança, agilidade e resultados extraordinários." center />
      </section>

      <section className="container mx-auto grid gap-8 px-6 pb-24 lg:grid-cols-3">
        {flows.map((f, i) => (
          <div key={f.title} className="reveal rounded-3xl border border-border bg-card p-10 shadow-luxe hover-gold-glow" style={{ animationDelay: `${i * 0.12}s` }}>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
              <f.Icon className="h-7 w-7 text-gold-foreground" />
            </div>
            <h2 className="font-display text-3xl">{f.title}</h2>
            <div className="gold-divider my-5 max-w-[60px]" />
            <ol className="space-y-3">
              {f.steps.map((s, idx) => (
                <li key={s} className="flex gap-3 text-sm">
                  <span className="font-display text-gold">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </Layout>
  );
}
