'use client'
import React from 'react'
import YearContainer from '@/components/desarrollo/dashboard/dashComponents/yearOfLanguage/YearContainer'
import DonutProyect from './dashComponents/dashProyect/DonutProyect'
import HourPerDay from './dashComponents/hourPerDay/HourPerDay'
import InPorgres from './dashComponents/ProgresoCarrera/InPorgres'
import GraphBar from './dashComponents/graphbar/GraphBar'
import DashData from './dashComponents/dashData/DashData'
import GraphProgramming from './dashComponents/graphbar/GraphProgramming'
import GraphProgramTy from './dashComponents/graphbar/GraphProgramTy'


export default function Dashboard() {



  return (
    <>
    <h2 className='text-center'>Datos de mis actividades en desarrollo frontend</h2>
    <section  className='col-10 offset-1 grid grid-cols-3 gap-2 my-2'>
            <DonutProyect/>
            <YearContainer/>
            <InPorgres/>
    </section>
    <h3 className="text-lg text-center font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Tiempo dedicado a la participación de proyectos</h3>
    <section className='col-10 offset-1'>
            <HourPerDay/>
    </section>
    <h3 className="text-lg text-center font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Principales Herramientas</h3>
    <section  className='col-10 offset-1 grid grid-cols-3 gap-2 my-2'>
      <GraphBar DashData = {DashData}/>
      <GraphProgramming DashData = {DashData}/>
      <GraphProgramTy DashData = {DashData}/>
    </section>
    </>
  )
}
