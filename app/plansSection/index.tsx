import ExperiencePlan from "./components/EssencialPlan"
import TestPlan from "./components/TestPlan"
import UnlimitedPlan from "./components/ProPlan"
import CardDetail from "./components/CardDetail"
import Image from "next/image"
import UnlimitedProPlan from "./components/UnlimitedProPlan"

interface PlansSectionProps {
  title: string
  pix: boolean
  fb: boolean
}

export default function PlansSection({ title, pix, fb }: PlansSectionProps) {
  return (
    <section
      id="planos"
      className="w-full pt-16 sm:px-6 max-w-[1200px] mx-auto flex flex-col"
    >
      <h2
        className="text-white font-normal text-[40px] text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      />



      <div
      className={`mx-auto flex sm:mt-4 sm:hidden items-center text-lg font-semibold text-white`}>
        <div className="relative w-[30px] h-[30px]">
          <Image
            src="checkmark.svg"
            fill
            className="object-contain fill-[#C4AC68]"
            alt="Checkmark for highlighting."
          />
        </div>

      </div>

      <span
        className="text-[clamp(16px,_3vw,_16px)] mt-4 sm:pt-1 mx-auto text-center text-lg font-black text-white flex items-center gap-1">
        Suporte Premium e Garantia de Satisfação.
      </span>

      <div className="flex w-full flex-col md:flex-row items-center justify-center gap-24 sm:gap-8 pb-9">
        <TestPlan pix={pix} fb={fb} />

        <ExperiencePlan pix={pix} fb={fb}/>

        <UnlimitedPlan pix={pix} fb={fb}/>

        {/*<UnlimitedProPlan pix={pix} fb={fb}/> */}
      </div>
    </section>
  )
}