import React from 'react'
import Image from 'next/image'

export default function Slider() {
  return (
    <>
        <h2 className="display-5 lead efect">Our services</h2>
    <section className="aos-init" data-aos="fade-left" data-aos-offset="400" data-aos-delay="100" data-aos-duration="400">
      <section className="glide">
        <div className="glide__track" data-glide-el="track">

          <ul className="w-100 glide__slides mb-5">
            <li className="glide__slide">
              <section className="row">
                <article className="col-md-7 text-center my-4">
                  <h2 className="featurette-heading fw-normal lh-1">.Frontend Dev <span className="text-danger">AppWeb;</span>
                  </h2>
                  <ul className="lead list-unstyled">
                    <li>API´s</li>
                    <li>Fetching</li>
                    <li>Frameworks.</li>
                    <li>Movile First.</li>
                    <li>Consulta a base de datos (SQL).</li>
                    <li>Gestor de verciones.</li>
                    <li>S.E.O.</li>
                  </ul>
                </article>

                <div className="col-md-5 order-md-1">
                  
                  <picture>
                    <Image className="img-fluid mx-auto border rounded border-grey-light" src=""
                      alt=""/>
                  </picture>
                  <div className="d-flex justify-content-around">
                    <button className="btn btn-info border rounded-2 my-3 col-7" type="submit">More information</button>
                  </div>
                </div>
              </section>
            </li>
            <li className="glide__slide">
              <section className="row text-center">
                <article className="col-md-7 order-md-2">

                  <h2 className="featurette-heading fw-normal lh-1">Backend Dev<span className="text-info">
                      AppWeb</span></h2>
                  <ul className="lead list-unstyled">
                    <li>Entorno de trabajo nodejs.</li>
                    <li>Ciclos e iteraciones.</li>
                    <li>Componentes.</li>
                    <li>Arquitecturas (MVC).</li>
                    <li>Middleware.</li>
                    <li>Asincronias y promesas.</li>
                    <li>Web Module.</li>
                    <li>Eventos.</li>
                    <li>Ajax y Fetch.</li>
                    <li>API´s</li>
                  </ul>

                </article>

                <div className="col-md-5 order-md-1">
                    <picture>
                    <Image className="img-fluid mx-auto border rounded border-grey-light" src="img/fondos/servicios.png"
                      alt="Imagen represntativa del codigo de desarrollo de un backend."/>
                  </picture>
                  <div className="d-flex justify-content-around">
                    <button className="btn btn-info border rounded-2 my-3 col-7" type="submit">More information</button>
                  </div>
                </div>
              </section>
            </li>
            <li className="glide__slide">
              <section className="row">
                <article className="col-md-7 text-center my-4">
                  <h2 className="featurette-heading fw-normal lh-1">Testing Funcional <span
                      className="text-secondary border-1 border-secondary">BlackBox</span></h2>
                  <ul className="lead list-unstyled">
                    <li>Herramientas:
                      <ul>-SpitaPlan</ul>
                      <ul>-Jmeter</ul>
                      <ul>-Jira</ul>
                    </li>
                    <li>Metodologías agile.</li>
                    <li>Agile testing.</li>
                    <li>Test set.</li>
                    <li>User case.</li>
                    <li>Test case.</li>
                  </ul>
                </article>
                <div className="col-md-5 order-md-1">
                  <picture>
                    <Image className="img-fluid mx-auto border rounded border-grey-light" src="img/fondos/web-personal.jpg"
                      alt="Imagen represntativa del codigo de desarrollo de un backend."/>
                  </picture>
                  <div className="d-flex justify-content-around">
                    <button className="btn btn-info border rounded-2 my-3 col-7" type="submit">More information</button>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </section>
    </section>
    </>
  )
}
