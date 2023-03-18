import RootProviders from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.js 13" />
        <title>Next.js 13</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
