import '@tremor/react'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import NavbarContainer from "@/components/navbar/NavbarContainer";
import FooterContainer from "@/components/footer/FooterContainer";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DevUrWeb | Jonathan Urquiza — Desarrollador Frontend",
    template: "%s | DevUrWeb"
  },
  description: "Portfolio de Jonathan Javier Urquiza, desarrollador web frontend en Buenos Aires, Argentina. Servicios de desarrollo web con Next.js, React y más.",
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'desarrollador web', 'frontend', 'Buenos Aires', 'Argentina', 'portfolio', 'DevUrWeb'],
  authors: [{ name: 'Jonathan Javier Urquiza', url: 'https://www.linkedin.com/in/jonathan-urquiza-179a70119/' }],
  publisher: 'Jonathan Javier Urquiza',
  creator: 'Jonathan Javier Urquiza',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'DevUrWeb',
    title: 'DevUrWeb | Jonathan Urquiza — Desarrollador Frontend',
    description: 'Portfolio de Jonathan Javier Urquiza, desarrollador web frontend en Buenos Aires, Argentina.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'DevUrWeb — Portfolio de Jonathan Urquiza' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevUrWeb | Jonathan Urquiza — Desarrollador Frontend',
    description: 'Portfolio de Jonathan Javier Urquiza, desarrollador web frontend en Buenos Aires, Argentina.',
    images: ['/opengraph-image.png']
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "DevUrWeb",
  "url": siteUrl,
  "description": "Portfolio de Jonathan Javier Urquiza, desarrollador web frontend en Buenos Aires, Argentina.",
  "inLanguage": "es-AR",
  "author": {
    "@type": "Person",
    "name": "Jonathan Javier Urquiza",
    "url": `${siteUrl}/resume`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* No-flash theme script: runs synchronously before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var V=["dark","light","synthwave"];var s=localStorage.getItem("duw-theme");document.documentElement.setAttribute("data-theme",V.indexOf(s)!==-1?s:"dark");})();`
          }}
        />
      </head>
      <body className={inter.className}>
        <NavbarContainer />
        {children}
        <FooterContainer />
        <ThemeSwitcher />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
