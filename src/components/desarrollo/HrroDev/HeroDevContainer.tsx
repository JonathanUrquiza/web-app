'use client'
import React from 'react'


export default function HeroDevContainer() {
   
    return (
        <> 
        <section className="row ">
            <h1 className="visually-hidden">Desarrollo de software</h1>
            <article className="hero col-12 px-4 py-5 my-5 text-center">
                <h2 className="hero_title display-5 lead"><span className="hero_title--modified">O</span>bjetivo</h2>
                <div className="hero_body col-lg-6 mx-auto">
                    <p className="hero_text lead mb-4">Esta sección está dedicada a la muestra de mis primero trabajo realizado en <span className='text-danger'>HTML5 </span> 
                         y <span className='text-info'>CSS3</span>
                        <br />
                        El objetivo es ir demostrando las habilidades que fui desarrollando a lo largo de mis capacitaciones como Frontend Developer.
                        <br /></p>
                </div>
            </article>
        </section>
        </>  
    )
}
