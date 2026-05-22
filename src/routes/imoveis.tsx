import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties, PROPERTY_TYPES, type Purpose, type PropertyType } from "@/data/properties";

export const Route = createFileRoute("/imoveis")({
  head: () => ({
    meta: [
      { title: "Vitrine de Imóveis · Magnífico Imóveis" },
      { name: "description", content: "Explore nossa vitrine exclusiva de imóveis de alto padrão para venda e locação em São Paulo." },
    ],
  }),
  component: ImoveisPage,
});

type Sort = "destaque" | "preco-maior" | "preco-menor" | "recentes";

function ImoveisPage() {
  const [purpose, setPurpose] = useState<Purpose | "todos">("todos");
  const [type, setType] = useState<PropertyType | "todos">("todos");
  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [sort, setSort] = useState<Sort>("destaque");
  const [openFilters, setOpenFilters] = useState(false);

  const filtered = useMemo(() => {
    let r = properties.filter((p) => {
      if (purpose !== "todos" && p.purpose !== purpose && p.purpose !== "ambos") return false;
      if (type !== "todos" && p.type !== type) return false;
      if (bedrooms > 0 && p.bedrooms < bedrooms) return false;
      if (maxPrice !== "") {
        const v = p.priceSale ?? p.priceRent ?? 0;
        if (v > maxPrice) return false;
      }
      if (search) {
        const q = search.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.neighborhood.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q)
        );
      }
      return true;
    });
    if (sort === "preco-maior") r = [...r].sort((a, b) => (b.priceSale ?? b.priceRent ?? 0) - (a.priceSale ?? a.priceRent ?? 0));
    if (sort === "preco-menor") r = [...r].sort((a, b) => (a.priceSale ?? a.priceRent ?? 0) - (b.priceSale ?? b.priceRent ?? 0));
    if (sort === "destaque") r = [...r].sort((a, b) => Number(b.featured) - Number(a.featured));
    return r;
  }, [purpose, type, bedrooms, maxPrice, search, sort]);

  const clear = () => {
    setPurpose("todos"); setType("todos"); setBedrooms(0); setMaxPrice(""); setSearch("");
  };

  return (
    <Layout>
      <section className="border-b border-border bg-gradient-to-b from-secondary/40 to-transparent py-16">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Vitrine</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">Imóveis Magnífico</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"} · curadoria atualizada diariamente.
          </p>

          {/* Search bar */}
          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-luxe">
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search className="h-5 w-5 text-gold" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por bairro, cidade ou código..."
                className="h-12 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
            </div>
            <select value={purpose} onChange={(e) => setPurpose(e.target.value as Purpose | "todos")} className="h-12 rounded-xl border border-border bg-background px-4 text-sm">
              <option value="todos">Comprar ou alugar</option>
              <option value="venda">Comprar</option>
              <option value="locacao">Alugar</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value as PropertyType | "todos")} className="h-12 rounded-xl border border-border bg-background px-4 text-sm">
              <option value="todos">Todos os tipos</option>
              {PROPERTY_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            <button onClick={() => setOpenFilters(!openFilters)} className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-medium hover:border-gold">
              <SlidersHorizontal className="h-4 w-4" /> Filtros
            </button>
          </div>

          {openFilters && (
            <div className="mt-3 grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-4">
              <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Dormitórios mínimos
                <select value={bedrooms} onChange={(e) => setBedrooms(Number(e.target.value))} className="h-11 rounded-lg border border-border bg-background px-3 text-sm font-normal text-foreground">
                  {[0, 1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n === 0 ? "Qualquer" : `${n}+`}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Preço máximo
                <input type="number" placeholder="R$" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "")} className="h-11 rounded-lg border border-border bg-background px-3 text-sm font-normal text-foreground" />
              </label>
              <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Ordenar
                <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="h-11 rounded-lg border border-border bg-background px-3 text-sm font-normal text-foreground">
                  <option value="destaque">Em destaque</option>
                  <option value="preco-maior">Maior preço</option>
                  <option value="preco-menor">Menor preço</option>
                  <option value="recentes">Mais recentes</option>
                </select>
              </label>
              <button onClick={clear} className="inline-flex h-11 items-center justify-center gap-2 self-end rounded-lg border border-border text-sm hover:border-gold hover:text-gold">
                <X className="h-4 w-4" /> Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-20 text-center">
            <p className="font-display text-3xl">Nenhum imóvel encontrado</p>
            <p className="mt-2 text-muted-foreground">Tente ajustar seus filtros ou nos diga o que procura.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => <PropertyCard key={p.id} p={p} index={i} />)}
          </div>
        )}
      </section>
    </Layout>
  );
}
