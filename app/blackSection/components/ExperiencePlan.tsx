import CardDetail from './CardDetail'
import SubCard from './SubCard'

const benefits = [
  '<strong class="font-bold text-white">Solicitação para 7 Produtos.</strong>',
  '<strong class="text-white font-bold">Criativos em imagem ou vídeo.</strong>',
  '<strong class="font-bold text-white">Landing Page para Dropshipping</strong> Shopify.',
  '<strong class="font-bold text-white">Páginas de alta conversão.</strong>',
  '<strong class="font-bold text-white">Fazemos variações do seu pedido.</strong>',
]

export default function ExperiencePlan({
  pix,
  remarketing
}: {
  pix?: boolean
  remarketing?: boolean
}) {
  const creditUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Experience!'
  const pixUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Experience!'
  const remarketingUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Experience, gostaria de adquirir a oferta de Black Friday!'
  return (
    <SubCard
      title="Experience - 7 Produtos"
      period="Mês"
      tag="Maior Desconto!"
      url={remarketing ? remarketingUrl : pix ? pixUrl : creditUrl}
      value={remarketing ? '520,00' : '650,00'}
      oldValue='650,00'
    >
      {benefits.map((benefit, index) => (
        <CardDetail key={index} marginY={[6, 0]}>
          {benefit}
        </CardDetail>
      ))}
    </SubCard>
  )
}