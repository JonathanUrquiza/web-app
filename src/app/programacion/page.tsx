import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programación',
  description: 'Próximamente — sección Programación de DevUrWeb.',
  robots: {
    index: false,
    follow: false
  }
};

export default function ProgramacionLayout() {
  return (
    <div>Programación</div>
  )
}
