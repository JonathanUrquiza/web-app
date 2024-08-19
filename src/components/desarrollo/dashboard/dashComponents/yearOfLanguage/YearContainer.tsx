'use client'
import React from 'react'
import { BarChart, Card } from '@tremor/react';


const chartdata = [
    {
      date: 'Framework',
      'Javascript': 2,
      'Python': 1,
      'Java': 0,
      'Typescript': 0.5,
    },
    {
      date: 'Frontend',
      'Javascript': 2,
      'Python': 0,
      'Java': 0,
      'Typescript': 0.5,
    },
    {
      date: 'Datos',
      'Javascript': 1.5,
      'Python': 1,
      'Java': 0,
      'Typescript': 0.5,
    },
    {
        date: 'Backend',
        'Javascript': 1.5,
        'Python': 0,
        'Java': 0.5,
        'Typescript': 0.5,
      },
      

  ];


export default function YearContainer() {
    return(
        <>
        <Card>
        <BarChart
          className="h-72"
          data={chartdata}
          index="date"
          categories={['Javascript', 'Python', 'Java', 'Typescript']}
          colors={['yellow', 'green', 'red', 'blue']}
          yAxisWidth={30}
          yAxisLabel="Tiempo de uso (años)"
          xAxisLabel="Lenguajes de programación"
          />
        </Card>  
      </>
      )
}
  
