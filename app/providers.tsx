"use client";

import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/i18n";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <QueryClientProvider client={queryClient}>
      <div dir={dir} lang={i18n.language}>
        {children}
      </div>
    </QueryClientProvider>
  );
}
