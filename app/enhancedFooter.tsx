"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    // Carregar script do Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Carregar CSS do Calendly
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Limpar ao desmontar
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <footer className="w-full bg-[#0c0a09] text-white/70 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          {/* Navegação */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="hover:text-[#C4AC68] transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-[#C4AC68] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    // @ts-ignore
                    if (window.Calendly) {
                      // @ts-ignore
                      window.Calendly.initPopupWidget({
                        url: "https://calendly.com/fxaicompany",
                      });
                    } else {
                      console.error("Calendly script not loaded yet");
                    }
                  }}
                  className="hover:text-[#C4AC68] transition-colors"
                >
                  Agendar reunião
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#C4AC68] transition-colors">
                  Perguntas frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li className="text-white/70">Fx AI Ltda</li>
            </ul>
            
            <h3 className="text-white text-lg font-medium mt-6 mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/agenciafx.ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C4AC68]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://wa.me/5583989027272" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C4AC68]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Endereço</h3>
            <address className="not-italic text-white/70">
              <p>São Paulo, SP</p>
              <p>Brasil</p>
            </address>
            
            <h3 className="text-white text-lg font-medium mt-6 mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:fxaicompany@gmail.com" className="hover:text-[#C4AC68] transition-colors">
                fxaicompany@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5583989027272" className="hover:text-[#C4AC68] transition-colors">
                  +55 11 94440-5779
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">Quer receber nossas novidades diretamente no seu e-mail?</p>
            
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Digite aqui o seu e-mail" 
                  className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-md text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#C4AC68]"
                  required
                />
              </div>
              <div>
                <p className="text-white/40 text-xs mt-2">
                  Ao me inscrever eu aceito os <a href="#" className="text-[#C4AC68] hover:underline">Termos de Uso</a> e a{" "}
                  <a href="#" className="text-[#C4AC68] hover:underline">Política de Privacidade</a> da Fx AI.
                </p>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-[#C4AC68] hover:bg-[#d4bc78] text-white font-medium rounded-md transition-colors"
              >
                Quero receber
              </button>
            </form>
          </div>
        </div>

        {/* Voltar para o topo */}
        <div className="text-right mb-6">
          <a 
            href="#" 
            className="inline-flex items-center text-white hover:text-[#C4AC68] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            VOLTAR PARA O TOPO ↑
          </a>
        </div>

        {/* Linha divisória */}
        <hr className="border-white/10 mb-6" />

        {/* Copyright */}
        <div className="text-white/40 text-sm">
          <p className="mb-2">IMPORTANTE: © {currentYear} Fx AI. Todos os direitos reservados. Este site e todo o seu conteúdo, incluindo textos e identidade visual, são protegidos por leis de propriedade intelectual.</p>
          <p>Qualquer reprodução, plágio ou uso indevido, total ou parcial, sem autorização expressa, pode acarretar medidas legais, incluindo notificações extrajudiciais, remoção forçada e responsabilização civil e criminal.</p>
        </div>
      </div>
    </footer>
  );
}