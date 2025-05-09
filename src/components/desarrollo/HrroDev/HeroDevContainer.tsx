'use client'
import React from 'react'


export default function HeroDevContainer({ ClassRow, VisiblyHidden,articleBox, titleTwo, modified, division, paragraph, danger, info }: HeroDevContainerProps) {

    return (
        <> 
        <section className={ClassRow}>
            <h1 className={VisiblyHidden}>Desarrollo de software</h1>
            <article className={articleBox}>
                <h2 className={titleTwo}><span className={modified}>O</span>bjetivo</h2>
                <div className={division}>
                    <p className={paragraph}>Esta sección está dedicada a la muestra de mis primero trabajo realizado en <span className={danger}>HTML5 </span> 
                         y <span className={info}>CSS3</span>
                        <br />
                        El objetivo es ir demostrando las habilidades que fui desarrollando a lo largo de mis capacitaciones como Frontend Developer.
                        <br /></p>
                </div>
            </article>
        </section>
        </>  
    )
}
