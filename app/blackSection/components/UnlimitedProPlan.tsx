import React from 'react'
import CardDetail from './CardDetail'
import SubCard from './SubCard'

const benefits = [
  '<strong class="text-white font-bold">Solicitação  para produtos ILIMITADOS!</strong>',
  '<strong class="text-white font-bold">Suporte Prioritário</strong>',
  '<strong class="text-white font-bold">Criativos em imagem ou vídeo.</strong>',
  '<strong class="font-bold text-white">Landing Page para Dropshipping</strong> Shopify.',
  '<strong class="text-white font-bold">Entrega em 24Hrs.</strong>',
  '<strong class="font-bold text-white">Páginas de alta conversão.</strong>',
  '<strong class="text-white font-bold">Criativos autorais</strong> com modelo em estúdio.',
  '<strong class="text-white font-bold">Criativos padrão UGC.</strong>',
  '<strong class="text-white font-bold">Criativos para Google Ads.</strong>',
  '<strong class="text-white font-bold">Banners.</strong>',
  '<strong class="text-white font-bold">Gerente Exclusivo para sua loja.</strong>',
  '<strong class="text-white font-bold">Post para Instagram.</strong>',
  '<strong class="text-white font-bold">Criação de Branding Personalizado.</strong>',
]


export default function UnlimitedProPlan({
  pix,
  remarketing
}: {
  pix?: boolean
  remarketing?: boolean
}) {
  const creditUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Unlimited Pro!'
  const pixUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Unlimited Pro!'
  const remarketingUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Unlimited Pro, gostaria de adquirir a oferta de Black Friday!'

  return (
    <SubCard
      title="UNLIMITED PRO"
      period="Mês"
      url={remarketing ? remarketingUrl : pix ? pixUrl : creditUrl}
      value={remarketing ? '1197,00' : '1497,00'}
      oldValue='1497,00'
      className="border-[3px] border-[#E11D48] bg-[#e11d4707]"
      tag="Maior Desconto!"
    >
      {benefits.map((benefit, index) => (
        <CardDetail key={index} marginY={[4, 0]}>
          {benefit}
        </CardDetail>
      ))}
    </SubCard>
  )
}