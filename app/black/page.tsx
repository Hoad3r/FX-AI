import BlackSection from "../blackSection";

export default function Black() {
    return (
        <BlackSection 
            title={(
                <div className="flex flex-col justify-center">
                    <span className="font-bold">Black Friday Especial!</span>

                    <div>
                    Aproveite a <span className="font-bold text-[#E11D48]">Maior Oferta do Ano!</span>
                    </div>
                </div>
            )} 
            pix={false} 
        />
    )
}