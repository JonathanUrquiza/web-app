import React from 'react'
import type { Metadata } from 'next'
import ResumeClient from './ResumeClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jonathan Javier Urquiza",
  "jobTitle": "Desarrollador Web Frontend",
  "url": `${siteUrl}/resume`,
  "sameAs": [
    "https://www.linkedin.com/in/jonathan-urquiza-179a70119/",
    "https://github.com/JonathanUrquiza"
  ],
  "knowsAbout": ["React", "Next.js", "TypeScript", "JavaScript", "CSS", "Node.js"],
  "nationality": {
    "@type": "Country",
    "name": "Argentina"
  }
};

export const metadata: Metadata = {
  title: 'Currículum — Jonathan Urquiza',
  description: 'CV de Jonathan Javier Urquiza: desarrollador frontend en Buenos Aires. Next.js, React, TypeScript, Python. Estudiante de Análisis de Sistemas.',
  openGraph: {
    title: 'Currículum — Jonathan Urquiza | DevUrWeb',
    description: 'CV de Jonathan Javier Urquiza, desarrollador frontend en Buenos Aires.',
    type: 'profile',
    firstName: 'Jonathan',
    lastName: 'Urquiza',
    username: 'devurweb',
    images: [{ url: '/resume/opengraph-image.png', width: 1200, height: 630, alt: 'Currículum — Jonathan Urquiza' }]
  }
};

export default function ResumeContainer() {
  return (
    <>
      <ResumeClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  )
}
