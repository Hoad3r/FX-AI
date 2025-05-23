"use client";

import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const openWhatsApp = () => {
    const phoneNumber = '5511944405779';
    const message = 'Olá FX AI! Gostaria de falar com um especialista sobre soluções de IA para meu negócio.';
    const encodedMessage = encodeURIComponent(message);
    
    // Track event if fbq exists
    // @ts-ignore
    if (window?.fbq) {
      // @ts-ignore
      window.fbq('track', 'ContatoEspecialista');
    }
    
    window.open(`https://wa.me/${phoneNumber}/?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative w-full bg-[#0c0a09] py-16 lg:py-24 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C4AC68]/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#C4AC68]/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text content */}
          <div className="w-full lg:w-1/0.5 text-left">
            <div className="inline-block px-4 py-2 bg-[#C4AC68]/20 text-[#C4AC68] rounded-full text-sm font-medium mb-6">
              Buscando uma IA para o seu negócio?
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              O próximo passo da sua operação está aqui.
            </h1>
            
            <p className="text-white/80 text-lg mb-4 max-w-xl">
              Na Fx AI, somos especialistas em criar soluções de IA que revolucionam negócios. Com uma equipe dedicada e vasta experiência, desenvolvemos agentes de IA personalizados para atender às necessidades específicas de cada cliente.
            </p>
            <p className="text-white/80 text-lg mb-4 max-w-xl">
              Enquanto sua equipe foca em inovação e estratégias, nossos agentes trabalham para elevar sua eficiência e resultados. Temos certeza que somos a parceira estratégica ideal que sua empresa precisa para alcançar novos patamares e destacar seu posicionamento no mercado!
            </p>
            
            <div className="flex flex-col md:flex-row items-start justify-start gap-6 mb-8">

              
            <div className="flex items-start text-left">
              <Image
                src="/checkmark_small.svg"
                alt="Checkmark"
                width={24}
                height={24}
                className="mr-2"
              />
              <div>
                <span className="text-[#C4AC68] font-bold mr-2">+100</span>
                <span className="text-white/80 font-medium">Projetos Executados</span>
              </div>
            </div>

            <div className="flex items-start text-left">
              <Image
                src="/checkmark_small.svg"
                alt="Checkmark"
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
              <div>
                <span className="text-[#C4AC68] font-bold mr-2">+3 Anos</span>
                <span className="text-white/80 font-medium">de Experiência</span>
              </div>
            </div>

            <div className="flex items-start text-left">
              <Image
                src="/checkmark_small.svg"
                alt="Checkmark"
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
              <div>
                <span className="text-[#C4AC68] font-bold mr-2">Suporte</span>
                <span className="text-white/80 font-medium">contínuo da sua operação</span>
              </div>
            </div>
          </div>

            
            <button 
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C4AC68] hover:bg-[#d4bc78] text-white font-medium rounded-full transition-all duration-300 group"
            >
              <span>Falar com especialista</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-[630px]">
              <Image
                src="/specialist-image.png" 
                alt="Especialista FX.AI" 
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}