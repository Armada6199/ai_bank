import React from "react";
import Providers from "./components/Providers";
import { i18n } from "../../i18.config";
import "@styles/styles.css";
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <head>
        <meta name="ai bank" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <Providers lang={lang}>
        <body>{children}</body>
      </Providers>
    </html>
  );
}

export default RootLayout;
