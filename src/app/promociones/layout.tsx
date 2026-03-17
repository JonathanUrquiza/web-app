import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import PromoNav from '@/components/PromoNavbar/PromoNav';

export const metadata: Metadata = {
  title: 'Promociones',
  description: 'Servicios y promociones de desarrollo web ofrecidos por DevUrWeb — Jonathan Javier Urquiza.',
  openGraph: {
    title: 'Promociones | DevUrWeb',
    description: 'Servicios y promociones de desarrollo web ofrecidos por DevUrWeb — Jonathan Javier Urquiza.',
    type: 'website'
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function Promocioneslayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PromoNav />
      {children}
    </>
  )
}
