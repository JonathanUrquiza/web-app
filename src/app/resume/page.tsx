'use client'
import React from 'react'
import Image from 'next/image'
import { List, ListItem } from '@tremor/react';
import 'bootstrap/dist/css/bootstrap.css'

import Link from 'next/link'
import { Card } from 'react-bootstrap';

export default function ResumeContainer() {
  return (
    <>

      <section className='container-md p-2 my-4'>
        <h2 className="visually-hidden">Desarrollo de software</h2>
        <Card className='w-100'>
          <Card.Header className='d-flex flex-col flex-md-row justify-center align-items-center'>
            <Image className=' border rounded-full shadow-lg' width={130} height={130} src={'/'} alt={'Foto de perfil'} />
            <div className='px-1'>
              <Card.Title className='text-center text-md-start px-md-2 my-2'>Jonathan Javier Urquiza</Card.Title>
              <Card.Subtitle className='px-md-2 my-2'>Estudiante de Tecnicatura Superior en Análisis de sistemas. | Frontend Developer.| analista de datos en Python.</Card.Subtitle>
            </div>
          </Card.Header>
          <Card.Body className="flex flex-col flex-lg-row align-center justify-evenly">
            <Card className='col-lg-5 bg-dark text-light my-1 p-1 p-lg-3 shadow-md'>
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
            <Card className='col-lg-5 bg-dark text-light p-3 shadow-md'>
              <h2 className='card-subtitle d-inline-block mb-5'>Resumen Profesional</h2>
              <p>Que ofrezco? Es una pregunta frecuente, la cual prentedo responder en esta sección,
                entendiendo las dificultades que enfrenta la industria, voy a
                describir cual es el valor agregado que ofrezco.
                Mis atributos mas fuertes y destacables:
                <br />
                Siendo una persona analítica, metódica y
                con experiencia laboral tanto como empleado y como emprendedor independiente,
                en otros ambitos he desarrollado una fuerte capacidad para aprender rápidamente
                sobre las tareas que se me asignen, al mismo tiempo tener la capacidad de entender
                de los porcesos de negocio de las distintas problemáticas que he enfrentado.
                Tengo un fuerte sentido del deber y soy dedicado.</p>
            </Card>
          </Card.Body>

          <Card.Body className='row'>
              <h3 className='text-center text-decoration-underline link-underline-dark'>Habilidades - Skills</h3>
            <Card className='row-8 bg-dark'>
              <div className='flex flex-col flex-md-row align-center justify-around'>
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
          </Card.Body>
        </Card>
      </section>

    </>
  )
}