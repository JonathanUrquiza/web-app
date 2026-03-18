import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Backend',
  description: 'Próximamente — sección Backend de DevUrWeb.',
  robots: {
    index: false,
    follow: false
  }
};

export default function BackerndContainer() {
  return (
    <section className="row">
      <article className="hero col-12 px-4 py-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-warning">Backend</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Proyectos de desarrollo del lado del servidor con <span className="text-warning">Node.js</span> y bases de datos relacionales y no relacionales.
            <br />
            En esta sección vas a encontrar ejemplos de APIs REST, autenticación, integración con servicios externos y arquitecturas como MVC y Microservicios.
          </p>
          <span className="badge bg-secondary fs-6">Próximamente</span>
        </div>
      </article>
    </section>
  )
}
