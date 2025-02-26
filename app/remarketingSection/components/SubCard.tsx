'use client'
import { ReactNode } from 'react'
import Button from '@/components/PlansButton'

interface SubCardProps {
  title: string
  value: string
  oldValue: string
  period: string
  url: string
  tag?: string
  discountPercentage?: string
  className?: string
  children?: ReactNode
  hasButton?: boolean
}

export default function SubCard({
  title,
  value,
  oldValue,
  period,
  url,
  tag,
  className,
  children,
  hasButton = true,
}: SubCardProps) {
  const valueInt = String(parseInt(value))
  const valueFloat = value.split(',')[1]

  const oldValueInt = String(parseInt(oldValue))
  const oldValueFloat = oldValue.split(',')[1]

  return (
    <div className="flex flex-col gap-8 max-w-[350px] h-full unlimited">
      {hasButton ? (
        <p
          className={
            tag
              ? `bg-[#E11D48] shadow-[0px_0px_58px_0px_#E11D48;] rounded-[50px] w-[60%] font-bold text-white mx-auto text-center shrink-0 basis-[40px] px-4 py-2`
              : 'basis-[40px] shrink-0 px-4 py-2 invisible'
          }
        >
          {tag}
        </p>
      ) : (
        <a
          href={url}
          className="hover:bg-[#e11d68] active:[transform:_translateY(3px)] bg-[#E11D48] shadow-[0px_0px_58px_0px_#E11D48;] rounded-[50px] w-[60%] font-bold text-white mx-auto text-center shrink-0 basis-[40px] px-4 py-4"
        >
          Resgatar Oferta
        </a>
      )}
      <div
        className={`${className} relative w-full grow-[1] bg-white/[0.05] rounded-default p-8 flex flex-col justify-between items-center border-solid shadow-[0px_13px_44px_0px_rgba(0,0,0,0.3);]`}
      >
        <div className="flex items-center flex-col whitespace-nowrap">
          <div className="flex items-center font-extrabold rounded-full absolute border-2 border-dotted border-[#e11d1d] bg-[#E11D48] w-16 h-16 left-[90%] bottom-[93%] p-4">
            20% <br></br>OFF
          </div>
          <h3 className="text-white font-normal text-[18px] sm:text-[24px] text-center leading-none">
            Plano
            <p className="text-white font-bold mt-2 sm:mt-0 text-[clamp(24px,_7.4vw,40px)] sm:text-[26px] leading-none">
              {title}
            </p>
          </h3>

          <div className="flex items-end gap-1">
          <span className="text-[#E11D48] p-2 font-bold text-lg">De:</span>
            <span className="text-[#E11D48] font-semibold line-through text-[clamp(24px,_5.5vw,_30px)] sm:text-[24px] flex mt-5">
              <span className="mr-2">R$</span>
              <span className="font-semibold text-[clamp(50px,_12vw,_70px)] sm:text-[40px] leading-none">
              {oldValueInt}
              </span>
              <span>,{oldValueFloat}</span>
            </span>
            <span className="text-lg text-white/[0.5] font-normal">
              {' '}
              / {period}
            </span>
          </div>

          <div className="flex items-end gap-1">
          <span className="text-white p-2 font-bold text-lg">Por:</span>
            <span className="text-white font-semibold text-[clamp(24px,_5.5vw,_30px)] sm:text-[30px] flex mt-5">
              <span className="mr-2">R$</span>
              <span className="font-extrabold text-[clamp(50px,_12vw,_70px)] sm:text-[70px] leading-none">
                {valueInt}
              </span>
              <span>,{valueFloat}</span>
            </span>
            <span className="text-lg text-white/[0.5] font-normal">
              {' '}
              / {period}
            </span>
          </div>

          

          <div className="mt-2 flex flex-col">{children}</div>
        </div>
        {hasButton && (
          <Button
            onClick={() => {
              // @ts-ignore
              window?.fbq('track', `InitiateCheckout ${title}`)
            }}
            background="#E11D48"
            boxShadow=""
            hoverBackground="#961a35"
            margin={[8, 0, 0, 0]}
            round
            url={url}
          >
            Escolher plano
          </Button>
        )}
      </div>
    </div>
  )
}