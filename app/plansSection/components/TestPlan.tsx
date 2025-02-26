import CardDetail from './CardDetail'
import SubCard from './SubCard'

const benefits = [
  '<strong class="font-bold text-white">Automação no ManyChat integrada ao WhatsApp.</strong>',
  '<strong class="text-white font-bold">Integração com Shopify e Yampi.</strong>',
  '<strong class="font-bold text-white">Sistema de rastreamento de pedidos automático.</strong>',
  '<strong class="font-bold text-white">Respostas automáticas para dúvidas frequentes.</strong>',
]

export default function TestPlan({
  pix,
  remarketing,
  fb
}: {
  pix?: boolean
  remarketing?: boolean
  fb?: boolean
}) {
  const creditUrl = 'https://wa.me/558396834981/?text=Olá%20AI%20Fx, estou interessado no Plano Essencial!'
  const pixUrl = 'https://wa.me/558396834981/?text=Olá%20AI%20Fx, estou interessado no Plano Essencial!'
  const remarketingUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Test!'
  const fbUrl = 'https://wa.me/5511934748273/?text=Olá%20BK%20Arts, estou interessado no Plano Test!'


  return (
    <SubCard
      title="Essencial"
      period="Mês"
      url={remarketing ? remarketingUrl : pix ? pixUrl : fb ? fbUrl : creditUrl}
      className="flex"
      value={remarketing ? '19,90' : '347,00'}
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