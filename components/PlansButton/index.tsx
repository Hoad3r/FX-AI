"use client";
import Image from "next/image";
import { ReactNode } from "react";

type MarginType = number | string;

interface ButtonProps {
  background?: string;
  boxShadow?: string;
  children: ReactNode;
  hoverBackground?: string;
  image?: {
    alt: string;
    quality?: number;
    size: [number, number];
    url: string;
  };
  margin?: [MarginType, MarginType, MarginType, MarginType];
  padding?: [number, number];
  round?: boolean | string;
  url: string;
  onClick?: () => void;
}

export default function PlansButton({
  background = "#C4AC68",
  boxShadow,
  children,
  hoverBackground = "",
  image = {
    alt: "",
    quality: 10,
    size: [0, 0],
    url: "",
  },
  margin = [0, 0, 0, 0],
  padding = [8, 4],
  round = false,
  url = "",
  onClick,
}: ButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="prerender nopener noreferrer"
      onClick={(e) => {
        onClick && onClick();
      }}
      className={`flex gap-2 justify-center mx-auto mt-8 items-center  ${
        background && `bg-[${background}]`
      } ${
        hoverBackground && `hover:bg-[${hoverBackground}]`
      } font-bold w-fit h-fit ${
        round &&
        (typeof round === "string" ? `rounded-${round}` : "rounded-[50px]")
      } px-${padding[0]} py-${padding[1]} mt-${
        typeof margin[0] === "string" ? `[${margin[0]}]` : margin[0]
      } mr-${typeof margin[1] === "string" ? `[${margin[1]}]` : margin[1]} mb-${
        typeof margin[2] === "string" ? `[${margin[2]}]` : margin[2]
      } ml-${
        typeof margin[3] === "string" ? `[${margin[3]}]` : margin[3]
      } text-white ${
        boxShadow && `shadow-[${boxShadow}]`
      } active:[transform:_translateY(3px)]`}
    >
      {image.url && (
        <div className="relative w-fit h-fit">
          <Image
            src={image.url}
            alt={image.alt}
            width={image.size[0]}
            height={image.size[1]}
            quality={image.quality || 10}
            className="object-contain"
          />
        </div>
      )}
      {children}
    </a>
  );
}
