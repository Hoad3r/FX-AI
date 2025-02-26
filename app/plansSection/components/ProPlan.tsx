import CardDetail from "./CardDetail";
import SubCard from "./SubCard";

const benefits = [
  '<strong class="text-white font-bold">Tudo do Plano Pro +</strong>',
  '<strong class="text-white font-bold">Integração completa com Instagram.</strong>',
  '<strong class="text-white font-bold">Respostas automatizadas para DMs.</strong>',
  '<strong class="font-bold text-white">IA que interage com os clientes de forma natural, aumentando o engajamento.</strong>',
  '<strong class="text-white font-bold">Estratégias para aumentar conversões diretamente no WhatsApp e Instagram.</strong>',
];

export default function UnlimitedPlan({
  pix,
  remarketing,
  fb,
}: {
  pix?: boolean;
  remarketing?: boolean;
  fb?: boolean;
}) {
  const creditUrl = 'https://wa.me/558396834981/?text=AI%20BK%20FX, estou interessado no Plano Premium!'
  const pixUrl = 'https://wa.me/558396834981/?text=Olá%20AI%20FX, estou interessado no Plano Premium!'
  const fbUrl = 'https://wa.me/558396834981/?text=Olá%20AI%20FX, estou interessado no Plano Premium!'

  return (
    <SubCard
      title="Premium"
      period="Mês"
      url={pix ? pixUrl : fb ? fbUrl : creditUrl}
      className="border-[3px] border-[#C4AC68] bg-[#e11d4707]"
      tagPlus="Mais Personalizado!"
      tag="Mais Vendido!"
      value="97,90"
    >
      {benefits.map((benefit, index) => (
        <CardDetail key={index} marginY={[8, 0]}>
          {benefit}
        </CardDetail>
      ))}
    </SubCard>
  );
}
