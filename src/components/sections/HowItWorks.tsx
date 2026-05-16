import { Radio, ServerCog, MonitorSmartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Radio,
      title: t("s1.title"),
      desc: t("s1.desc"),
    },
    {
      icon: ServerCog,
      title: t("s2.title"),
      desc: t("s2.desc"),
    },
    {
      icon: MonitorSmartphone,
      title: t("s3.title"),
      desc: t("s3.desc"),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block text-xs font-semibold tracking-widest text-[color:var(--brand-mint)] uppercase mb-4">
            {t("how.tag")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">{t("how.title")}</h2>
          <p className="mt-5 text-lg text-white/70">
            {t("how.desc")}
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <div className="text-6xl font-bold text-gradient opacity-90">0{i + 1}</div>
              <div className="mt-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/10">
                <s.icon size={22} className="text-[color:var(--brand-mint)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
