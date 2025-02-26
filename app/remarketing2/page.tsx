import RemarketingSectionKiwify from "../remarketingSectionKiwify";

export default function Remarketing2() {
    return (
        <RemarketingSectionKiwify 
            title={(
                <>
                    <span className="font-bold text-[#E11D48]">Parabéns!</span> Você assinante do BK Reviews acabou de <span className="font-bold text-[#E11D48]">Ganhar um Presente.</span>
                </>
            )} 
            pix={false} 
        />
    )
}