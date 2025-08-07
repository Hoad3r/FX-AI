"use client"

import React from 'react'
import Link from 'next/link'

const ContactSection: React.FC = () => {
  const openWhatsApp = () => {
      const phoneNumber = '5583989027272';
      //@ts-ignore
      window?.fbq('track', 'Botao1');
      window.open(`https://wa.me/${phoneNumber}/?text=Olá%20Fx%20AI`, '_blank');
  };
  return (
    <section
      id="contato"
      className="flex flex-col items-center justify-center w-full pb-6"
    >
      <div className="gap-6 text-center flex flex-col lg:mb-16 h-auto mt-10 md:mt-24 lg:mt-32 items-center justify-center">
        <h1 className="font-bold font-medium text-2xl md:text-3xl lg:text-4xl w-3/4">
        Quer saber qual plano é ideal para o seu negócio?
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl w-3/4 font-normal text-gray-300">
        A melhor opção para quem quer vender no automático nos dois principais canais de atendimento e conversão!
    </h2>
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