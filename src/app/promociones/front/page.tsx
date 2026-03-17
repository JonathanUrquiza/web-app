import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
  title: 'Frontend Development | DevUrWeb',
  description:
    'Servicios de desarrollo frontend: landing pages, sitios web y rediseños con React, Next.js y Tailwind CSS. Precios en ARS — Jonathan Javier Urquiza.',
  robots: {
    index: true,
    follow: true
  }
};

const WA_LINK = 'https://wa.me/5491168370362';

const plans = [
  {
    name: 'Landing Page',
    priceRange: '$350.000 – $500.000 ARS',
    badge: 'Más popular',
    badgeClass: 'bg-info text-dark',
    features: [
      'Diseño responsivo (mobile-first)',
      'Hasta 5 secciones (hero, servicios, testimonios, contacto)',
      'Formulario de contacto',
      'Optimización SEO básica',
      'Integración con Google Analytics',
      'Entrega en 7–14 días hábiles',
    ],
    highlight: true,
  },
  {
    name: 'Sitio Web (hasta 5 páginas)',
    priceRange: '$600.000 – $1.000.000 ARS',
    badge: 'Recomendado',
    badgeClass: 'bg-warning text-dark',
    features: [
      'Todo lo de Landing Page',
      'Hasta 5 páginas independientes',
      'Blog o sección de noticias (opcional)',
      'Panel de administración básico (opcional)',
      'Optimización SEO por página',
      'Entrega en 15–25 días hábiles',
    ],
    highlight: false,
  },
  {
    name: 'Rediseño / Migración',
    priceRange: '$400.000 – $700.000 ARS',
    badge: 'Modernizá tu sitio',
    badgeClass: 'bg-success',
    features: [
      'Análisis del sitio actual',
      'Migración a Next.js + Tailwind CSS',
      'Mejora de rendimiento (Core Web Vitals)',
      'Diseño actualizado y responsivo',
      'Mantenimiento del contenido existente',
      'Entrega en 10–20 días hábiles',
    ],
    highlight: false,
  },
];

export default function FrontendDev() {
  return (
    <main className="container-fluid bg-black min-vh-100 py-5 px-3 px-md-5">
      {/* Hero */}
      <section className="text-center mb-5">
        <span className="badge bg-info text-dark mb-3">Frontend Development</span>
        <h1 className="display-5 fw-bold text-white mb-3">
          Interfaces <span className="text-info">modernas</span> y responsivas
        </h1>
        <p className="lead text-secondary col-lg-7 mx-auto">
          Desarrollo con React, Next.js y Tailwind CSS. Sitios rápidos, accesibles y optimizados
          para posicionamiento orgánico.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="row g-4 justify-content-center mb-5">
        {plans.map((plan) => (
          <div key={plan.name} className="col-12 col-md-6 col-lg-4">
            <div
              className={`card h-100 bg-dark text-white border ${
                plan.highlight ? 'border-info' : 'border-secondary'
              } shadow`}
              style={{ borderWidth: plan.highlight ? '2px' : '1px' }}
            >
              <div className="card-body d-flex flex-column p-4">
                <span className={`badge ${plan.badgeClass} mb-3 align-self-start`}>
                  {plan.badge}
                </span>
                <h2 className="card-title h5 fw-bold text-info mb-1">{plan.name}</h2>
                <p className="fw-bold text-white mb-3" style={{ fontSize: '1.1rem' }}>
                  {plan.priceRange}
                </p>
                <ul className="list-unstyled flex-grow-1">
                  {plan.features.map((f) => (
                    <li key={f} className="mb-2 text-white-50">
                      <span className="text-info me-2">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA_LINK}?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info text-dark fw-bold mt-4 w-100"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tech stack */}
      <section className="text-center mb-5">
        <h3 className="h6 text-secondary text-uppercase letter-spacing mb-3">Tecnologías</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'].map(
            (tech) => (
              <span key={tech} className="badge bg-secondary text-white px-3 py-2">
                {tech}
              </span>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <div className="text-center">
        <p className="text-muted small mb-3">
          Precios en ARS. Consultar por proyectos personalizados.
        </p>
        <Link href="/promociones" className="btn btn-outline-secondary btn-sm">
          ← Volver a Promociones
        </Link>
      </div>
    </main>
  );
}
