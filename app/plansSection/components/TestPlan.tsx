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
  const creditUrl = 'https://wa.me/5547997114153/?text=Olá%20Fx, gostaria de saber mais sobre o plano Essencial!'
  const pixUrl = 'https://wa.me/5547997114153/?text=Olá%20Fx, gostaria de saber mais sobre o plano Essencial!'
  const remarketingUrl = 'https://wa.me/5547997114153/?text=Olá%20Fx, gostaria de saber mais sobre o plano Essencial!'
  const fbUrl = 'https://wa.me/5547997114153/?text=Olá%20Fx, gostaria de saber mais sobre o plano Essencial!'


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