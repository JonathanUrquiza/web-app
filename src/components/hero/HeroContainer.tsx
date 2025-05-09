'use client'
import Link from 'next/link'
import React from 'react'


export default function HeroContainer({ ClassRow,
     VisiblyHidden,
     articleBox, 
     titleTwo, 
     modified, 
     division, 
     paragraph, 
     danger, 
     info, 
     btnSuccess,
     dataAos,
     dataDuration
    }: HeroDevContainerProps) {
    
   
    return (
        <> 
        <section className={ClassRow} data-aos={dataAos} data-aos-duration={dataDuration} >
            <h1 className={VisiblyHidden}>Desarrollo de software</h1>
            <article className={articleBox}>
                <h2 className={titleTwo}><span className={modified}>N</span>osotros</h2>
                <div className={division}>
                    <p className={paragraph}>Soy un desarrolador, enfocada en sitios web´s. Cuento
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
                    <Link href="/form" className={btnSuccess}>Contactenos</Link>
                </div>
            </article>
        </section>
        </>  
    )
}
