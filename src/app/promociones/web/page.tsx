import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
  title: 'Web Completa | DevUrWeb',
  description:
    'Soluciones web fullstack end-to-end: sitios institucionales, e-commerce y apps a medida con Next.js y Node.js. Precios en ARS — Jonathan Javier Urquiza.',
  robots: {
    index: true,
    follow: true
  }
};

const WA_LINK = 'https://wa.me/5491168370362';

const plans = [
  {
    name: 'Sitio Institucional Completo',
    priceRange: '$800.000 – $1.400.000 ARS',
    badge: 'Presencia digital',
    badgeClass: 'bg-success',
    features: [
      'Diseño responsivo fullstack (Next.js + Node.js)',
      'Hasta 8 páginas + secciones dinámicas',
      'Panel CMS para gestión de contenido',
      'SEO avanzado + sitemap + schema.org',
      'Formulario de contacto con email automático',
      'Deploy en Vercel + Railway incluido',
      'Entrega en 25–40 días hábiles',
    ],
    highlight: false,
  },
  {
    name: 'E-commerce Básico',
    priceRange: '$1.200.000 – $2.000.000 ARS',
    badge: 'Más solicitado',
    badgeClass: 'bg-warning text-dark',
    features: [
      'Todo lo de Sitio Institucional',
      'Catálogo de productos con filtros',
      'Carrito de compras y checkout',
      'Integración MercadoPago / Stripe',
      'Panel de administración de pedidos',
      'Gestión de stock',
      'Entrega en 40–60 días hábiles',
    ],
    highlight: true,
  },
  {
    name: 'App Web a Medida',
    priceRange: '$1.500.000 – $3.000.000 ARS',
    badge: 'Proyecto personalizado',
    badgeClass: 'bg-info text-dark',
    features: [
      'Análisis y diseño de arquitectura',
      'Frontend con React / Next.js',
      'Backend con Node.js + base de datos',
      'Autenticación y roles de usuario',
      'Integraciones de terceros según proyecto',
      'Tests unitarios e integración',
      'Documentación técnica completa',
    ],
    highlight: false,
  },
];

export default function Web() {
  return (
    <main className="container-fluid bg-black min-vh-100 py-5 px-3 px-md-5">
      {/* Hero */}
      <section className="text-center mb-5">
        <span className="badge bg-success mb-3">Web Completa — Fullstack</span>
        <h1 className="display-5 fw-bold text-white mb-3">
          Soluciones <span className="text-success">fullstack</span>{' '}
          <span className="text-warning">end-to-end</span>
        </h1>
        <p className="lead text-secondary col-lg-7 mx-auto">
          Desde el diseño de interfaz hasta la base de datos y el deploy. Un único desarrollador
          responsable de todo el proyecto, con stack moderno y escalable.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="row g-4 justify-content-center mb-5">
        {plans.map((plan) => (
          <div key={plan.name} className="col-12 col-md-6 col-lg-4">
            <div
              className={`card h-100 bg-dark text-white border ${
                plan.highlight ? 'border-warning' : 'border-secondary'
              } shadow`}
              style={{ borderWidth: plan.highlight ? '2px' : '1px' }}
            >
              <div className="card-body d-flex flex-column p-4">
                <span className={`badge ${plan.badgeClass} mb-3 align-self-start`}>
                  {plan.badge}
                </span>
                <h2 className="card-title h5 fw-bold text-success mb-1">{plan.name}</h2>
                <p className="fw-bold text-white mb-3" style={{ fontSize: '1.1rem' }}>
                  {plan.priceRange}
                </p>
                <ul className="list-unstyled flex-grow-1">
                  {plan.features.map((f) => (
                    <li key={f} className="mb-2 text-white-50">
                      <span className="text-success me-2">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA_LINK}?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success fw-bold mt-4 w-100"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process section */}
      <section className="mb-5">
        <h3 className="text-center text-white h5 mb-4">Proceso de trabajo</h3>
        <div className="row g-3 justify-content-center">
          {[
            { step: '01', label: 'Reunión inicial', desc: 'Relevamos tus necesidades y objetivos.' },
            { step: '02', label: 'Propuesta + presupuesto', desc: 'Detallamos alcance, plazos y precio.' },
            { step: '03', label: 'Desarrollo iterativo', desc: 'Entregas parciales con feedback continuo.' },
            { step: '04', label: 'Deploy y entrega', desc: 'Lanzamiento en producción con soporte post-entrega.' },
          ].map((item) => (
            <div key={item.step} className="col-6 col-md-3 text-center">
              <div className="bg-dark border border-secondary rounded p-3 h-100">
                <span className="display-6 fw-bold text-success">{item.step}</span>
                <p className="text-white fw-semibold mb-1 mt-2">{item.label}</p>
                <p className="text-secondary small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="text-center mb-5">
        <h3 className="h6 text-secondary text-uppercase mb-3">Tecnologías</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {[
            'Next.js', 'React', 'TypeScript', 'Node.js', 'Express',
            'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Bootstrap', 'MercadoPago',
          ].map((tech) => (
            <span key={tech} className="badge bg-secondary text-white px-3 py-2">
              {tech}
            </span>
          ))}
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
