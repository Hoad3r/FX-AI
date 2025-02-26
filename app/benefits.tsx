import React from "react";
import cn from "classnames";
import styles from "./benefits.module.css";
import Image from "next/image";

const BenefitsSection: React.FC = () => {
  return (
    <section
      id="beneficios"
      className="py-12 flex flex-col justify-center w-full"
    >
      <div className="flex flex-col lg:flex-row pt-4 w-full items-center">
        <h1 className="font-bold w-full text-center lg:text-center text-3xl md:text-5xl pt-8 lg:pt-0 px-6 lg:px-24 text-wrap-balance">
        Cansado de responder sempre as mesmas respostas dos seus clientes?
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row pb-4 w-full items-center ">
        <div className="flex flex-col lg:flex-row pt-6 w-full items-center">
          <div
            className={cn(
              styles.conic,
              "w-full lg:w-1/2 h-full sm:h-80 text-base p-6 min-h-[300px] min-w-[300px]"
            )}
          >
            <Image
              src="/rocket.png"
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 mb-2"
            />
            <h2 className="font-bold text-lg mb-3">Agentes Escaláveis</h2>
            <p className="text-lg opacity-80 pb-1">
              ✓ Adapte seus Agentes IA às necessidades em constante evolução do seu negócio.
            </p>
          </div>
          <div
            className={cn(
              styles.conic,
              "w-full lg:w-1/2 h-full sm:h-80 text-base p-6 min-h-[300px] min-w-[300px]"
            )}
          >
            <Image
              src="/carbon--chart-custom.png"
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 mb-2"
            />
            <h2 className="font-bold text-lg mb-3">Flexibilidade</h2>
            <p className="text-lg opacity-80 pb-1">
              ✓ Customizamos Agentes IA para se ajustarem às necessidades específicas das operações do seu negócio.
            </p>
          </div>
          <div
            className={cn(
              styles.conic,
              "w-full lg:w-1/2 h-full sm:h-80 text-base p-6 min-h-[300px] min-w-[300px]"
            )}
          >
            <Image
              // src="/cap.png"
              src="/robot.png"

              width={32}
              height={32}
              alt=""
              className="w-8 h-8 mb-2"
            />
            <h2 className="font-bold text-lg mb-3">Agentes IA</h2>
            <p className="text-lg opacity-80 pb-1">
              ✓ Implemente IA nos setores-chave do seu negócio, otimizando processos e aumentando a eficiência.
            </p>

          </div>
          <div
            className={cn(
              styles.conic,
              "w-full lg:w-1/2 h-full sm:h-80 text-base p-6 min-h-[300px] min-w-[300px]"
            )}
          >
            <Image
              src="/fluent--person-suport-32-light.png"
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 mb-2"
            />
            <h2 className="font-bold text-lg mb-3">Suporte 24/7</h2>
            <p className="text-lg opacity-80 pb-1">
              ✓ Surpreenda seus clientes com respostas rápidas e precisas, sem limites de horário.
            </p>

          </div>
        </div>
      </div>


    </section>
  );
};

export default BenefitsSection;
