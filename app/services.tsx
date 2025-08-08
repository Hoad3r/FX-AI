"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ServicesSection() {
  const services = [
    {
      title: "Chatbots IA",
      description: "Automatize seu atendimento ao cliente com chatbots inteligentes que entendem perguntas complexas e respondem naturalmente.",
      icon: "/robot.png",
      detail: "Nossos chatbots utilizam tecnologia avançada de IA para oferecer atendimento personalizado 24/7, reduzir tempo de resposta e garantir uma experiência excepcional aos seus clientes."
    },
    {
      title: "IA de SDR",
      description: "Potencialize suas vendas com agentes de IA que identificam leads qualificados e realizam o primeiro contato de forma eficiente.",
      icon: "/carbon--chart-custom.png",
      detail: "Nossa solução de IA para SDR (Sales Development Representative) automatiza a prospecção, qualificação e follow-up de leads, aumentando significativamente a produtividade da sua equipe de vendas."
    },
    {
      title: "IA de Suporte",
      description: "Ofereça suporte técnico instantâneo e personalizado através de agentes de IA treinados especificamente para resolver problemas do seu setor.",
      icon: "/fluent--person-suport-32-light.png",
      detail: "Sistemas inteligentes que aprendem continuamente com cada interação, solucionando dúvidas técnicas, realizando troubleshooting e escalando apenas casos realmente complexos para sua equipe humana."
    },
    {
      title: "Criação e Integração de CRM",
      description: "Implantamos e integramos sistemas de CRM personalizados que se comunicam perfeitamente com suas ferramentas existentes.",
      icon: "/rocket.png",
      detail: "Desenvolvemos soluções de CRM sob medida, garantindo a centralização de dados de clientes, automação de tarefas administrativas e insights valiosos para tomada de decisões estratégicas."
    },
    {
      title: "Automações de Marketing",
      description: "Crie campanhas personalizadas e segmentadas que se adaptam ao comportamento dos seus clientes em tempo real.",
      icon: "/bullhorn.png",
      detail: "Nossas automações de marketing utilizam IA para analisar comportamentos, prever tendências e entregar a mensagem certa, no momento certo, aumentando conversões e fidelização."
    },
    {
      title: "Criação de Dashboards",
      description: "Visualize dados complexos de forma clara e intuitiva com dashboards personalizados para monitoramento em tempo real.",
      icon: "/dashboard.png",
      detail: "Transformamos seus dados em insights acionáveis através de dashboards interativos que permitem acompanhar KPIs cruciais, identificar tendências e tomar decisões baseadas em dados."
    }
  ];

  return (
    <section id="servicos" className="w-full py-24 bg-[#0c0a09]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Descubra Nossos </span>
            <span className="text-[#C4AC68] font-bold">Serviços</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Desenvolvemos dezenas de aplicações com IA para negócios ao redor do mundo
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto overflow-hidden px-4 md:px-8">
          <Carousel
            orientation="horizontal"
            opts={{
              align: "center",
              loop: true,
              containScroll: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-3/4 lg:basis-2/3">
                  <div 
                    className="h-[500px] flex flex-col rounded-xl overflow-hidden border border-[#C4AC68]/20 bg-[#0c0a09]/95 transition-all duration-300 hover:border-[#C4AC68]/40 hover:shadow-[0_0_15px_rgba(196,172,104,0.15)]"
                  >
                    <div className="flex-1 p-4 md:p-8 flex flex-col">
                      <div className="flex items-center justify-center mb-4 md:mb-8">
                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-4 rounded-full bg-[#C4AC68]/10">
                          <Image 
                            src={service.icon} 
                            alt={service.title}
                            width={32}
                            height={32}
                            className="md:w-10 md:h-10"
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-5 text-center px-2 md:px-4">{service.title}</h3>
                      
                      <p className="text-white/80 mb-4 md:mb-6 text-center text-sm md:text-lg px-3 md:px-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <p className="text-white/60 mb-6 md:mb-8 text-center text-xs md:text-sm px-4 md:px-8 leading-relaxed">
                        {service.detail}
                      </p>
                      
                      <div className="mt-auto text-center pb-4 md:pb-0">
                        <button 
                          onClick={() => {
                            const message = `Olá Fx AI! Gostaria de saber mais sobre ${service.title}.`;
                            const encodedMessage = encodeURIComponent(message);
                            window.open(`https://wa.me/5583989027272/?text=${encodedMessage}`, '_blank');
                          }}
                          className="inline-flex justify-center items-center px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium text-white bg-[#C4AC68] hover:bg-[#d4bc78] rounded-md transition-all duration-300 ease-in-out"
                        >
                          Saber mais
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Os botões de navegação devem estar dentro do componente Carousel mas podem ser estilizados para parecer que estão nas laterais */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 z-10">
              <CarouselPrevious className="bg-[#C4AC68]/80 hover:bg-[#C4AC68] border-none text-white" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-12 z-10">
              <CarouselNext className="bg-[#C4AC68]/80 hover:bg-[#C4AC68] border-none text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}