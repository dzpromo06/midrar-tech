import { createFileRoute } from "@tanstack/react-router";
import i18next from "i18next";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { InteractiveDemo } from "@/components/sections/InteractiveDemo";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Gallery } from "@/components/sections/Gallery";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: i18next.t("meta.title") },
      {
        name: "description",
        content: i18next.t("meta.desc"),
      },
      { property: "og:title", content: i18next.t("meta.title") },
      {
        property: "og:description",
        content: i18next.t("meta.desc"),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <InteractiveDemo />
        <Solution />
        <Features />
        <HowItWorks />
        {/* <Gallery /> */}
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
