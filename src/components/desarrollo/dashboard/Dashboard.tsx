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
import { useTheme } from '@/hooks/useTheme'


export default function Dashboard() {
  const theme = useTheme()
  const tremorClass = theme !== 'light' ? 'dark' : ''

  return (
    <div className={tremorClass}>
    <h2 className='text-center display-6'>Datos de mis actividades en desarrollo frontend</h2>
    <section  className='col-10 offset-1 grid grid-cols-3 gap-2 my-2'>
            <DonutProyect/>
            <YearContainer/>
            <InPorgres/>
    </section>
    <h3 className="lead fw-semibold text-light text-center">Tiempo dedicado a la participación de proyectos</h3>
    <section className='col-10 offset-1'>
            <HourPerDay/>
    </section>
    <h3 className="lead fw-semibold text-light text-center">Principales Herramientas</h3>
    <section  className='col-10 offset-1 grid grid-cols-3 gap-2 my-2'>
      <GraphBar DashData = {DashData}/>
      <GraphProgramming DashData = {DashData}/>
      <GraphProgramTy DashData = {DashData}/>
    </section>
    </div>
  )
}
