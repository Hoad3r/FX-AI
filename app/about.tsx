import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="flex flex-col lg:flex-row items-center w-full py-12 pb-24"
    >
      <div className="gap-6 flex flex-col lg:w-1/2 px-6 lg:px-24 justify-center text-center md:text-left">
        <h1 className="font-bold text-4xl lg:text-5xl">Sobre nós</h1>
        <p className="opacity-100 text-xl text-justify mt-4 md:w-4/5 lg:w-full text-wrap-balance">
          A <span className='text-[#C4AC68] font-bold'>AI FX</span> é uma agência especializada em 
          <span className='text-[#C4AC68] font-bold'> Agentes de IA </span> e <span className='text-[#C4AC68] font-bold'>Automações </span>
          sem limites, que transforma desafios em oportunidades.
        </p>
        <p className="opacity-100 text-xl text-justify mt-4 md:w-4/5 lg:w-full text-wrap-balance">
          Oferecemos soluções <span className='text-[#C4AC68] font-bold'>inteligentes</span> que <span className='text-[#C4AC68] font-bold'>multiplicam</span> a produtividade, 
          <span className='text-[#C4AC68] font-bold'> otimizam</span> processos, <span className='text-[#C4AC68] font-bold'>melhoram</span> o atendimento e suporte, 
          <span className='text-[#C4AC68] font-bold'> eliminam</span>  erros e <span className='text-[#C4AC68] font-bold'>reduzem</span> custos. Enquanto sua equipe foca em <span className='text-[#C4AC68] font-bold'>inovação</span> e <span className='text-[#C4AC68] font-bold'>estratégias</span>, nossos agentes trabalham para elevar 
        sua <span className='text-[#C4AC68] font-bold'>eficiência</span> e <span className='text-[#C4AC68] font-bold'>resultados</span>.
        Temos certeza que somos a parceira estratégica <span className='text-[#C4AC68] font-bold'>ideal</span> que sua empresa precisa para alcançar novos patamares e destacar seu 
        posicionamento no mercado!
        </p>

      </div>

      <div className="gap-2 flex flex-col w-full px-6 lg:w-1/2 items-start justify-between pt-4 pl-0 pr-0">
        <div className="flex flex-row items-center container pl-0">
          <img
            src="checkmark_small.svg"
            alt="Checkmark for highlighting."
            className="p-3"
          />

          <h2 className="opacity-100 text-[#C4AC68] text-3xl md:text-3xl font-black p-4 pb-5">
          +100
          </h2>
          <h2 className="opacity-90 font-bold sm:text-xl md:text-2xl">
          Projetos Executados
          </h2>
        </div>
        <div className="flex flex-row items-center container pl-0">
          <img
            src="checkmark_small.svg"
            alt="Checkmark for highlighting."
            className="p-3"
          />

          <h2 className="opacity-100 text-[#C4AC68] text-3xl md:text-3xl font-black p-4 pb-5">
          +3 Anos
          </h2>
          <h2 className="opacity-90 font-bold sm:text-xl md:text-2xl">
          de Experiência
          </h2>
        </div>
        <div className="flex flex-row items-center container pl-0">
          <img
            src="checkmark_small.svg"
            alt="Checkmark for highlighting."
            className="p-3"
          />

          <h2 className="opacity-100 text-[#C4AC68] text-3xl md:text-3xl font-black p-4 pb-5">
          Suporte
          </h2>
          <h2 className="opacity-90 font-bold sm:text-xl md:text-2xl">
          contínuo da sua operação
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
