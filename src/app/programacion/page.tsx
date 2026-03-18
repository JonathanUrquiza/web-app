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
    <section className="row">
      <article className="hero col-12 px-4 py-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-success">Programación</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Resolución de desafíos, algoritmos y ejercicios de lógica como <span className="text-success">AdventJS</span> y otros retos de código.
            <br />
            En esta sección vas a encontrar ejemplos de pensamiento computacional, estructuras de datos y soluciones a problemas reales de programación.
          </p>
          <span className="badge bg-secondary fs-6">Próximamente</span>
        </div>
      </article>
    </section>
  )
}
