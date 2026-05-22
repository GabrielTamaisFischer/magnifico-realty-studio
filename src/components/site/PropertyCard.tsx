import { Link } from "@tanstack/react-router";
import { Bed, Bath, Car, Maximize, MapPin } from "lucide-react";
import { type Property, formatBRL } from "@/data/properties";

export function PropertyCard({ p, index = 0 }: { p: Property; index?: number }) {
  const price = p.purpose === "locacao" || (!p.priceSale && p.priceRent)
    ? `${formatBRL(p.priceRent!)}/mês`
    : formatBRL(p.priceSale!);

  return (
    <Link
      to="/imoveis/$slug"
      params={{ slug: p.slug }}
      className="group hover-gold-glow reveal block overflow-hidden rounded-2xl border border-border bg-card transition-all"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.images[0]}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          {p.tag && (
            <span className="rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
              {p.tag}
            </span>
          )}
          <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
            {p.purpose === "locacao" ? "Locação" : "Venda"}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <p className="text-xs uppercase tracking-widest opacity-80">{p.type}</p>
            <p className="font-display text-xl">{price}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl leading-tight transition-colors group-hover:text-gold">
          {p.title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-gold" />
          {p.neighborhood} · {p.city}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-gold/70" /> {p.area}m²</span>
          {p.bedrooms > 0 && <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-gold/70" /> {p.bedrooms}</span>}
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold/70" /> {p.bathrooms}</span>
          <span className="flex items-center gap-1.5"><Car className="h-4 w-4 text-gold/70" /> {p.parking}</span>
        </div>
      </div>
    </Link>
  );
}
