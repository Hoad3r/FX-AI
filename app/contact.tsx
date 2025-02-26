"use client"

import React from 'react'
import Link from 'next/link'

const ContactSection: React.FC = () => {
  const openWhatsApp = () => {
      const phoneNumber = '558396834981';
      //@ts-ignore
      window?.fbq('track', 'Botao1');
      window.open(`https://wa.me/${phoneNumber}/?text=Olá%20AI%20FX`, '_blank');
  };
  return (
    <section
      id="contato"
      className="flex flex-col items-center justify-center w-full pb-6"
    >
      <div className="gap-6 text-center flex flex-col lg:mb-16 h-auto mt-10 md:mt-24 lg:mt-32 items-center justify-center">
        <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl w-3/4">
        A melhor opção para quem quer vender no automático nos dois principais canais de atendimento e conversão! Quer saber qual plano é ideal para o seu negócio? Entre em contato agora e automatize seu atendimento com IA!
        </h1>
        <button onClick={openWhatsApp} className="max-w-[250px] w-full min-w-[120px] text-base font-medium no-underline text-white border-transparent bg-[#C4AC68] rounded md:leading-6 transition-all duration-300 ">
            <Link className="block py-3" href="">
            Entrar em contato
            </Link>
        </button>
      </div>
    </section>
  )
}

export default ContactSection