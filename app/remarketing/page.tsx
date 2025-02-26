import RemarketingSection from "../remarketingSection";

export default function Remarketing() {
    return (
        <RemarketingSection 
            title={(
                <>
                    <span className="font-bold text-[#E11D48]">Parabéns!</span> Você assinante do BK Reviews acabou de <span className="font-bold text-[#E11D48]">Ganhar um Presente.</span>
                </>
            )} 
            pix={false} 
        />
    )
}