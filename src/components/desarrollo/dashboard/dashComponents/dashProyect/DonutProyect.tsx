'use client'
import React from 'react'
import { DonutChart, Card, Legend } from '@tremor/react';

const datahero = [
    {
        name: 'HTLM',
        value: 6,
    },
    {
        name: 'Javascript',
        value: 6,
    },
    {
        name: 'Python',
        value: 0,
    },
    {
        name: 'Java',
        value: 2,
    },
    {
        name: 'Typescript',
        value: 1,
    },
    {
        name: 'Otros',
        value: 1,
    },
];
const dataFormatter = (number: number) =>
    ` ${Intl.NumberFormat('us').format(number).toString()}`;

export default function DonutProyect() {
    return (
        <>
            <Card className="mx-auto space-y-12">
                <div className="space-y-3">
                    <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        Cantidad de proyectos en GitHub
                    </span>
                    <div className="flex flex-col justify-center">
                        <DonutChart
                            data={datahero}
                            variant="donut"
                            valueFormatter={dataFormatter}
                            onValueChange={(v) => console.log(v)}
                            colors={['red', 'yellow', 'green', 'oragne', 'blue', 'violet']}
                        />
                        <Legend
          categories={['HTML', 'Javascript', 'Python', 'Java', 'Typescript', 'Otros']}
          colors={['red', 'yellow', 'green', 'oragne', 'blue', 'violet']}
          className="max-w-xs"
        />
                    </div>
                </div>
            </Card>
        </>
    )
}
