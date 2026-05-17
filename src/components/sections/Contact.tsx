import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-2xl w-full">
            <div className="inline-block text-xs font-semibold tracking-widest text-[color:var(--brand-blue)] uppercase mb-4">
              {t("contact.tag")}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              {t("contact.title_start")}<span className="text-gradient">{t("contact.title_highlight")}</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              {t("contact.desc")}
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:contact@midrartech.com"
                className="flex items-start gap-4 group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-accent inline-flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t("contact.email")}</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-[color:var(--brand-blue)] transition">
                    contact@midrartech.com
                  </div>
                </div>
              </a>
              <a
                href="tel:0698203820"
                className="flex items-start gap-4 group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-accent inline-flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t("contact.phone")}</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-[color:var(--brand-blue)] transition">
                    0698203820
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-accent inline-flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t("contact.hq")}</div>
                  <div className="text-lg font-semibold text-foreground">
                    Bordj Bou Arréridj, Algeria
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
