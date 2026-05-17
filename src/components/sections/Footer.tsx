import Image from "next/image";
import logo from "@/assets/logo-horizontal.svg";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-white/80 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="bg-white/95 inline-block rounded-xl p-3">
              <Image src={logo} alt="Midrar Technologies" className="h-9 w-auto" />
            </div>
            <p className="mt-5 text-sm text-white/60 max-w-xs leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.explore")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#solution" className="hover:text-white">{t("nav.solution")}</a></li>
              <li><a href="#features" className="hover:text-white">{t("nav.features")}</a></li>
              <li><a href="#partners" className="hover:text-white">{t("nav.partners")}</a></li>
              <li><a href="#contact" className="hover:text-white">{t("nav.contact")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:contact@midrartech.com" className="hover:text-white">
                  contact@midrartech.com
                </a>
              </li>
              <li>
                <a href="tel:0698203820" className="hover:text-white">
                  0698203820
                </a>
              </li>
              <li>Bordj Bou Arréridj, Algeria</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-3">
          <div>© {new Date().getFullYear()} {t("footer.rights")}</div>
          <div>{t("footer.care")}</div>
        </div>
      </div>
    </footer>
  );
}
