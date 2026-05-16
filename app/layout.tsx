import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Midrar Technologies — Smart Remote Management for Agricultural Pivots",
  description: "Midrar Technologies builds intelligent remote management solutions for agricultural pivot irrigation systems. Engineered in Algeria.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
