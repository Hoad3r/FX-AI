"use client";

import React, { useEffect } from "react";
import LandingBackground from "./background";
import style from "./hero.module.css";

export function Hero({ fb }: { fb?: boolean }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "5511944405779";
    //@ts-ignore
    window?.fbq("track", "Botao1");
    window.open(`https://wa.me/${phoneNumber}/?text=Olá%20Fx%20AI`, "_blank");
  };

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    //@ts-ignore
    if (window.Calendly) {
      //@ts-ignore
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/fxaicompany",
      });
    } else {
      console.error("Calendly script not loaded yet");
    }
  };

  return (
    <div className="font-sans w-full pb-16 pt-36 md:pb-24 lg:pb-32 md:pt-24 lg:pt-48 xl:pt-56 2xl:pt-64 flex justify-between gap-8 items-center flex-col relative z-0">
      <div className="w-full px-6 z-50 flex flex-col gap-5 text-left lg:gap-6">
        <div className="flex flex-col items-start justify-center gap-5">
          <LandingBackground />
          <h1
            className={`bg-gradient-to-b from-black to-[#555] dark:from-white dark:to-[#aaa] ${style.gradients_hero} ${style.text_balance} font-extrabold tracking-[-0.04em] leading-none text-[40px] md:text-5xl lg:text-[80px] max-w-lg md:max-w-xl lg:max-w-6xl text-left text-transparent pb-3`}
          >
            Fazemos agentes de IA trabalharem pra você!
          </h1>
          <p className="font-space-grotesk leading-snug dark:text-[#FFFFFFB2] text-[#000000a0] text-[20px] lg:text-xl max-w-md md:max-w-xl lg:max-w-[640px] text-left">
            Nossa missão é poupar seu tempo e potencializar suas vendas!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full justify-center md:justify-start">
          {fb ? (
            <a
              href="#planos"
              className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-white bg-[#C4AC68] hover:bg-[#d4bc78] rounded-md shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md w-full md:w-auto"
            >
              Veja nossos planos
            </a>
          ) : (
            <button
              onClick={openWhatsApp}
              className="inline-flex justify-center items-center px-9 py-3 text-base font-medium text-white bg-[#C4AC68] hover:bg-[#d4bc78] rounded-md shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md w-full md:w-auto"
            >
              Entrar em contato
            </button>
          )}

          <button
            onClick={openWhatsApp}
            className="inline-flex justify-center items-center px-8 py-3 text-base font-medium text-white bg-[#C4AC68] hover:bg-[#d4bc78] rounded-md shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md w-full md:w-auto"
          >
            Serviços
          </button>

          <button
            onClick={openCalendly}
            className="inline-flex justify-center items-center px-9 py-3 text-base font-medium text-white bg-[#C4AC68] hover:bg-[#d4bc78] rounded-md shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md w-full md:w-auto"
          >
            Agendar reunião
          </button>
        </div>
      </div>
    </div>
  );
}
