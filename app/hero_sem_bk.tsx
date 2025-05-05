"use client";

import React from "react";
import Link from "next/link";
import LandingBackground from "./background";

import style from "./hero.module.css";

export function Hero({fb}: {fb?: boolean}) {
  const openWhatsApp = () => {
    const phoneNumber = '558396834981';
    //@ts-ignore
    window?.fbq('track', 'Botao1');
    window.open(`https://wa.me/${phoneNumber}/?text=Olá%20AI%20FX`, '_blank');
};

  return (
    <div className="font-sans w-full pb-16 pt-36 md:pb-24 lg:pb-32 md:pt-24 lg:pt-48 xl:pt-56 2xl:pt-64 flex justify-between gap-8 items-center flex-col relative z-0">
      <div className="z-50 flex flex-col items-start justify-center gap-5 px-6 text-left lg:gap-6">
        <LandingBackground />
        <h1
          className={`bg-gradient-to-b from-black to-[#555] dark:from-white dark:to-[#aaa] ${style.gradients_hero} ${style.text_balance} font-extrabold tracking-[-0.04em] leading-none text-[40px] md:text-5xl lg:text-[80px] max-w-lg md:max-w-xl lg:max-w-6xl text-left text-transparent pb-3`}
        >
          Fazemos agentes de IA trabalharem pra você!
        </h1>
        <p className="font-space-grotesk leading-snug dark:text-[#FFFFFFB2] text-[#000000a0] text-[20px] lg:text-xl max-w-md md:max-w-xl lg:max-w-[640px] text-left">
        Somos um time de especialistas em IA e automações para ecommerce, nossa missão é poupar seu tempo e potencializar suas vendas!
        </p>
      </div>

      <div className="z-50 flex flex-row items-start w-full gap-5 px-6">
        <div className="flex flex-col w-full gap-3 md:!flex-row">
          <div className="relative w-full group">
          {fb ?
            
            <a href='#planos' className="text-left w-full block py-3 min-w-[120px] text-base font-medium no-underline text-white border-transparent bg-[#C4AC68] rounded md:leading-6 transition-all duration-300 ">
                Veja nossos planos
            </a>
          : 
            <button onClick={openWhatsApp} className="w-full min-w-[120px] text-base font-medium no-underline text-white border-transparent bg-[#C4AC68] rounded md:leading-6 transition-all duration-300 ">
              <Link className="block py-3" href="">
               Entrar em contato
              </Link>
            </button>
          }
            <div className="absolute bg-[#C4AC68] w-full h-full top-0 -z-10 rounded-full transition-all duration-300 blur-xl group-hover:opacity-70 opacity-0 gradients_translatingGlow__wxytK" />
          </div>
        </div>

          <div className="flex flex-col w-full gap-3 md:!flex-row">
            <div className="relative w-full group">
              <button onClick={openWhatsApp} className="w-full min-w-[120px] text-base font-medium no-underline text-white border-transparent bg-[#C4AC68] rounded md:leading-6 transition-all duration-300 ">
                <Link className="block py-3" href="">
                Seviços
                </Link>
              </button>
            
              <div className="absolute bg-[#C4AC68] w-full h-full top-0 -z-10 rounded-full transition-all duration-300 blur-xl group-hover:opacity-70 opacity-0 gradients_translatingGlow__wxytK" />
            </div>
          </div>

          <div className="flex flex-col w-full gap-3 md:!flex-row">
            <div className="relative w-full group">
              <button onClick={openWhatsApp} className="w-full min-w-[120px] text-base font-medium no-underline text-white border-transparent bg-[#C4AC68] rounded md:leading-6 transition-all duration-300 ">
                <Link className="block py-3" href="">
                Agendar reunião
                </Link>
              </button>
            
              <div className="absolute bg-[#C4AC68] w-full h-full top-0 -z-10 rounded-full transition-all duration-300 blur-xl group-hover:opacity-70 opacity-0 gradients_translatingGlow__wxytK" />
            </div>
        </div>
      </div>
    </div>
  );
}
