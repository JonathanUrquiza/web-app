import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend',
  description: 'Próximamente — sección Frontend de DevUrWeb.',
  robots: {
    index: false,
    follow: false
  }
};

export default function FrontendLayout() {
  return (
    <section className="row">
      <article className="hero col-12 px-4 py-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-info">Frontend</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Proyectos avanzados de interfaces de usuario desarrollados con <span className="text-info">React</span> y <span className="text-warning">Next.js</span>.
            <br />
            En esta sección vas a encontrar ejemplos de diseño responsivo, componentes reutilizables, animaciones y buenas prácticas de accesibilidad y rendimiento web.
          </p>
          <span className="badge bg-secondary fs-6">Próximamente</span>
        </div>
      </article>
    </section>
  )
}
