import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:techmidar@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
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
                href="mailto:techmidar@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-accent inline-flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t("contact.email")}</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-[color:var(--brand-blue)] transition">
                    techmidar@gmail.com
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

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card"
          >
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground">{t("contact.label_name")}</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t("contact.ph_name")}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">{t("contact.email")}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">{t("contact.label_msg")}</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder={t("contact.ph_msg")}
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-base font-semibold text-primary shadow-glow hover:opacity-95 transition"
              >
                {t("contact.btn")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
