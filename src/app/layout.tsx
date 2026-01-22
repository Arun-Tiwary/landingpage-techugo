import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import CookieBanner from "@/components/CookieBanner";
const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* MailerLite Universal Script */}
        <Script id="mailerlite-script" strategy="afterInteractive">
          {`
            (function (w, d, e, u, f, l, n) {
              w[f] = w[f] || function () {
                (w[f].q = w[f].q || []).push(arguments);
              };
              l = d.createElement(e);
              l.async = 1;
              l.src = u;
              n = d.getElementsByTagName(e)[0];
              n.parentNode.insertBefore(l, n);
            })(
              window,
              document,
              "script",
              "https://assets.mailerlite.com/js/universal.js",
              "ml"
            );
            ml("account", "1802030");
          `}
        </Script>
      </head>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
        >
          <Aoscompo>
            <Header />
            {children}
            <CookieBanner />
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
