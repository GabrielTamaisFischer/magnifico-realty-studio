import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import prop5 from "@/assets/prop-5.jpg";
import prop6 from "@/assets/prop-6.jpg";

export type PropertyType =
  | "apartamento"
  | "casa"
  | "cobertura"
  | "sobrado"
  | "comercial"
  | "terreno";

export type Purpose = "venda" | "locacao" | "ambos";
export type PropertyStatus = "disponivel" | "reservado" | "vendido" | "alugado";

export interface Property {
  id: string;
  code: string;
  slug: string;
  title: string;
  type: PropertyType;
  purpose: Purpose;
  status: PropertyStatus;
  priceSale?: number;
  priceRent?: number;
  condo?: number;
  iptu?: number;
  city: string;
  neighborhood: string;
  street?: string;
  area: number;
  totalArea?: number;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parking: number;
  description: string;
  features: string[];
  condoFeatures: string[];
  images: string[];
  featured: boolean;
  isNew?: boolean;
  acceptsFinancing?: boolean;
  acceptsExchange?: boolean;
  furnished?: boolean;
  tag?: string;
}

export const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: "apartamento", label: "Apartamento" },
  { value: "casa", label: "Casa" },
  { value: "cobertura", label: "Cobertura" },
  { value: "sobrado", label: "Sobrado" },
  { value: "comercial", label: "Comercial" },
  { value: "terreno", label: "Terreno" },
];

