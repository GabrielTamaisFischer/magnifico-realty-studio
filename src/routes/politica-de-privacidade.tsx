import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({ meta: [{ title: "Política de Privacidade · Magnífico Imóveis" }, { name: "description", content: "Política de privacidade e LGPD do site Magnífico Imóveis." }] }),
  component: () => (
    <Layout>
      <article className="container mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">LGPD</p>
        <h1 className="mt-4 font-display text-5xl">Política de Privacidade</h1>
        <div className="gold-divider my-8 max-w-[80px]" />
        <div className="space-y-6 leading-relaxed text-muted-foreground">
          <p>A Magnífico Imóveis está comprometida com a proteção dos dados pessoais dos seus clientes e usuários, em conformidade com a Lei nº 13.709/2018 (LGPD).</p>
          <Section title="1. Coleta de dados">Coletamos dados informados nos formulários do site (nome, telefone, e-mail, mensagem) e dados de navegação por meio de cookies.</Section>
          <Section title="2. Finalidade">Os dados são utilizados para atendimento, envio de informações de imóveis, gestão de leads e melhoria contínua dos nossos serviços.</Section>
          <Section title="3. Compartilhamento">Não compartilhamos dados com terceiros sem consentimento, exceto quando exigido por lei ou para viabilizar a prestação do serviço.</Section>
          <Section title="4. Cookies">Utilizamos cookies para análise de tráfego e personalização da experiência. Você pode gerenciar cookies nas configurações do seu navegador.</Section>
          <Section title="5. Direitos do titular">Você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados a qualquer momento pelo e-mail dpo@magnificoimoveis.com.br.</Section>
          <Section title="6. Segurança">Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados.</Section>
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
