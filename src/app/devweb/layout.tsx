import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import DevNavbar from '@/components/devNavbar/DevNavbar';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": siteUrl
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Proyectos Web",
      "item": `${siteUrl}/devweb`
    }
  ]
};

export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Proyectos y trabajos de desarrollo web frontend de Jonathan Javier Urquiza — DevUrWeb.',
  openGraph: {
    title: 'Portafolio | DevUrWeb',
    description: 'Proyectos y trabajos de desarrollo web frontend de Jonathan Javier Urquiza — DevUrWeb.',
    type: 'website'
  }
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DevNavbar />
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
