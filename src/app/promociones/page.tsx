import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
  title: 'Promociones | DevUrWeb',
  description: 'Servicios de desarrollo web, frontend y backend ofrecidos por Jonathan Javier Urquiza — DevUrWeb. Precios en ARS para el mercado argentino.',
  robots: {
    index: true,
    follow: true
  }
};

const categories = [
  {
    title: 'Frontend Development',
    subtitle: 'Interfaces modernas y responsivas',
    description:
      'Landing pages, sitios web multipágina y rediseños con React, Next.js y Tailwind CSS. Enfocado en rendimiento, accesibilidad y experiencia de usuario.',
    priceFrom: '$350.000',
    color: 'text-info',
    borderColor: 'border-info',
    badgeClass: 'bg-info text-dark',
    href: '/promociones/front',
    features: ['Landing pages', 'Sitios hasta 5 páginas', 'Rediseño y migración'],
  },
  {
    title: 'Backend Development',
    subtitle: 'APIs robustas y escalables',
    description:
      'Desarrollo de APIs REST, autenticación, base de datos e integración de pasarelas de pago con Node.js, Express y PostgreSQL / MongoDB.',
    priceFrom: '$400.000',
    color: 'text-warning',
    borderColor: 'border-warning',
    badgeClass: 'bg-warning text-dark',
    href: '/promociones/back',
    features: ['API REST básica', 'Auth + Base de datos', 'Integración de pagos'],
  },
  {
    title: 'Web Completa',
    subtitle: 'Solución fullstack end-to-end',
    description:
      'Sitios institucionales, e-commerce y aplicaciones web a medida con stack completo: Next.js + Node.js + base de datos + deploy incluido.',
    priceFrom: '$800.000',
    color: 'text-success',
    borderColor: 'border-success',
    badgeClass: 'bg-success',
    href: '/promociones/web',
    features: ['Sitio institucional completo', 'E-commerce básico', 'App web a medida'],
  },
];

export default function PromocionesContainer() {
  return (
    <main className="container-fluid bg-black min-vh-100 py-5 px-3 px-md-5">
      {/* Hero */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold text-white mb-3">
          Servicios de <span className="text-info">Desarrollo</span>{' '}
          <span className="text-warning">Web</span>
        </h1>
        <p className="lead text-secondary col-lg-7 mx-auto">
          Soluciones digitales a medida para tu negocio. Elegí el servicio que mejor se adapta a tus
          necesidades y presupuesto.
        </p>
        <p className="text-muted small mt-2">
          Precios en ARS · Mercado argentino · 2025–2026
        </p>
      </section>

      {/* Category cards */}
      <section className="row g-4 justify-content-center mb-5">
        {categories.map((cat) => (
          <div key={cat.href} className="col-12 col-md-6 col-lg-4">
            <div
              className={`card h-100 bg-dark text-white border ${cat.borderColor} shadow`}
              style={{ borderWidth: '2px' }}
            >
              <div className="card-body d-flex flex-column p-4">
                <span className={`badge ${cat.badgeClass} mb-3 align-self-start`}>
                  Desde {cat.priceFrom} ARS
                </span>
                <h2 className={`card-title display-6 fw-bold ${cat.color}`}>{cat.title}</h2>
                <p className="text-secondary small mb-3">{cat.subtitle}</p>
                <p className="card-text text-white-50 flex-grow-1">{cat.description}</p>
                <ul className="list-unstyled mt-3 mb-4">
                  {cat.features.map((f) => (
                    <li key={f} className="text-white-75 mb-1">
                      <span className={`me-2 ${cat.color}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={cat.href}
                  className={`btn btn-outline-${cat.color.replace('text-', '')} mt-auto w-100`}
                >
                  Ver precios y detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer note */}
      <p className="text-center text-muted small">
        Precios en ARS. Consultar por proyectos personalizados.
      </p>
    </main>
  );
}
