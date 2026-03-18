import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formación — Próximamente',
  description: 'Próximamente — sección de formación académica de Jonathan Urquiza.',
  robots: {
    index: false,
    follow: false
  }
};

export default function FromationContainer() {
  return (
    <div>
      <h1 className="visually-hidden">Formación Académica — Jonathan Javier Urquiza</h1>
      FromationContainer
    </div>
  )
}
