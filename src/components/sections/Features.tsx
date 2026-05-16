import {
  Activity,
  Smartphone,
  CalendarClock,
  BellRing,
  Zap,
  Cloud,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Activity,
      title: t("f1.title"),
      desc: t("f1.desc"),
    },
    {
      icon: Smartphone,
      title: t("f2.title"),
      desc: t("f2.desc"),
    },
    {
      icon: CalendarClock,
      title: t("f3.title"),
      desc: t("f3.desc"),
    },
    {
      icon: BellRing,
      title: t("f4.title"),
      desc: t("f4.desc"),
    },
    {
      icon: Zap,
      title: t("f5.title"),
      desc: t("f5.desc"),
    },
    {
      icon: Cloud,
      title: t("f6.title"),
      desc: t("f6.desc"),
    },
  ];
  return (
    <section id="features" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-block text-xs font-semibold tracking-widest text-[color:var(--brand-blue)] uppercase mb-4">
            {t("features.tag")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("features.title")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            {t("features.desc")}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl bg-card border border-border p-7 hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-accent text-primary shadow-glow">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
