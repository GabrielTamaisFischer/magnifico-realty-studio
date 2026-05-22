import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato · Magnífico Imóveis" },
      { name: "description", content: "Fale com a Magnífico Imóveis. Atendimento exclusivo para compra, locação, anúncio e administração de imóveis." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Mensagem enviada!", { description: "Em breve nossa equipe entrará em contato." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="container mx-auto px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Fale conosco</p>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl">Vamos conversar.</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Nossa equipe está pronta para entender o que você procura e oferecer um atendimento sob medida.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-10 shadow-luxe lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome" required />
              <Field label="Telefone" type="tel" required />
              <Field label="E-mail" type="email" required />
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Assunto</span>
                <select required className="h-12 rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none">
                  <option value="">Selecione</option>
                  <option>Comprar imóvel</option>
                  <option>Alugar imóvel</option>
                  <option>Anunciar imóvel</option>
                  <option>Falar com corretor</option>
                  <option>Administração de locação</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Mensagem</span>
              <textarea required rows={5} className="mt-2 w-full rounded-lg border border-border bg-background p-4 text-sm focus:border-gold focus:outline-none" />
            </label>
            <button className="mt-6 h-14 w-full rounded-full bg-gradient-gold text-sm font-semibold uppercase tracking-wider text-gold-foreground shadow-gold transition-transform hover:scale-[1.01]">
              Enviar mensagem
            </button>
          </form>

          <aside className="space-y-4 lg:col-span-2">
            <Info Icon={Phone} title="Telefone / WhatsApp" lines={["(11) 99999-9999"]} />
            <Info Icon={Mail} title="E-mail" lines={["contato@magnificoimoveis.com.br"]} />
            <Info Icon={MapPin} title="Endereço" lines={["Rua Oscar Freire, 1200", "Jardins · São Paulo · SP"]} />
            <Info Icon={Clock} title="Horário" lines={["Seg a Sex · 9h às 19h", "Sáb · 10h às 16h"]} />
          </aside>
        </div>
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

function Info({ Icon, title, lines }: { Icon: typeof Phone; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 hover-gold-glow">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold shadow-gold">
          <Icon className="h-5 w-5 text-gold-foreground" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">{title}</p>
          {lines.map((l) => <p key={l} className="text-sm text-foreground">{l}</p>)}
        </div>
      </div>
    </div>
  );
}
