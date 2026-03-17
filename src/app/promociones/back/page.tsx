import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
  title: 'Backend Development | DevUrWeb',
  description:
    'Servicios de desarrollo backend: APIs REST, autenticación, base de datos e integración de pagos con Node.js. Precios en ARS — Jonathan Javier Urquiza.',
  robots: {
    index: true,
    follow: true
  }
};

const WA_LINK = 'https://wa.me/5491168370362';

const plans = [
  {
    name: 'API REST Básica',
    priceRange: '$400.000 – $700.000 ARS',
    badge: 'Punto de partida',
    badgeClass: 'bg-warning text-dark',
    features: [
      'Arquitectura RESTful con Node.js + Express',
      'Hasta 10 endpoints CRUD',
      'Base de datos relacional o NoSQL',
      'Validación de datos (Zod / Joi)',
      'Documentación con Swagger / Postman',
      'Deploy en Railway / Render',
    ],
    highlight: false,
  },
  {
    name: 'API con Auth + Base de datos',
    priceRange: '$700.000 – $1.200.000 ARS',
    badge: 'Más completo',
    badgeClass: 'bg-info text-dark',
    features: [
      'Todo lo de API REST Básica',
      'Autenticación JWT + Refresh Tokens',
      'Roles y permisos de usuario',
      'ORM (Prisma / Mongoose)',
      'Migrations y seeds',
      'Variables de entorno seguras',
      'Entrega en 20–35 días hábiles',
    ],
    highlight: true,
  },
  {
    name: 'Integración de Servicios / Pagos',
    priceRange: '$500.000 – $900.000 ARS',
    badge: 'E-commerce listo',
    badgeClass: 'bg-success',
    features: [
      'Integración con MercadoPago / Stripe',
      'Webhooks para notificaciones de pago',
      'Integración con APIs de terceros',
      'Envío de emails (Resend / Nodemailer)',
      'Manejo de estados de pedido',
      'Documentación técnica incluida',
    ],
    highlight: false,
  },
];

export default function BackendDev() {
  return (
    <main className="container-fluid bg-black min-vh-100 py-5 px-3 px-md-5">
      {/* Hero */}
      <section className="text-center mb-5">
        <span className="badge bg-warning text-dark mb-3">Backend Development</span>
        <h1 className="display-5 fw-bold text-white mb-3">
          APIs <span className="text-warning">robustas</span> y escalables
        </h1>
        <p className="lead text-secondary col-lg-7 mx-auto">
          Desarrollo de servicios backend con Node.js, autenticación segura, bases de datos
          optimizadas e integraciones de pago listas para producción.
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
                <h2 className="card-title h5 fw-bold text-warning mb-1">{plan.name}</h2>
                <p className="fw-bold text-white mb-3" style={{ fontSize: '1.1rem' }}>
                  {plan.priceRange}
                </p>
                <ul className="list-unstyled flex-grow-1">
                  {plan.features.map((f) => (
                    <li key={f} className="mb-2 text-white-50">
                      <span className="text-warning me-2">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA_LINK}?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning text-dark fw-bold mt-4 w-100"
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
        <h3 className="h6 text-secondary text-uppercase mb-3">Tecnologías</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Prisma', 'JWT', 'MercadoPago'].map(
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
