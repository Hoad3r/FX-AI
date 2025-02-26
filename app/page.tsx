import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import AboutSection from "./about";
import BenefitsSection from "./benefits";
import ClientsSection from "./clients";
import PartnersSection from "./partnersSection";
import MethodologySection from "./methodology";
import LandingBackground from "./background";
import style from './hero.module.css'
import { Hero } from "./hero";
import ContactSection from "./contact";
import WhatsAppButton from "./whats";
import PlansSection from "./plansSection/";

const influencers = [
  {
    name: 'Berzerk',
    photo: '/lojas-parceiras/berzerk-logo.png',
    instagram: '@berzerk.club'
  },
  {
    name: 'Nerd Explosion',
    photo: '/lojas-parceiras/logo_nerd-explosion_Urls1u.png',
    instagram: '@lojanerdexplosion'
  },
  {
    name: 'Hefestus',
    photo: '/lojas-parceiras/HEFESTUS_LOGO_V4_Prancheta_1_copia_5_46fa7077-a918-4a4d-84ce-4abe8e3d241c.avif',
    instagram: '@byhefestus'
  },
  {
    name: 'Beclot',
    photo: '/lojas-parceiras/logo_beclot_C58nXx.png',
    instagram: '@beclotwear'
  },
  {
    name: 'ELEGANCY STORE',
    photo: '/lojas-parceiras/elegancy.png',
    instagram: '@elegancy.perfumes'
  },
]

const methodologyCards = [
  {
    title: 'Escolha seu plano',
    description:
      'Nossa equipe fará uma entrevista inicial para entender como funciona sua operação e demonstrar as oportunidades que temos para o teu negócio.',
    icon: '/choose-video.svg'
  },
  {
    title: 'Setup Inicial',
    description:
    'Após você escolher seu plano e fecharmos negócio, nossa equipe fará uma reunião inicial de onboarding para entender melhor a sua operação. Criaremos um diagnostico extremamente detalhado, identificando como a IA e as automações irão se comportar e então desenvolvemos sua automação.',
    icon: '/answer.svg'
  },
  {
    title: 'Integração e estratégia',
    description:
      'Integraremos as automações dentro dos processos de sua empresa e treinamos sua equipe de suporte. Ajustaremos continuamente seus agentes de IA para atender as necessidades especificas. Após esse período, sua operação estará otimizada e pronta para alcançar resultados que nunca imaginou antes.',
    icon: '/video-delivery.svg'
  },
]


export default function Home() {
  return (
    <div className="container relative pl-0 pr-0">
      <Hero />
      <WhatsAppButton />
      <BenefitsSection />
      <AboutSection />
      <MethodologySection methodologyCards={methodologyCards} />
      <PartnersSection />
      <ClientsSection influencers={influencers} />
      <PlansSection title="<strong>Planos</strong> disponíveis." pix={false} fb={false}/>
      <ContactSection />
    </div>
  );
}
