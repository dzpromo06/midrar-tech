import Image from "next/image";
import pivotImg from "../../assets/pivot.webp";
import { useTranslation } from "react-i18next";

export function Solution() {
  const { t } = useTranslation();
  return (
    <section id="solution" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-block text-xs font-semibold tracking-widest text-[color:var(--brand-blue)] uppercase mb-4">
              {t("solution.tag")}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              {t("solution.title_start")} <span className="text-gradient">{t("solution.title_highlight")}</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t("solution.description")}
            </p>
            <ul className="mt-8 space-y-4">
              {[
                t("solution.bullet1"),
                t("solution.bullet2"),
                t("solution.bullet3"),
                t("solution.bullet4"),
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-accent shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "var(--gradient-accent)" }}
            />
            <Image
              src={pivotImg}
              alt="Center pivot irrigation system in a green field"
              className="relative rounded-3xl shadow-card w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
