"use client";

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#C4AC68]/20">
      <button
        className="w-full py-4 px-5 flex justify-between items-center text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-white text-base md:text-lg font-medium">{question}</span>
        <span className="text-[#C4AC68] text-2xl">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 text-white/70">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FaqSection() {
  const faqItems = [
    {
      question: "O que é a Fx AI?",
      answer: "A Fx AI é uma agência especializada em Agentes de IA e Automações sem limites, que transforma desafios em oportunidades. Oferecemos soluções inteligentes para potencializar seu negócio através da inteligência artificial."
    },
    {
      question: "Quais serviços a Fx AI oferece?",
      answer: "Oferecemos diversos serviços centrados em IA, incluindo desenvolvimento de chatbots inteligentes, automação de processos, criação de agentes de IA personalizados e suporte técnico 24/7 para todas as nossas soluções implementadas."
    },
    {
      question: "Quem pode ser cliente?",
      answer: "Empresas de todos os tamanhos podem se beneficiar de nossas soluções. Atendemos desde pequenos empreendedores até grandes corporações que desejam otimizar processos, melhorar o atendimento ao cliente e aumentar a produtividade através da IA."
    },
    {
      question: "A Fx AI cria chatbots?",
      answer: "Sim! Desenvolvemos chatbots inteligentes alimentados por IA avançada, capazes de otimizar o atendimento ao cliente, reduzir custos operacionais e proporcionar uma experiência de usuário excepcional. Nossos chatbots são personalizados para as necessidades específicas de cada cliente."
    },
    {
      question: "Terei pessoas trabalhando no meu projeto?",
      answer: "Sim! Além das soluções de IA, contamos com uma equipe de especialistas que trabalham na implementação, treinamento, ajustes e suporte contínuo. Combinamos o melhor da tecnologia com expertise humana para garantir resultados excepcionais."
    },
    {
      question: "Quanto tempo leva o desenvolvimento?",
      answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Após o Diagnóstico inicial, fornecemos um cronograma detalhado. Tipicamente, soluções mais simples podem ser implementadas em algumas semanas, enquanto projetos mais complexos podem levar alguns meses."
    },
  ];

  return (
    <section id="faq" className="w-full py-16 bg-[#0c0a09]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-[#C4AC68]/20 text-[#C4AC68] text-sm font-medium rounded-full mb-4">
            PERGUNTAS E RESPOSTAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Talvez você possa estar com essas dúvidas
          </h2>
        </div>

        <div className="bg-[#0c0a09]/80 border border-[#C4AC68]/10 rounded-xl overflow-hidden">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}