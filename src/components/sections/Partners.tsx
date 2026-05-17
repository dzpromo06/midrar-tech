import { useTranslation } from "react-i18next";
import Image from "next/image";
import anabibLogo from "@/assets/anabib.png";

export function Partners() {
  const { t } = useTranslation();
  const partners = [
    { name: "Anabib", desc: t("p1.desc"), logo: anabibLogo },
  ];
  return (
    <section id="partners" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block text-xs font-semibold tracking-widest text-[color:var(--brand-blue)] uppercase mb-4">
            {t("partners.tag")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("partners.title")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            {t("partners.desc")}
          </p>
        </div>
        <div className="mt-14 flex justify-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="relative rounded-3xl border border-border bg-card p-10 md:p-14 text-center hover:shadow-card transition duration-500 max-w-md w-full"
            >
              <div className="mb-8 flex justify-center">
                <Image src={p.logo} alt={p.name} className="h-24 md:h-32 w-auto object-contain" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-3">{p.name}</div>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
