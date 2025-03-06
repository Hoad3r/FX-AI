import ExperiencePlan from "./components/ExperiencePlan"
import TestPlan from "./components/TestPlan"
import UnlimitedPlan from "./components/UnlimitedPlan"
import UnlimitedProPlan from "./components/UnlimitedProPlan"
import CardDetail from "./components/CardDetail"
import Image from "next/image"

interface BlackSectionProps {
  title: string | React.ReactNode;
  pix: boolean
}

export default function BlackSection({ title, pix }: BlackSectionProps) {
  return (
    <section
      id="planos"
      className="w-full pt-32 sm:px-6 max-w-[1400px] mx-auto flex flex-col"
    >
      <h2
        className="text-white font-normal text-[40px] text-center"
      >
        {title}
      </h2>
      <CardDetail
        marginY={[3, 0]}
        extraStyles="mx-auto flex mt-8 sm:mt-4"
        textStyles="!text-lg !font-semibold !text-white"
      >
        Todos os planos com um SUPER desconto!
      </CardDetail>
{/* 
      <CardDetail
        marginY={[3, 0]}
        extraStyles="mx-auto hidden sm:mt-4 sm:flex"
        textStyles="!text-lg !font-semibold !text-white"
      >
      </CardDetail>

      <div
      className={`mx-auto flex sm:mt-4 sm:hidden items-center text-lg p-2 font-semibold text-white`}>
        <div className="relative w-[30px] h-[30px]">
          <Image
            src="checkmark.svg"
            fill
            className="object-contain fill-[#C4AC68]"
            alt="Checkmark for highlighting."
          />
        </div>
        <span
          className="text-[clamp(16px,_3vw,_16px)] mt-4 text-center text-lg font-semibold text-white flex items-center gap-1 sm:hidden">
        </span>
      </div> */}

      {/* <span
        className="text-[clamp(16px,_3vw,_16px)] mt-4 sm:pt-1 mx-auto text-center text-lg font-black text-white flex items-center gap-1">
        Garantia de Satisfação!
      </span> */}

      <div className="flex w-full flex-col md:flex-row items-center justify-center gap-24 sm:gap-8 pb-9">
        <UnlimitedPlan pix={pix} remarketing={true} />

        <UnlimitedProPlan pix={pix} remarketing={true} />
      </div>
    </section>
  )
}