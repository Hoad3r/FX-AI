import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface MethodologyCard {
  title: string
  description: string
  icon: string
}

interface MethodologySectionProps {
  methodologyCards: MethodologyCard[]
}

const MethodologySection: React.FC<MethodologySectionProps> = ({
  methodologyCards
}) => {
  return (
    <section
      id="metodologia"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="gap-6 text-center flex flex-col h-auto items-center justify-center py-12 md:px-24">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl px-6 md:px-12">
          Como funciona?
        </h1>

        <div className="p-4 flex justify-center text-left mt-6 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {methodologyCards.map((card) => (
              <div
                key={card.title}
                className=""
              >
                <Card className='w-full max-h-[750px] sm:h-full flex flex-col justify-between'>
                  <CardHeader className='flex items-center justify-center h-full'>
                      <Image
                        src={card.icon}
                        alt={`${card.title} Ícone`}
                        width={200}
                        height={200}
                        className="w-full h-full z-10 object-contain"
                      />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className='mb-4'>
                      {card.title}
                    </CardTitle>
                    {card.description}
                  </CardContent>
                </Card>          
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MethodologySection
