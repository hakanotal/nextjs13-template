"use client";

import "@/styles/globals.css";
import { CacheProvider } from "@emotion/react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { useServerInsertedHTML } from "next/navigation";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          primaryColor: "cyan",
        }}
      >
        <SessionProvider>{children}</SessionProvider>
      </MantineProvider>
    </CacheProvider>
  );
}
