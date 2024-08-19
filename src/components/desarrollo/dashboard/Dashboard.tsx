'use client'
import React from 'react'
import YearContainer from '@/components/desarrollo/dashboard/dashComponents/yearOfLanguage/YearContainer'
import DonutProyect from './dashComponents/dashProyect/DonutProyect'
import HourPerDay from './dashComponents/hourPerDay/HourPerDay'
import InPorgres from './dashComponents/ProgresoCarrera/InPorgres'
import { Card } from '@tremor/react'

export default function Dashboard() {
  return (
    <>
    <h2 className='text-center'>Datos de mis actividades en desarrollo frontend</h2>
    <section className='row flex flex-row align-strerch'>
        <div className='col-3 offset-1 py-2'>
            <DonutProyect/>
        </div>
        <div className='col-4 py-2'>
            <YearContainer/>
        </div>
        <div className='col-3 py-2'>
            <InPorgres/>
        </div>
    </section>
    <section className='row flex flex-row'>
        <div className='col-10 offset-1 py-2'>
            <HourPerDay/>
        </div>
    </section>
    </>
  )
}
