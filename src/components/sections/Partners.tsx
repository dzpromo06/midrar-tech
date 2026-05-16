import { useTranslation } from "react-i18next";

export function Partners() {
  const { t } = useTranslation();
  const partners = [
    { name: "Anabib", desc: t("p1.desc") },
    { name: "Djezzy", desc: t("p2.desc") },
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
        <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className="relative rounded-2xl border border-border bg-card p-10 text-center hover:shadow-card transition"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-accent" />
              <div className="text-3xl md:text-4xl font-bold text-gradient font-display">{p.name}</div>
              <div className="mt-3 text-sm text-muted-foreground">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
