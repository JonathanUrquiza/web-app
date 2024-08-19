import React from 'react'

export default function SliderContainer() {
  return (
    <>
      <section className="glide">
        <h2 className="title--font">Portfolio Frontend</h2>
        <div className="glide__track" data-glide-el="track">

          <ul className="glide__slides mb-5">
            <li className="glide__slide">
              <section className="row text-center">
                <article className="col-md-7 my-4">
                  <h2 className="featurette-heading fw-normal lh-1">Structure <span className="text-info">HTML</span> and <span
                    className="text-info">CSS</span> style</h2>
                  <ul className="lead list-unstyled">
                    <li>HTML.</li>
                    <li>Estilos en línea.</li>
                    <li>Elementos en bloque y línea.</li>
                    <li>Listas ordenadas y desordenadas.</li>
                    <li>Images.</li>
                    <li>Form.</li>
                    <li>Tablas.</li>
                    <li>Div.</li>
                    <li>Picture.</li>
                  </ul>
                </article>

                <div className="col-md-4 order-md-1 my-4">
                  <picture>
                    <iframe className="border rounded-3" src="codecamp/proyect-19.html" width="100%"
                      height="100%"></iframe>
                  </picture>
                </div>
              </section>
            </li>
            <li className="glide__slide">
              <section className="row text-center">
                <article className="col-md-5 offset-m-1 my-4 order-md-2">

                  <h2 className="featurette-heading fw-normal lh-1">Structure <span className="text-info">HTML</span> and <span
                    className="text-info">CSS</span> style</h2>
                  <ul className="lead list-unstyled">
                    <li>Box modeling.</li>
                    <li>Flexbox</li>
                    <li>CSS grids.</li>
                    <li>Animaciones.</li>
                    <li>Transformaciones.</li>
                    <li>Transiciones.</li>
                    <li>Git</li>
                    <li>Github.</li>
                    <li>Frameworks.</li>
                  </ul>

                </article>

                <div className="col-md-5 my-4 offset-md-1 order-md-1">
                  <picture>
                    <iframe className="border rounded-3" src="codecamp/proyect-16.html"  width="100%"
                      height="100%"></iframe>
                  </picture>
                </div>
              </section>
            </li>
            <li className="glide__slide">
              <section className="row text-center ">
                <article className="col-md-5 offset-md-1 my-4">
                  <h2 className="featurette-heading fw-normal lh-1">Structure <span className="text-info">HTML</span> and <span
                    className="text-info">CSS</span> style</h2>
                  <ul className="lead list-unstyled">
                    <li>Bootstrap.</li>
                    <li>Stios Responsive.</li>
                    <li>Navbar.</li>
                    <li>SASS.</li>
                    <li>Servidores.</li>
                    <li>S.E.O.</li>
                    <li>Subidas al servidor.</li>
                    <li>Hosting.</li>
                    <li>Asesoria de dominios y Hosting.</li>
                  </ul>
                </article>
                <div className="col-md-5 my-4 order-md-1">
                  <picture>
                    <iframe className="border rounded-3" src="codecamp/proyect-15.html"  width="100%"
                      height="100%"></iframe>
                  </picture>
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
    </>
  )
}
