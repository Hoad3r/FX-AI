"use client";
import { ReactNode } from "react";
import Button from "@/components/PlansButton";

interface SubCardProps {
  title: string;
  value: string;
  period: string;
  url: string;
  tag?: string;
  tagPlus?: string;
  discountPercentage?: string;
  className?: string;
  children?: ReactNode;
  hasButton?: boolean;
}

export default function SubCard({
  title,
  value,
  period,
  url,
  tag,
  tagPlus,
  className,
  children,
  hasButton = true,
}: SubCardProps) {
  const valueInt = String(parseInt(value));
  const valueFloat = value.split(",")[1];

  return (
    <div className="flex flex-col gap-8 max-w-[550px] h-full unlimited">
      {hasButton ? (
        <>
          <p
            className={
              tagPlus
                ? `bg-[#C4AC68] shadow-[0px_0px_58px_0px_#C4AC68;] rounded-[50px] w-[60%] font-bold text-white mx-auto text-center shrink-0 basis-[40px] px-4 py-2`
                : "basis-[40px] shrink-0 px-4 py-2 invisible"
            }
          >
            {tagPlus}
          </p>
          <p
            className={
              tag
                ? `bg-[#C4AC68] shadow-[0px_0px_58px_0px_#C4AC68;] rounded-[50px] w-[60%] font-bold text-white mx-auto text-center shrink-0 basis-[40px] px-4 py-2`
                : "basis-[40px] shrink-0 px-4 py-2 invisible"
            }
          >
            {tag}
          </p>
        </>
      ) : (
        <a
          href={url}
          className="hover:bg-[#C4AC68] active:[transform:_translateY(3px)] bg-[#C4AC68] shadow-[0px_0px_58px_0px_#C4AC68;] rounded-[50px] w-[60%] font-bold text-white mx-auto text-center shrink-0 basis-[40px] px-4 py-4"
        >
          Resgatar Oferta
        </a>
      )}
      <div
        className={`${className} relative w-full grow-[1] bg-white/[0.05] rounded-default p-8 flex flex-col justify-between items-center border-solid shadow-[0px_13px_44px_0px_rgba(0,0,0,0.3);]`}
      >
        <div className="flex items-center flex-col whitespace-nowrap">
          <h3 className="text-white font-normal text-[18px] sm:text-[24px] text-center leading-none">
            Plano
            <p className="text-white font-bold mt-2 sm:mt-0 text-[clamp(24px,_7.4vw,40px)] sm:text-[26px] leading-none">
              {title}
            </p>
          </h3>
          {/* <div className="flex items-end gap-1">
            <span className="text-white font-semibold text-[clamp(24px,_5.5vw,_30px)] sm:text-[30px] flex mt-5">
              <span className="mr-2">R$</span>
              <span className="font-extrabold text-[clamp(50px,_12vw,_70px)] sm:text-[70px] leading-none">
                {valueInt}
              </span>
              <span>,{valueFloat}</span>
            </span>
            <span className="text-lg text-white/[0.5] font-normal">
              {" "}
              / {period}
            </span>
          </div> */}
          <div className="mt-2 flex flex-col">{children}</div>
        </div>
        {hasButton && (
          <Button
            onClick={() => {
              // @ts-ignore
              window?.fbq("track", `InitiateCheckout ${title}`);
            }}
            background="#C4AC68"
            boxShadow=""
            hoverBackground="#C4AC68"
            margin={[8, 0, 0, 0]}
            round
            url={url}
          >
            Escolher plano
          </Button>
        )}
      </div>
    </div>
  );
}
