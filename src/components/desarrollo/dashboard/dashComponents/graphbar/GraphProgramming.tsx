'use client'
import { Card, LineChart } from '@tremor/react'
import React from 'react'

const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('us').format(number).toString()}`

export default function GraphProgramming({ DashData }: any) {

    

    return (
        <>
            <Card>
                <LineChart
                    className='h-80'
                    index='date'
                    data={DashData}
                    categories={['Javascript']}
                    colors={['yellow']}
                    valueFormatter={dataFormatter}
                    onValueChange={(v) => console.log(v)}
                    yAxisLabel="Horas de práctica"
                    xAxisLabel="meses del año"
                />
            </Card>
        </>
    )
}
