import CardDetail from './CardDetail'
import SubCard from './SubCard'

const benefits = [
  '<strong class="font-bold text-white">Solicitação para 1 Produto.</strong>',
  '<strong class="text-white font-bold">Criativo em imagem ou vídeo.</strong>',
  '<strong class="font-bold text-white">Landing Page para Dropshipping</strong> Shopify.',
  '<strong class="font-bold text-white">Entrega em 24Hrs.</strong>',
  '<strong class="font-bold text-white">Fazemos variações do seu pedido.</strong>',
]

export default function UnicoPlan({
  pix,
  remarketing
}: {
  pix?: boolean
  remarketing?: boolean
}) {
  const creditUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Único!'
  const pixUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Único!'
  const remarketingUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Único, sou assinante do BK Reviews e quero meu desconto de 20%!'
  const kiwifyUrl = 'https://pay.kiwify.com.br/8qkCLhF'

  return (
    <SubCard
      title="Único - 1 Produto"
      period="Mês"
      url={kiwifyUrl}
      className="flex"
      value={remarketing ? '120,00' : '150,00'}
      oldValue='150,00'
    >
      {benefits.map((benefit, index) => (
        <CardDetail key={index} marginY={[8, 0]}>
          {benefit}
        </CardDetail>
      ))}
    </SubCard>
  )
}