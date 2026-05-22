import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bed, Bath, Car, Maximize, MapPin, Phone, Mail, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/site/Layout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { getPropertyBySlug, properties, formatBRL } from "@/data/properties";

export const Route = createFileRoute("/imoveis/$slug")({
  loader: ({ params }) => {
    const p = getPropertyBySlug(params.slug);
    if (!p) throw notFound();
    return { property: p };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.property.title} · Magnífico Imóveis` },
      { name: "description", content: loaderData?.property.description.slice(0, 160) },
    ],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-6 py-32 text-center">
        <p className="font-display text-5xl">Imóvel não encontrado</p>
        <Link to="/imoveis" className="mt-6 inline-block text-gold">Voltar à vitrine</Link>
      </div>
    </Layout>
  ),
  errorComponent: () => (
    <Layout>
      <div className="container mx-auto px-6 py-32 text-center">
        <p className="font-display text-3xl">Algo deu errado</p>
      </div>
    </Layout>
  ),
  component: PropertyPage,
});

function PropertyPage() {
  const { property: p } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const similar = properties.filter((x) => x.id !== p.id && x.type === p.type).slice(0, 3);

  const handleLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Interesse registrado!", { description: "Um de nossos consultores entrará em contato em instantes." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 pt-8">
        <Link to="/imoveis" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
          <ArrowLeft className="h-4 w-4" /> Voltar à vitrine
        </Link>
      </div>

      {/* GALERIA */}
      <section className="container mx-auto mt-6 px-6">
        <div className="grid gap-3 md:grid-cols-4">
          <div className="md:col-span-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <img src={p.images[active]} alt={p.title} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
                {p.purpose === "locacao" ? "Locação" : "Venda"} · {p.code}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
            {p.images.slice(0, 3).map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all md:aspect-[16/10] ${
                  active === i ? "border-gold shadow-gold" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="container mx-auto grid gap-12 px-6 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">{p.type}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-3 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" /> {p.neighborhood} · {p.city}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-4">
            <Stat icon={Maximize} label="Área útil" value={`${p.area}m²`} />
            {p.bedrooms > 0 && <Stat icon={Bed} label="Dormitórios" value={`${p.bedrooms}`} sub={`${p.suites} suítes`} />}
            <Stat icon={Bath} label="Banheiros" value={`${p.bathrooms}`} />
            <Stat icon={Car} label="Vagas" value={`${p.parking}`} />
          </div>

          <div className="mt-12">
            <h2 className="font-display text-3xl">Sobre o imóvel</h2>
            <div className="gold-divider my-4 max-w-[80px]" />
            <p className="leading-relaxed text-muted-foreground">{p.description}</p>
          </div>

          {p.features.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-3xl">Características</h2>
              <div className="gold-divider my-4 max-w-[80px]" />
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm">
                    <Check className="h-4 w-4 text-gold" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {p.condoFeatures.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-3xl">Condomínio</h2>
              <div className="gold-divider my-4 max-w-[80px]" />
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.condoFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm">
                    <Check className="h-4 w-4 text-gold" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-luxe">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {p.purpose === "locacao" ? "Locação" : "Venda"}
            </p>
            <p className="mt-2 font-display text-4xl text-gold">
              {p.purpose === "locacao" || (!p.priceSale && p.priceRent)
                ? `${formatBRL(p.priceRent!)}`
                : formatBRL(p.priceSale!)}
              {p.purpose === "locacao" && <span className="text-base text-muted-foreground">/mês</span>}
            </p>
            {(p.condo || p.iptu) && (
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                {p.condo && <p>Condomínio: <span className="text-foreground">{formatBRL(p.condo)}</span></p>}
                {p.iptu && <p>IPTU: <span className="text-foreground">{formatBRL(p.iptu)}</span></p>}
              </div>
            )}

            <div className="gold-divider my-6" />

            <form onSubmit={handleLead} className="space-y-3">
              <p className="font-display text-xl">Tenho interesse</p>
              <input required placeholder="Seu nome" className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
              <input required type="tel" placeholder="WhatsApp" className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
              <input required type="email" placeholder="E-mail" className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm focus:border-gold focus:outline-none" />
              <textarea placeholder="Quero agendar uma visita..." rows={3} className="w-full rounded-lg border border-border bg-background p-4 text-sm focus:border-gold focus:outline-none" />
              <button className="h-12 w-full rounded-full bg-gradient-gold text-sm font-semibold uppercase tracking-wider text-gold-foreground shadow-gold transition-transform hover:scale-[1.02]">
                Enviar interesse
              </button>
            </form>

            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/5511999999999" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border text-sm font-medium hover:border-gold">
                <Phone className="h-4 w-4 text-gold" /> WhatsApp
              </a>
              <a href="mailto:contato@magnificoimoveis.com.br" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border text-sm font-medium hover:border-gold">
                <Mail className="h-4 w-4 text-gold" /> E-mail
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* SIMILARES */}
      {similar.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <h2 className="font-display text-4xl">Imóveis semelhantes</h2>
          <div className="gold-divider my-4 max-w-[80px]" />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {similar.map((s, i) => <PropertyCard key={s.id} p={s} index={i} />)}
          </div>
        </section>
      )}
    </Layout>
  );
}

function Stat({ icon: Icon, label, value, sub }: { icon: typeof Bed; label: string; value: string; sub?: string }) {
  return (
    <div>
      <Icon className="h-5 w-5 text-gold" />
      <p className="mt-2 font-display text-2xl">{value}</p>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      {sub && <p className="mt-0.5 text-[10px] text-muted-foreground">{sub}</p>}
    </div>
  );
}
