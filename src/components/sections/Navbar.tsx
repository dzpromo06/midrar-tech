import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-horizontal.svg";
import { useTranslation } from "react-i18next";

const links = [
  { href: "#solution", label: "Solution" },
  { href: "#features", label: "Features" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const translatedLinks = [
    { href: "#solution", label: t("nav.solution") },
    { href: "#features", label: t("nav.features") },
    { href: "#partners", label: t("nav.partners") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all bg-white border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center">
          <Image src={logo} alt="Midrar Technologies" className="h-9 md:h-11 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {translatedLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase"
            >
              {i18n.language.substring(0, 2)} <ChevronDown size={14} />
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-24 rounded-md shadow-lg bg-background border border-border py-1">
                {["fr", "en", "ar"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      i18n.changeLanguage(lang);
                      setLangMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-foreground/80 hover:bg-accent uppercase"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-glow hover:opacity-90 transition"
          >
            {t("nav.getInTouch")}
          </a>
        </nav>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3">
            {translatedLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/90 font-medium"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 py-2">
              {["fr", "en", "ar"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={`px-3 py-1 text-sm rounded ${i18n.language === lang ? 'bg-accent font-semibold' : 'text-foreground/80'}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-accent px-5 py-3 text-sm font-semibold text-primary"
            >
              {t("nav.getInTouch")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