export const properties: Property[] = [
  {
    id: "1",
    code: "MAG-001",
    slug: "cobertura-duplex-jardins",
    title: "Cobertura Duplex com Vista Panorâmica",
    type: "cobertura",
    purpose: "venda",
    status: "disponivel",
    priceSale: 8900000,
    condo: 4500,
    iptu: 1200,
    city: "São Paulo",
    neighborhood: "Jardins",
    street: "Rua Oscar Freire",
    area: 420,
    totalArea: 520,
    bedrooms: 4,
    suites: 4,
    bathrooms: 6,
    parking: 4,
    description:
      "Cobertura duplex única no coração dos Jardins, com acabamento impecável, vista 360º da cidade, piscina privativa, spa e terraço gourmet. Um endereço para quem busca exclusividade e conforto em sua mais pura essência.",
    features: ["Piscina privativa", "Terraço gourmet", "Spa", "Sauna", "Closet master", "Lareira", "Ar condicionado", "Smart home"],
    condoFeatures: ["Concierge 24h", "Valet", "Spa", "Academia premium", "Salão de festas", "Heliponto"],
    images: [prop3, prop1, prop4, prop6],
    featured: true,
    isNew: true,
    acceptsFinancing: true,
    furnished: true,
    tag: "Exclusivo",
  },
  {
    id: "2",
    code: "MAG-002",
    slug: "casa-alto-de-pinheiros",
    title: "Casa Contemporânea com Piscina",
    type: "casa",
    purpose: "venda",
    status: "disponivel",
    priceSale: 6500000,
    iptu: 980,
    city: "São Paulo",
    neighborhood: "Alto de Pinheiros",
    street: "Rua dos Coqueiros",
    area: 480,
    totalArea: 600,
    bedrooms: 4,
    suites: 3,
    bathrooms: 5,
    parking: 4,
    description:
      "Projeto contemporâneo assinado, integração total com a área externa, piscina com borda infinita e jardim paisagístico. Pé direito duplo e iluminação natural privilegiada.",
    features: ["Piscina", "Jardim paisagístico", "Pé direito duplo", "Home theater", "Adega climatizada", "Escritório"],
    condoFeatures: ["Rua tranquila", "Segurança privada"],
    images: [prop2, prop4, prop5, prop6],
    featured: true,
    acceptsFinancing: true,
    tag: "Destaque",
  },
  {
    id: "3",
    code: "MAG-003",
    slug: "apartamento-vila-nova-conceicao",
    title: "Apartamento Alto Padrão Vila Nova Conceição",
    type: "apartamento",
    purpose: "locacao",
    status: "disponivel",
    priceRent: 32000,
    condo: 3200,
    iptu: 850,
    city: "São Paulo",
    neighborhood: "Vila Nova Conceição",
    street: "Rua Diogo Jácome",
    area: 280,
    bedrooms: 3,
    suites: 3,
    bathrooms: 4,
    parking: 3,
    description:
      "Apartamento totalmente reformado e mobiliado, em edifício boutique com poucos andares. Living amplo, varanda gourmet integrada e suíte master com closet e hidromassagem.",
    features: ["Mobiliado", "Varanda gourmet", "Closet master", "Hidromassagem", "Ar condicionado", "Automação"],
    condoFeatures: ["Piscina", "Academia", "Spa", "Salão gourmet", "Brinquedoteca"],
    images: [prop4, prop1, prop5, prop6],
    featured: true,
    isNew: true,
    furnished: true,
    tag: "Mobiliado",
  },
  {
    id: "4",
    code: "MAG-004",
    slug: "penthouse-itaim-bibi",
    title: "Penthouse com Rooftop no Itaim",
    type: "cobertura",
    purpose: "venda",
    status: "disponivel",
    priceSale: 12500000,
    condo: 6800,
    iptu: 1800,
    city: "São Paulo",
    neighborhood: "Itaim Bibi",
    area: 540,
    totalArea: 680,
    bedrooms: 4,
    suites: 4,
    bathrooms: 7,
    parking: 6,
    description:
      "Penthouse de altíssimo padrão com rooftop privativo, fire pit, ofurô e vista para o skyline. Projeto interior de assinatura internacional.",
    features: ["Rooftop privativo", "Ofurô", "Fire pit", "Vista skyline", "Home cinema", "Adega"],
    condoFeatures: ["Concierge", "Valet", "Heliponto", "Spa", "Wine bar"],
    images: [prop3, prop6, prop4, prop1],
    featured: true,
    isNew: true,
    acceptsFinancing: true,
    tag: "Lançamento",
  },
  {
    id: "5",
    code: "MAG-005",
    slug: "apartamento-moema",
    title: "Apartamento Garden em Moema",
    type: "apartamento",
    purpose: "venda",
    status: "disponivel",
    priceSale: 3200000,
    condo: 2100,
    iptu: 520,
    city: "São Paulo",
    neighborhood: "Moema",
    area: 180,
    bedrooms: 3,
    suites: 2,
    bathrooms: 3,
    parking: 2,
    description:
      "Garden com 80m² de área externa privativa, ideal para famílias que buscam tranquilidade sem abrir mão da localização premium.",
    features: ["Garden 80m²", "Churrasqueira privativa", "Varanda integrada"],
    condoFeatures: ["Piscina", "Academia", "Playground", "Salão de festas"],
    images: [prop4, prop1, prop6],
    featured: false,
    acceptsFinancing: true,
    acceptsExchange: true,
  },
  {
    id: "6",
    code: "MAG-006",
    slug: "sala-comercial-faria-lima",
    title: "Sala Comercial Premium Faria Lima",
    type: "comercial",
    purpose: "locacao",
    status: "disponivel",
    priceRent: 18500,
    condo: 4200,
    iptu: 1100,
    city: "São Paulo",
    neighborhood: "Itaim Bibi",
    area: 220,
    bedrooms: 0,
    suites: 0,
    bathrooms: 2,
    parking: 4,
    description:
      "Conjunto comercial em torre AAA na Faria Lima, laje corporativa, vista deslumbrante e infraestrutura completa.",
    features: ["Laje corporativa", "Vista panorâmica", "Forro modular", "Piso elevado"],
    condoFeatures: ["Heliponto", "Restaurante", "Auditório", "Bicicletário"],
    images: [prop5, prop1, prop3],
    featured: false,
    tag: "Corporativo",
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
