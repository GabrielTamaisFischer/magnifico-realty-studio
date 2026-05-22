import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/anuncie-seu-imovel")({
  head: () => ({
    meta: [
      { title: "Anuncie seu imóvel · Magnífico Imóveis" },
      { name: "description", content: "Anuncie seu imóvel com a Magnífico Imóveis e tenha curadoria, divulgação profissional e os compradores certos." },
    ],
  }),
  component: AnunciePage,
});

function AnunciePage() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Cadastro recebido!", { description: "Nossa equipe entrará em contato para avaliar seu imóvel." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="container mx-auto grid gap-16 px-6 py-20 lg:grid-cols-2 lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Para proprietários</p>
          <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
            Anuncie com quem entende de <span className="gradient-gold-text">alto padrão</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Avaliação técnica gratuita, fotografia profissional, tour virtual e divulgação para nossa base de compradores qualificados.
          </p>
          <ul className="mt-8 space-y-3">
            {["Avaliação técnica gratuita", "Fotografia e vídeo profissional", "Tour virtual em 360°", "Base qualificada de compradores", "Negociação e segurança jurídica"].map((b) => (
              <li key={b} className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-gold" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-10 shadow-luxe">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome completo" required />
            <Field label="Telefone" type="tel" required />
            <Field label="E-mail" type="email" required />
            <Select label="Finalidade" options={["Venda", "Locação", "Ambos"]} required />
            <Select label="Tipo do imóvel" options={["Apartamento", "Casa", "Cobertura", "Sobrado", "Comercial", "Terreno"]} required />
            <Field label="Cidade" required />
            <Field label="Bairro" required />
            <Field label="Valor desejado (R$)" type="number" />
          </div>
          <label className="mt-5 block">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Descrição</span>
            <textarea rows={4} className="mt-2 w-full rounded-lg border border-border bg-background p-4 text-sm focus:border-gold focus:outline-none" placeholder="Conte sobre seu imóvel..." />
          </label>
          <label className="mt-5 block">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Fotos (opcional)</span>
            <input type="file" multiple accept="image/*" className="mt-2 block w-full text-sm file:mr-4 file:h-11 file:rounded-full file:border-0 file:bg-gradient-gold file:px-5 file:font-semibold file:text-gold-foreground" />
          </label>
          <button className="mt-8 h-14 w-full rounded-full bg-gradient-gold text-sm font-semibold uppercase tracking-wider text-gold-foreground shadow-gold transition-transform hover:scale-[1.01]">
            Enviar cadastro
          </button>
        </form>
      </section>
    </Layout>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type={type} required={required} className="h-12 rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
    </label>
  );
}

function Select({ label, options, required }: { label: string; options: string[]; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <select required={required} className="h-12 rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none">
        <option value="">Selecione</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
