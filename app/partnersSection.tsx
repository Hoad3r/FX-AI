import Image from "next/image";
export default function PartnersSection() {
  const partners: Record<string, string> = {
    // cartpanda:
    //   "https://accounts.cartpanda.com/register?ref=bkcompany&refcartx=bkcompany",
    // adminer: "https://adminer.pro/?ref=odhinwy",
    // adshield: "https://adshieldcontingencia.com/",
    // contasimples:
    //   "https://pages.contasimples.com/blackfriday2024?utm_campaign=Black%20Friday%202024&utm_source=Parcerias&utm_medium=BKReviews",
    // "3cliques": "https://lp.3cliques.net/parceiro-bk-reviews/",
    bk: "https://bkreviews.com.br/",
    bkads: "https://bkads.com.br/",
    bkarts: "https://bkarts.com.br/",
  };

  return (
    <section className="w-full max-w-[1200px] py-20 flex items-center flex-col mx-auto gap-16">
      <h2 className="text-white font-normal text-[clamp(20px,_7vw,_40px)] xs:text-[40px] text-center">
        Nossos <strong>patrocinadores</strong>
      </h2>
      <div className="w-full h-full gap-8 sm:gap-0 flex flex-col md:flex-row justify-center items-center">
        {Object.entries(partners).map(([name, url], index) => (
          <div
            className="w-1/4 h-full flex items-center justify-center"
            key={index}
          >
            <a href={url} target="__blank">
              <Image
                src={`/partners/${name}_patrocinio.png`}
                alt={name}
                width={200}
                height={50}
                className="object-contain max-w-[130px] sm:max-h-[60px]"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
