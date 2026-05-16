import { ArrowRight, Droplets } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary" />
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-white/90 mb-6">
            <Droplets size={14} className="text-[color:var(--brand-mint)]" />
            {t("hero.tag")}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
            {t("hero.title_start")} <span className="text-gradient">{t("hero.title_highlight")}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
            {t("hero.description")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://pivotmaster.midrartech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-base font-semibold text-primary shadow-glow hover:opacity-95 transition"
            >
              {t("hero.requestDemo")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            { k: t("hero.stat_monitoring_k"), v: t("hero.stat_monitoring_v") },
            { k: t("hero.stat_ai_k"), v: t("hero.stat_ai_v") },
            { k: t("hero.stat_uptime_k"), v: t("hero.stat_uptime_v") },
          ].map((s) => (
            <div key={s.v} className="border-l-2 border-[color:var(--brand-mint)]/60 pl-4 group hover:border-[color:var(--brand-mint)] transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-[color:var(--brand-mint)] transition-colors">{s.k}</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
