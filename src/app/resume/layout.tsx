import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import ResumeNav from '@/components/resumeNav/ResumeNav';

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
      "name": "Currículum",
      "item": `${siteUrl}/resume`
    }
  ]
};

export const metadata: Metadata = {
  title: 'Currículum',
  description: 'Currículum vitae de Jonathan Javier Urquiza, desarrollador web frontend con experiencia en React, Next.js y TypeScript.',
  openGraph: {
    title: 'Currículum | DevUrWeb',
    description: 'CV completo de Jonathan Urquiza — experiencia, formación y habilidades.',
    type: 'profile'
  }
};

export default function Resumelayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResumeNav />
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
