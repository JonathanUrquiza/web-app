'use client'
import React from 'react'


export default function HeroContainer() {
   
    return (
        <> 
        <section className="row ">
            <h1 className="visually-hidden">Desarrollo de software</h1>
            <article className="hero col-12 px-4 py-5 my-5 text-center">
                <h2 className="hero_title display-5 lead"><span className="hero_title--modified">N</span>osotros</h2>
                <div className="hero_body col-lg-6 mx-auto">
                    <p className="hero_text lead mb-4">Soy un desarrolador, enfocada en sitios web´s. Cuento
                        con múltiples herramientas para brindar a mis clientes un diseño que se adapte a sus necesidades,
                        ofreciendo un producto acorde a sus gustos. Me mantengo en capacitación continua con las herramientas y
                        los entornos que demanda el mercado.
                        <br />
                        Soy capaces de desarrollar una aplicación que se adapte a las necesidades de nuestros clientes y a las
                        distintas plataformas en las que se necesite implementar.
                        <br />
                        Además, colaboro con equipos que se manejan en entornos ágiles para asegurarnos de que cada proceso de desarrollo cumpla con
                        las características deseadas, los requisitos establecidos y las normas vigentes de desarrollo.
                        <br />
                        ¡Estoy disponible para cualquier consulta que tengas!
                    </p>
                    <a href="/form" className="btn btn-success">Contactenos</a>
                </div>
            </article>
        </section>
        </>  
    )
}
