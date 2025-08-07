"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ApplicationCases() {
  const [isEcommerceExpanded, setIsEcommerceExpanded] = useState(false);

  const toggleEcommercePlans = () => {
    setIsEcommerceExpanded(!isEcommerceExpanded);
  };

  const openWhatsApp = (planName: string) => {
    const phoneNumber = '5583989027272';
    const message = `Olá! Estou interessado no plano ${planName} para e-commerce/Dropshipping. Poderia me dar mais informações?`;
    const encodedMessage = encodeURIComponent(message);
    
    // @ts-ignore
    window?.fbq('track', 'LeadPlano');
    window.open(`https://wa.me/${phoneNumber}/?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="aplicacoes" className="w-full py-16 bg-[#0c0a09]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Cases de </span>
            <span className="text-[#C4AC68]">Aplicação</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Descubra como nossos agentes de IA podem revolucionar diferentes segmentos de negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Ecommerce/Dropshipping */}
          <div className="relative rounded-xl overflow-hidden border border-[#C4AC68]/20 bg-[#0c0a09]/95 transition-all duration-300 hover:border-[#C4AC68]/40 hover:shadow-[0_0_15px_rgba(196,172,104,0.15)]">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#C4AC68]">
                    <path d="M2 3H4.5L6.5 17H17.5L21.5 7H6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="15" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-white text-xl font-medium">AI E-commerce/Dropshipping</h3>
              </div>
              
              <p className="text-white/70 mb-6">
                Automatize seu ecommerce e impulsione suas vendas. Um Agente de IA otimizará descrições de produtos, atendimento ao cliente e gestão de estoque, elevando a experiência de compra e aumentando suas conversões. Temos planos sepeciais para operações de E-Commerce e Dropshipping, sendo nossa especialidade.
              </p>
              
              <div className="absolute bottom-0 right-0 p-4">
              <button 
                type="button"
                onClick={toggleEcommercePlans}
                className={`flex items-center text-[#C4AC68] hover:text-white transition-colors group ${isEcommerceExpanded ? 'md:block hidden' : ''}`}
              >
                <span className="mr-2">{isEcommerceExpanded ? 'Fechar planos' : 'Ver Planos'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isEcommerceExpanded ? 'rotate-180' : 'group-hover:translate-x-1'}`} viewBox="0 0 20 20" fill="currentColor">
                  {isEcommerceExpanded 
                    ? <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    : <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  }
                </svg>
              </button>
            </div>
            </div>
            
            {/* Planos expansíveis para dispositivos móveis - aparece logo abaixo do card de E-commerce */}
            {isEcommerceExpanded && (
              <div className="md:hidden p-6 pt-0 border-t border-[#C4AC68]/30 mt-6 animate-fadeIn">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-white"><br></br>Planos para E-commerce</h3>
                  <p className="text-[#C4AC68]/80">Escolha o plano ideal para sua loja online</p>
                </div>
                {/* Planos em formato de acordeão para mobile */}
                <div className="space-y-4">
                  {/* Plano Essencial */}
                  <div className="border border-[#C4AC68]/20 rounded-lg overflow-hidden">
                    <button 
                      type="button"
                      onClick={() => {}} // Apenas visual, não é um acordeão funcional
                      className="w-full bg-[#C4AC68]/10 p-4 text-left flex items-center justify-between"
                    >
                      <span className="text-white font-bold text-lg">Plano Essencial</span>
                      <svg className="w-5 h-5 text-[#C4AC68]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div className="p-4">
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Automação no ManyChat integrada ao WhatsApp.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Integração com Shopify e Yampi.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Sistema de rastreamento de pedidos automático.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Respostas automáticas para dúvidas frequentes.</span>
                        </li>
                      </ul>
                      <button 
                        type="button"
                        onClick={() => openWhatsApp('Essencial')}
                        className="w-full py-3 px-4 bg-[#C4AC68] hover:bg-[#d4bc78] text-white font-medium rounded-md transition-colors"
                      >
                        Mais Informações
                      </button>
                    </div>
                  </div>
                  
                  {/* Plano Pro */}
                  <div className="border-2 border-[#C4AC68] rounded-lg overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full bg-[#C4AC68] text-black text-center py-1 text-sm font-bold">
                      MAIS POPULAR
                    </div>
                    <button 
                      type="button"
                      onClick={() => {}} // Apenas visual
                      className="w-full bg-[#C4AC68]/20 p-4 pt-8 text-left flex items-center justify-between"
                    >
                      <span className="text-white font-bold text-lg mt-3">Plano Pro</span>
                      <svg className="w-5 h-5 text-[#C4AC68]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div className="p-4">
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Tudo do Plano Essencial +</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Agente de IA treinado para respostas personalizadas.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Atendimento inteligente, minimizando a necessidade de atendentes humanos.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Suporte humano apenas para casos complexos, como devoluções.</span>
                        </li>
                      </ul>
                      <button 
                        type="button"
                        onClick={() => openWhatsApp('Pro')}
                        className="w-full py-3 px-4 bg-[#C4AC68] hover:bg-[#d4bc78] text-white font-medium rounded-md transition-colors"
                      >
                        Mais Informações
                      </button>
                    </div>
                  </div>
                  
                  {/* Plano Premium */}
                  <div className="border border-[#C4AC68]/20 rounded-lg overflow-hidden">
                    <button 
                      type="button"
                      onClick={() => {}} // Apenas visual
                      className="w-full bg-[#C4AC68]/10 p-4 text-left flex items-center justify-between"
                    >
                      <span className="text-white font-bold text-lg mt-">Plano Premium</span>
                      <svg className="w-5 h-5 text-[#C4AC68]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div className="p-4">
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Tudo do Plano Pro +</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Integração completa com Instagram.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Respostas automatizadas para DMs.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">IA que interage com os clientes de forma natural, aumentando o engajamento.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-white/80">Estratégias para aumentar conversões diretamente no WhatsApp e Instagram.</span>
                        </li>
                      </ul>
                      <button 
                        type="button"
                        onClick={() => openWhatsApp('Premium')}
                        className="w-full py-3 px-4 bg-[#C4AC68] hover:bg-[#d4bc78] text-white font-medium rounded-md transition-colors"
                      >
                        Mais Informações
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Botão para fechar a seção expandida (versão mobile) */}
                <div className="mt-8 text-center">
                  <button 
                    type="button"
                    onClick={toggleEcommercePlans}
                    className="inline-flex justify-center items-center px-6 py-2 rounded-md bg-[#C4AC68]/20 text-white hover:bg-[#C4AC68]/30 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Fechar planos
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Card 2 - Imobiliária */}
          <div className="relative rounded-xl overflow-hidden border border-[#C4AC68]/20 bg-[#0c0a09]/95 transition-all duration-300 hover:border-[#C4AC68]/40 hover:shadow-[0_0_15px_rgba(196,172,104,0.15)]">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#C4AC68]">
                    <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white text-xl font-medium">AI Imobiliária</h3>
              </div>
              
              <p className="text-white/70 mb-6">
                Potencialize sua imobiliária com IA. Nosso Agente otimiza a captação de imóveis, qualifica leads e facilita o relacionamento com clientes, aumentando suas chances de fechar negócios.
              </p>
              
              <div className="absolute bottom-0 right-0 p-4">
                <button 
                  type="button"
                  onClick={() => {
                    const phoneNumber = '5583989027272';
                    const message = `Olá! Estou interessado nos planos da Fx AI para imobiliária. Poderia me dar mais informações?`;
                    const encodedMessage = encodeURIComponent(message);
                    
                    // @ts-ignore
                    window?.fbq('track', 'LeadImobiliaria');
                    window.open(`https://wa.me/${phoneNumber}/?text=${encodedMessage}`, '_blank');
                  }}
                  className="flex items-center text-[#C4AC68] hover:text-white transition-colors group"
                >
                  <span className="mr-2">Saiba mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Agência de Marketing */}
          <div className="relative rounded-xl overflow-hidden border border-[#C4AC68]/20 bg-[#0c0a09]/95 transition-all duration-300 hover:border-[#C4AC68]/40 hover:shadow-[0_0_15px_rgba(196,172,104,0.15)]">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#C4AC68]">
                    <path d="M16 8H8V16H16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 8C3 5.23858 5.23858 3 8 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 16C3 18.7614 5.23858 21 8 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3C18.7614 3 21 5.23858 21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 21C18.7614 21 21 18.7614 21 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white text-xl font-medium">AI Marketing</h3>
              </div>
              
              <p className="text-white/70 mb-6">
                Escale sua agência e entregue resultados superiores. Nosso Agente de IA atua como SDR e Closer para fechar contratos para sua agência de forma 100% automática.
              </p>
              
              <div className="absolute bottom-0 right-0 p-4">
                <button 
                  type="button"
                  onClick={() => {
                    const phoneNumber = '5583989027272';
                    const message = `Olá! Estou interessado nos planos da Fx AI para marketing. Poderia me dar mais informações?`;
                    const encodedMessage = encodeURIComponent(message);
                    
                    // @ts-ignore
                    window?.fbq('track', 'LeadMarketing');
                    window.open(`https://wa.me/${phoneNumber}/?text=${encodedMessage}`, '_blank');
                  }}
                  className="flex items-center text-[#C4AC68] hover:text-white transition-colors group"
                >
                  <span className="mr-2">Saiba mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Seção expandida de planos para desktop - aparece abaixo de todos os cards */}
        {isEcommerceExpanded && (
          <div className="hidden md:block mt-12 bg-[#0c0a09]/80 border border-[#C4AC68]/20 rounded-xl p-6 animate-fadeIn">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-white">Planos para E-commerce</h3>
              <p className="text-[#C4AC68]/80">Escolha o plano ideal para sua loja online</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plano Essencial */}
              <div className="rounded-xl overflow-hidden border border-[#C4AC68]/20 bg-[#0c0a09]/95 transition-all duration-300 hover:border-[#C4AC68]/40 hover:shadow-[0_0_15px_rgba(196,172,104,0.15)]">
                <div className="p-6">
                  <div className="bg-[#C4AC68]/10 rounded-lg p-4 text-center mb-6">
                    <h3 className="text-white text-2xl font-bold">Plano Essencial</h3>
                    <p className="text-[#C4AC68]">Para quem está começando</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <span className="text-white">Entre em contato</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Automação no ManyChat integrada ao WhatsApp.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Integração com Shopify e Yampi.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Sistema de rastreamento de pedidos automático.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Respostas automáticas para dúvidas frequentes.</span>
                    </li>
                  </ul>
                  
                  <button 
                    type="button"
                    onClick={() => openWhatsApp('Essencial')}
                    className="w-full py-3 px-4 bg-[#C4AC68] hover:bg-[#d4bc78] text-white font-medium rounded-md transition-colors"
                  >
                    Mais Informações
                  </button>
                </div>
              </div>
              
              {/* Plano Pro (Destacado) */}
              <div className="rounded-xl overflow-hidden border-2 border-[#C4AC68] bg-[#0c0a09]/95 shadow-[0_0_20px_rgba(196,172,104,0.3)] transform scale-105 relative z-10" id="plano-ecommerce">
                <div className="absolute top-0 left-0 w-full bg-[#C4AC68] text-black text-center py-2 font-bold">
                  MAIS POPULAR
                </div>
                <div className="p-6 pt-12">
                  <div className="bg-[#C4AC68]/20 rounded-lg p-4 text-center mb-6">
                    <h3 className="text-white text-2xl font-bold">Plano Pro</h3>
                    <p className="text-[#C4AC68]">Especializado para vendas online</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <span className="text-white">Entre em contato</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Tudo do Plano Essencial +</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Agente de IA treinado para respostas personalizadas.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Atendimento inteligente, minimizando a necessidade de atendentes humanos.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Suporte humano apenas para casos complexos, como devoluções.</span>
                    </li>
                  </ul>
                  
                  <button 
                    type="button"
                    onClick={() => openWhatsApp('Pro')}
                    className="w-full py-3 px-4 bg-[#C4AC68] hover:bg-[#d4bc78] text-white font-medium rounded-md transition-colors"
                  >
                    Mais Informações
                  </button>
                </div>
              </div>
              
              {/* Plano Premium */}
              <div className="rounded-xl overflow-hidden border border-[#C4AC68]/20 bg-[#0c0a09]/95 transition-all duration-300 hover:border-[#C4AC68]/40 hover:shadow-[0_0_15px_rgba(196,172,104,0.15)]">
                <div className="p-6">
                  <div className="bg-[#C4AC68]/10 rounded-lg p-4 text-center mb-6">
                    <h3 className="text-white text-2xl font-bold">Plano Premium</h3>
                    <p className="text-[#C4AC68]">Para grandes operações</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <span className="text-white">Entre em contato</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Tudo do Plano Pro +</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Integração completa com Instagram.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Respostas automatizadas para DMs.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">IA que interage com os clientes de forma natural, aumentando o engajamento.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#C4AC68] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white/80">Estratégias para aumentar conversões diretamente no WhatsApp e Instagram.</span>
                    </li>
                  </ul>
                  
                  <button 
                    type="button"
                    onClick={() => openWhatsApp('Premium')}
                    className="w-full py-3 px-4 bg-[#C4AC68] hover:bg-[#d4bc78] text-white font-medium rounded-md transition-colors"
                  >
                    Mais Informações
                  </button>
                </div>
              </div>
            </div>
            
            {/* Botão para fechar a seção expandida (versão desktop) */}
            <div className="mt-8 text-center">
              <button 
                type="button"
                onClick={toggleEcommercePlans}
                className="inline-flex justify-center items-center px-6 py-2 rounded-md bg-[#C4AC68]/20 text-white hover:bg-[#C4AC68]/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Fechar planos
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Estilo para a animação de fade-in */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}