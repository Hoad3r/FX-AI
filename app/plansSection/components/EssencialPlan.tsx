import CardDetail from './CardDetail'
import SubCard from './SubCard'

const benefits = [
  '<strong class="font-bold text-white">Tudo do Plano  Essencial +</strong>',
  '<strong class="text-white font-bold">Agente de IA treinado para respostas personalizadas.</strong>',
  '<strong class="font-bold text-white">Atendimento inteligente, minimizando a necessidade de atendentes humanos.</strong>',
  '<strong class="font-bold text-white">Suporte humano apenas para casos complexos, como devoluções.</strong>',
]

export default function ExperiencePlan({  
  pix,
  remarketing,
  fb
}: {
  pix?: boolean
  remarketing?: boolean
  fb?: boolean }) {
  const creditUrl = 'https://wa.me/558396834981/?text=Olá%20AI%20Fx, estou interessado no Plano Pro!'
  const pixUrl = 'https://wa.me/558396834981/?text=Olá%20AI%20Fx, estou interessado no Plano Pro!'
  const fbUrl = 'https://wa.me/558396834981/?text=Olá%20AI%20Fx, estou interessado no Plano Pro!'
  return (
    <SubCard
      title="Pro"
      period="Mês"
      url={pix ? pixUrl : fb ? fbUrl : creditUrl}
      tag="Mais Vendido!"
      value="19,90"
    >
      {benefits.map((benefit, index) => (
        <CardDetail key={index} marginY={[6, 0]}>
          {benefit}
        </CardDetail>
      ))}
    </SubCard>
  )
}