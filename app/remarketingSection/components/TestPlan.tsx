import CardDetail from './CardDetail'
import SubCard from './SubCard'

const benefits = [
  '<strong class="font-bold text-white">Solicitação para 3 Produtos.</strong>',
  '<strong class="text-white font-bold">Criativos em imagem ou vídeo.</strong>',
  '<strong class="font-bold text-white">Landing Page para Dropshipping</strong> Shopify.',
  '<strong class="font-bold text-white">Entrega em 24Hrs.</strong>',
  '<strong class="font-bold text-white">Páginas de alta conversão.</strong>',
  '<strong class="font-bold text-white">Fazemos variações do seu pedido.</strong>',
]

export default function TestPlan({
  pix,
  remarketing
}: {
  pix?: boolean
  remarketing?: boolean
}) {
  const creditUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Test!'
  const pixUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Test!'
  const remarketingUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Test, sou assinante do BK Reviews e quero meu desconto de 20%!'

  return (
    <SubCard
      title="Test - 3 Produtos"
      period="Mês"
      url={remarketing ? remarketingUrl : pix ? pixUrl : creditUrl}
      value={remarketing ? '277,60' : '347,00'}
      className="flex"
      oldValue='347,00'
      tag="Custo Benefício!"
    >
      {benefits.map((benefit, index) => (
        <CardDetail key={index} marginY={[6, 0]}>
          {benefit}
        </CardDetail>
      ))}
    </SubCard>
  )
}