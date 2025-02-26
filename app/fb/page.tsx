import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import AboutSection from "../about";
import BenefitsSection from "../benefits";
import ClientsSection from "../clients";
import PartnersSection from "../partnersSection";
import MethodologySection from "../methodology";
import LandingBackground from "../background";
import style from '../hero.module.css'
import { Hero } from "../hero";
import ContactSection from "../contact";
import WhatsAppButton from "../whats";
import PlansSection from "../plansSection/";

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
    title: 'Escolha seu produto',
    description:
      'Selecione seu produto e inclua quaisquer complementos extras que desejar. Envie todas as informações para nós e fazemos o resto!',
    icon: '/choose-video.svg'
  },
  {
    title: 'Responda algumas perguntas',
    description:
      'Você receberá o convite para um grupo com nossa equipe e ali preencher o formulário de envio e fornecer as informações necessárias.',
    icon: '/answer.svg'
  },
  {
    title: 'Criativos e Landing Pages entregues',
    description:
      'Assim que terminarmos, você receberá uma prévia da arte para você avaliar e enviaremos o seu pedido pelo Drive.',
    icon: '/video-delivery.svg'
  },
]

export default function Home() {
  return (
    <div className="container relative">
      <Hero fb />
      <WhatsAppButton />
      <BenefitsSection />
      <AboutSection />
      <MethodologySection methodologyCards={methodologyCards} />
      <PartnersSection />
      <ClientsSection influencers={influencers} />
      <PlansSection title="<strong>Planos</strong> disponíveis." pix={false} fb />
      <ContactSection />
    </div>
  );
}
