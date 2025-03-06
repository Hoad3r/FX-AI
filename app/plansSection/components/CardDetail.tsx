import { ReactNode } from "react";
import Image from "next/image";

interface CardDetailProps {
  children: ReactNode;
  extraStyles?: string;
  marginY?: [number, number];
  textStyles?: string;
}

export default function CardDetail({
  children,
  extraStyles,
  marginY = [0, 0],
  textStyles,
}: CardDetailProps) {
  return (
    <div
      className={`flex items-start mt-${marginY[0]} mb-${marginY[1]} gap-1 ${extraStyles}`}
    >
      <div className="relative w-[13px] h-[13px] mt-1">
        <Image
          src="checkmark.svg"
          fill
          className="object-contain fill-[#C4AC68]"
          alt="Checkmark for highlighting."
        />
      </div>
      <span
        className={`text-[clamp(12px,_3vw,_16px)] sm:text-[14px] font-light text-left text-white/[0.5] flex flex-col items-start gap-1 ${textStyles}`}
        dangerouslySetInnerHTML={{ __html: String(children).replace(/\n/g, '<br>') }}
      ></span>
    </div>
  );
}
