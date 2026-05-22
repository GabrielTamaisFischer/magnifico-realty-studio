import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [{ title: "Termos de Uso · Magnífico Imóveis" }, { name: "description", content: "Termos de uso do site Magnífico Imóveis." }] }),
  component: () => (
    <Layout>
      <article className="container mx-auto max-w-3xl px-6 py-20 prose-luxe">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Documento legal</p>
        <h1 className="mt-4 font-display text-5xl">Termos de Uso</h1>
        <div className="gold-divider my-8 max-w-[80px]" />
        <div className="space-y-6 leading-relaxed text-muted-foreground">
          <p>Bem-vindo ao site da Magnífico Imóveis. Ao acessar e utilizar esta plataforma, você concorda com os termos descritos abaixo.</p>
          <Section title="1. Objeto">O site tem por finalidade divulgar imóveis disponíveis para venda e locação, bem como receber contatos de potenciais clientes e proprietários.</Section>
          <Section title="2. Uso da plataforma">O usuário compromete-se a utilizar o site de forma ética, sem violar direitos de terceiros ou a legislação vigente.</Section>
          <Section title="3. Informações de imóveis">As informações dos imóveis são atualizadas frequentemente, mas podem sofrer alterações sem aviso prévio. Recomendamos confirmar valores e disponibilidade com nossos consultores.</Section>
          <Section title="4. Propriedade intelectual">Todo o conteúdo, fotos, vídeos e marcas são protegidos por direitos autorais e pertencem à Magnífico Imóveis ou seus parceiros.</Section>
          <Section title="5. Responsabilidades">A Magnífico Imóveis não se responsabiliza por decisões tomadas com base em informações desatualizadas ou divergentes daquelas confirmadas em contrato.</Section>
          <Section title="6. Foro">Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer questões.</Section>
        </div>
      </article>
    </Layout>
  ),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}
