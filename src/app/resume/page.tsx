'use client'
import React from 'react'
import Image from 'next/image'
import { Card, List, ListItem } from '@tremor/react';
import 'bootstrap/dist/css/bootstrap.css'

import Link from 'next/link'

export default function ResumeContainer() {
  return (
    <>
      <section className="row w-full">
        <article className='col-10 card offset-1 my-4'>
          <h2 className="visually-hidden">Desarrollo de software</h2>
          <Card className='card-header d-flex flex-row align-items-center'>
            <Image className='bg-dark border rounded-full' width={130} height={130} src={'/Link/de/la/imagen'} alt={'Foto de perfil'} />
            <div className='px-1'>
              <h2 className='card-title'>Jonathan Javier Urquiza</h2>
              <p className='card-subtitle'>Estudiante de Tecnicatura Superior en Análisis de sistemas. | Frontend Developer.| analista de datos en Python.</p>
            </div>
          </Card>
          <Card className="card-body d-flex flex-row align-items-stretch justify-content-around flex-wrap gap-4 px-4 py-5 my-5">
            <Card className='card bg-dark text-light p-5 shadow-md'>
              <ListItem>
                <span>Fecha de Nacimiento: </span>
                <span>18/09/1986</span>
              </ListItem>
              <ListItem>
                <span>Direción: </span>
                <span>Aguirre - Villa Crespo - 1414</span>
              </ListItem>
              <ListItem>
                <span>Localidad: </span>
                <span>Ciudad Autonoma de Buenos Aires</span>
              </ListItem>
              <ListItem>
                <span>Nacionalidad: </span>
                <span>Argentino</span>
              </ListItem>
              <ListItem>
                <span>Número de celular: </span>
                <span>
                  <Link className="" href="https://wa.me/5491168370362" target="_blank">
                  Whatsapp
                </Link>
                </span>
              </ListItem>
              <ListItem>
                <span>E-mail:</span>
                <span> <Link href={'jurquiza86@hotmail.com'}>jurquiza86@hotmail.com</Link></span>
              </ListItem>
              <ListItem>
                <span>GitHub: </span>
                <span> <Link href={'https://github.com/JonathanUrquiza/JonathanUrquiza'}>GitHub Personal</Link></span>
              </ListItem>
              <ListItem>
                <span>LinkedIn: </span>
                <span> <Link href={'https://www.linkedin.com/in/jonathan-urquiza/'}>LinkedIn</Link></span>
              </ListItem>
              <ListItem>
                <span>Youtube: </span>
                <span> <Link href={'https://www.youtube.com/@Sytem32'}>Youtube</Link></span>
              </ListItem>
            </Card>
            <Card className='card bg-dark text-light p-5 shadow-md '>
              <h2 className='card-subtitle d-inline-block mb-5'>Resumen Profesional</h2>
              <p>Que ofrezco? Es una pregunta frecuente, la cual prentedo responder en esta sección, 
                entendiendo las dificultades que enfrenta la industria, voy a 
                describir cual es el valor agregado que ofrezco.
                Mis atributos mas fuertes y destacables:
                <br/>
                Siendo una persona analítica, metódica y
                con experiencia laboral tanto como empleado y como emprendedor independiente,
                en otros ambitos he desarrollado una fuerte capacidad para aprender rápidamente
                sobre las tareas que se me asignen, al mismo tiempo tener la capacidad de entender
                de los porcesos de negocio de las distintas problemáticas que he enfrentado.
                Tengo un fuerte sentido del deber y soy dedicado.</p>
            </Card>
          </Card>
          <Card className=''>
            <Card className='bg-dark'>
              <div className='Card-header'>
              <h3 className='text-center text-decoration-underline text-info link-underline-info'>Habilidades - Skills</h3>
              </div>
              <div className='Cad-body flex flex-col align-center justify-around'>
                <div>
                  <h4 className='text-center text-info'>Soft skills</h4>
                  <List className='text-light'>
                    <ListItem>
                      <p>Auto-didacta.</p>
                    </ListItem>
                    <ListItem>
                      <p>Metodología agil.</p>
                    </ListItem>
                    <ListItem>
                      <p>Manejo de Jira.</p>
                    </ListItem>
                    <ListItem>
                      <p>Trabajo en equipo.</p>
                    </ListItem>
                    <ListItem>
                      <p>Mejora continua.</p>
                    </ListItem>
                    <ListItem>
                      <p>Flexibilidad.</p>
                    </ListItem>
                    <ListItem>
                      <p>Orientación a resultados.</p>
                    </ListItem>
                    <ListItem>
                      <p>Actitud positiva frente a los desafios.</p>
                    </ListItem>
                    <ListItem>
                      <p>Metódico.</p>
                    </ListItem>
                  </List>
                </div>
                <div>
                  <h4 className='text-center text-danger'>Hard skills</h4>
                  <List className='text-light'>
                  <ListItem>
                      <p>Manejo de lenguajes de programación.</p>
                    </ListItem>
                    <ListItem>
                      <p>Postman.</p>
                    </ListItem>
                    <ListItem>
                      <p>Frameworks de Frontend.</p>
                    </ListItem>
                    <ListItem>
                      <p>Manejo sólido de base de datos relacionales.</p>
                    </ListItem>
                    <ListItem>
                      <p>Manejo sólido de control de versiones.</p>
                    </ListItem>
                    <ListItem>
                      <p>Planillas de cálculos excel.</p>
                    </ListItem>
                    <ListItem>
                      <p>Entorno de ejecución (Node.JS).</p>
                    </ListItem>
                    <ListItem>
                      <p>Lenguaje de marcado.</p>
                    </ListItem>
                    <ListItem>
                      <p>LEnguajes typados</p>
                    </ListItem>
                  </List>
                </div>
              </div>
            </Card> 
          </Card>
        </article>
      </section>
    </>
  )
}