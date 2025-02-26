import CardDetail from './CardDetail'
import SubCard from './SubCard'

const benefits = [
  '<strong class="text-white font-bold">Solicitação  para produtos ILIMITADOS!</strong>',
  '<strong class="text-white font-bold">Criativos em imagem ou vídeo.</strong>',
  '<strong class="font-bold text-white">Landing Page para Dropshipping</strong> Shopify.',
  '<strong class="text-white font-bold">Entrega em 24Hrs.</strong>',
  '<strong class="font-bold text-white">Páginas de alta conversão.</strong>',
  '<strong class="text-white font-bold">Criativos autorais</strong> com modelo em estúdio.',
  '<strong class="text-white font-bold">Criativos padrão UGC.</strong>',
  '<strong class="text-white font-bold">Criativos para Google Ads.</strong>',
  '<strong class="text-white font-bold">Posts para Loja no Instagram </strong>(stories e feed).',
  '<strong class="text-white font-bold">Banners.</strong>',
]

export default function UnlimitedPlan({
  pix,
  remarketing
}: {
  pix?: boolean
  remarketing?: boolean
}) {
  const creditUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Unlimited!'
  const pixUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Unlimited!'
  const remarketingUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Unlimited, sou assinante do BK Reviews e quero meu desconto de 20%!'

  return (
    <SubCard
      title="UNLIMITED"
      period="Mês"
      url={remarketing ? remarketingUrl : pix ? pixUrl : creditUrl}
      value={remarketing ? '797,60' : '997,00'}
      oldValue='997,00'
      className="border-[3px] border-[#E11D48] bg-[#e11d4707]"
      tag="Mais Vendido!"
    >
      {benefits.map((benefit, index) => (
        <CardDetail key={index} marginY={[4, 0]}>
          {benefit}
        </CardDetail>
      ))}
    </SubCard>
  )
}