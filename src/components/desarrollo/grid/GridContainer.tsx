'use client'
import React from 'react'
import Link from 'next/link'
import CardContainer from '../card/CardContainer'

export default function GridContainer() {
  return (
    <section className="row">
      <h4 className="featurette-heading fw-normal lh-1 col-12 ps-4"><span className="text-info">Proyectos personales
        realizados en la
        plataforma de </span><Link className="card-link text-decoration-none text-info" href="https://www.freecodecamp.org/"
          target="_blank">FreeCodeCamp</Link></h4>
      <article
        className="d-flex flex-column flex-wrap flex-md-row align-items-center my-md-5 justify-content-md-between justify-content-center">
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 1'}/>
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 2'}/>
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 3'}/>
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 4'}/>
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 5'}/>
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 6'}/>
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 7'}/>
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 8'}/>
          <CardContainer CardLink={'/Link/de/enlace'} CardImage={'/link/de/la/imagen'} CardTitle={'Titulo de la card 9'}/>
      </article>
    </section>
  )
}
