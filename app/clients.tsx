"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Influencer {
  name: string;
  photo: string;
  instagram: string;
}

interface ClientsSectionProps {
  influencers: Influencer[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ influencers }) => {
  return (
    <section
      id="embaixadores"
      className="py-16 flex flex-col items-center w-full"
    >
      <div className="container text-center md:px-36">
        <h2 className="text-white font-normal text-[clamp(20px,_7vw,_40px)] xs:text-[40px] text-center">
          As empresas parceiras da{" "}
          <span className="text-[#C4AC68] font-bold">Fx AI</span>
        </h2>
        <p className="opacity-70 mb-12">
          Confiado por clientes de vários setores.
        </p>

        <div className="relative px-8 md:px-12">
          <Carousel
            orientation="horizontal"
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {influencers.map((influencer, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href={
                      `https://www.instagram.com/` +
                      influencer.instagram.replace("@", "")
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={128}
                      height={128}
                      src={influencer.photo}
                      alt={influencer.name}
                      className="rounded-full w-32 h-32 p-1 mx-auto border-2 border-opacity-20 border-[#C4AC68] hover:border-opacity-40 transition-all duration-300"
                    />
                    <p className="mt-2 text-center font-medium opacity-80">
                      {influencer.name}
                    </p>
                    <p className="mt-2 text-center font-medium opacity-60">
                      {influencer.instagram}
                    </p>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute left-0 right-0 flex justify-between top-1/2 transform -translate-y-1/2 z-10">
              <CarouselPrevious className="relative left-0 md:-left-6 transform translate-y-0 opacity-70 hover:opacity-100" />
              <CarouselNext className="relative right-0 md:-right-6 transform translate-y-0 opacity-70 hover:opacity-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;