import { useTranslation } from "react-i18next";

const images = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Pivot irrigating a green crop field at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    alt: "Aerial view of circular pivot irrigation fields",
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    alt: "Center pivot watering wheat in summer",
  },
];

export function Gallery() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-block text-xs font-semibold tracking-widest text-[color:var(--brand-blue)] uppercase mb-4">
            {t("gallery.tag")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("gallery.title")}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img) => (
            <div key={img.src} className="group overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
